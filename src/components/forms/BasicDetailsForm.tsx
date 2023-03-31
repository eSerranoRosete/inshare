import { Save } from "lucide-react";
import React, { forwardRef } from "react";
import { Button } from "../ui/Button";
import { useStudioActions } from "~/context/studio/studioContext";
import { api } from "~/utils/api";
import Link from "next/link";
import { useRouter } from "next/router";

interface IFProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading?: boolean;
  defaultValues?: IFDefaultValues;
  onCancel?: () => void;
}

interface IFDefaultValues {
  displayName?: string;
  displayTitle?: string;
  org?: string;
}

export const BasicDetailsForm = forwardRef<HTMLFormElement, IFProps>(
  ({ onSubmit, isLoading, defaultValues, onCancel }, ref) => {
    const action = useStudioActions();

    return (
      <form className="flex flex-col gap-3" ref={ref} onSubmit={onSubmit}>
        <input
          type="text"
          name="displayName"
          id="displayName"
          defaultValue={defaultValues?.displayName}
          placeholder="Display Name *"
          className="w-full rounded-md bg-transparent text-sm focus:ring-primary"
          onChange={(e) => action.setDisplayName(e.target.value)}
          required
        />
        <input
          type="text"
          name="displayTitle"
          id="displayTitle"
          defaultValue={defaultValues?.displayTitle}
          placeholder="Display Title"
          className="w-full rounded-md bg-transparent text-sm focus:ring-primary"
          onChange={(e) => action.setDisplayTitle(e.target.value)}
        />
        <input
          type="text"
          name="org"
          id="org"
          defaultValue={defaultValues?.org}
          placeholder="Organization / Business Name"
          className="w-full rounded-md bg-transparent text-sm focus:ring-primary"
          onChange={(e) => action.setOrgName(e.target.value)}
        />
        <div className="mt-2 flex items-center justify-end gap-2">
          <Button iconStart={<Save />} type="submit" loading={isLoading}>
            Save
          </Button>
          <Button onClick={onCancel} variant="secondary" type="reset">
            Cancel
          </Button>
        </div>
      </form>
    );
  }
);
