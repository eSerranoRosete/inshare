import * as Sidebar from "~/components/ui/Sidebar";
import { useCallback, useEffect, useRef } from "react";
import { BasicDetailsForm } from "../../forms/BasicDetailsForm";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { SidebarExpandable } from "~/components/ui/SidebarExpandable";
import { useStudioActions } from "~/context/studio/studioContext";
import { Button } from "~/components/ui/Button";
import { Trash } from "lucide-react";
import { ButtonModal } from "~/components/ui/ButtonModal";

export const EditCardSidebar = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const actions = useStudioActions();

  const { mutateAsync: editCard, isLoading: editLoading } =
    api.card.edit.useMutation();
  const { mutateAsync: deleteCard, isLoading: deleteLoading } =
    api.card.delete.useMutation({
      onSuccess: () => router.push("/studio"),
    });

  const { data } = api.card.getSingle.useQuery({
    id: router.query.id as string,
  });

  const handleDeleteCard = useCallback(async (onSuccess: () => void) => {
    await deleteCard({ id: router.query.id as string });
    onSuccess();
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fields = formRef.current?.querySelectorAll("input");

    let payload: any = {
      id: router.query.id,
    };

    fields?.forEach((field) => {
      payload[field.name] = field.value;
    });

    await editCard(payload);
  };

  useEffect(() => {
    if (data) {
      actions.setDisplayName(data!.displayName);
      actions.setDisplayTitle(data!.displayTitle);
      actions.setOrgName(data!.org);
    }
  }, [data]);

  if (!data) {
    return <>No data...</>;
  }

  return (
    <>
      <Sidebar.Header
        title="Edit Card"
        description="Customize the look and information"
      />
      <Sidebar.Content>
        <SidebarExpandable
          items={[
            {
              label: "Basic Details",
              content: (
                <BasicDetailsForm
                  defaultValues={{
                    displayName: data.displayName,
                    displayTitle: data.displayTitle,
                    org: data.org,
                  }}
                  ref={formRef}
                  onSubmit={onSubmit}
                  isLoading={editLoading}
                  onCancel={() => router.push("/studio")}
                />
              ),
            },
            {
              label: "Advanced",
              content: (
                <ButtonModal
                  maxWidth="md"
                  title="Are you sure you want to delete this card?"
                  desc="This action cannot be undone."
                  buttonLabel="Delete Card"
                  buttonProps={{
                    variant: "danger",
                    size: "sm",
                    iconStart: <Trash />,
                    className: "w-full",
                  }}
                >
                  {({ closeDialog }) => (
                    <div className="mt-5 flex justify-end gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={closeDialog}
                      >
                        Cancel
                      </Button>
                      <Button
                        iconStart={<Trash />}
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteCard(closeDialog)}
                        loading={deleteLoading}
                      >
                        Delete
                      </Button>
                    </div>
                  )}
                </ButtonModal>
              ),
            },
          ]}
        />
      </Sidebar.Content>
    </>
  );
};
