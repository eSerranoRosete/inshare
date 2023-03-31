import Link from "next/link";
import React from "react";
import { Button } from "./ui/Button";
import { PlusCircle } from "lucide-react";

export const NoCardsYet = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-center text-2xl font-bold">You have no cards yet</h3>
      <p className="mb-3 text-center text-sm text-muted">
        Create a card to get started
      </p>
      <Link href="/studio?view=create">
        <Button variant="primary" iconEnd={<PlusCircle />}>
          Create Card
        </Button>
      </Link>
    </div>
  );
};
