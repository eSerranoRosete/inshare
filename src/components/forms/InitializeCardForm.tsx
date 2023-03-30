import { Save } from "lucide-react";
import React from "react";
import { Button } from "../ui/Button";
import { useStudioActions } from "~/context/studio/studioContext";
import { api } from "~/utils/api";
import Link from "next/link";
import { useRouter } from "next/router";

export const InitializeCardForm = () => {
  const action = useStudioActions();
  const router = useRouter();
  const { mutate, isLoading } = api.card.create.useMutation();

  const formRef = React.useRef<HTMLFormElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fields = formRef.current?.querySelectorAll("input");

    let payload: any = {};

    fields?.forEach((field) => {
      payload[field.name] = field.value;
    });

    mutate(payload);
    router.push("/studio");
  };

  return (
    <form className="flex flex-col gap-3" ref={formRef} onSubmit={onSubmit}>
      <input
        type="text"
        name="displayName"
        id="displayName"
        placeholder="Display Name *"
        className="w-full rounded-md bg-transparent text-sm focus:ring-primary"
        onChange={(e) => action.setDisplayName(e.target.value)}
        required
      />
      <input
        type="text"
        name="displayTitle"
        id="displayTitle"
        placeholder="Display Title"
        className="w-full rounded-md bg-transparent text-sm focus:ring-primary"
        onChange={(e) => action.setDisplayTitle(e.target.value)}
      />
      <input
        type="text"
        name="org"
        id="org"
        placeholder="Organization / Business Name"
        className="w-full rounded-md bg-transparent text-sm focus:ring-primary"
        onChange={(e) => action.setOrgName(e.target.value)}
      />
      <div className="mt-5 flex items-center justify-end gap-2">
        <Button iconStart={<Save />} type="submit" loading={isLoading}>
          Save
        </Button>
        <Link href="/studio">
          <Button variant="secondary" type="reset">
            Cancel
          </Button>
        </Link>
      </div>
    </form>
  );
};
