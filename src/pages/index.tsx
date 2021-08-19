import React from "react";
import { PageContent } from "../components/PageContent";
import { PageFooter } from "../components/PageFooter";
import { PageHeader } from "../components/PageHeader";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <PageHeader />
      <PageContent />
      <PageFooter />
    </div>
  );
}
