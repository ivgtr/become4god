import React from "react";

import { PageHeader } from "../components/PageHeader";
import { PageFooter } from "../components/PageFooter";
import { PageContent } from "../components/PageContent";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <PageHeader />
      <PageContent />
      <PageFooter />
    </div>
  );
}
