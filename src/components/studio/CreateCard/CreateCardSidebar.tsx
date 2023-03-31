import * as Sidebar from "~/components/ui/Sidebar";
import { useRef } from "react";
import { BasicDetailsForm } from "../../forms/BasicDetailsForm";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

export const CreateCardSidebar = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const { mutate, isLoading } = api.card.create.useMutation({
    onSuccess: (data) => {
      router.push(`/studio?view=edit&id=${data.id}`);
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fields = formRef.current?.querySelectorAll("input");

    let payload: any = {};

    fields?.forEach((field) => {
      payload[field.name] = field.value;
    });

    mutate(payload);
  };

  return (
    <>
      <Sidebar.Header title="Create a new card" description="create new card" />
      <Sidebar.Content>
        <BasicDetailsForm
          ref={formRef}
          onSubmit={onSubmit}
          isLoading={isLoading}
          onCancel={() => router.push("/studio")}
        />
      </Sidebar.Content>
    </>
  );
};
