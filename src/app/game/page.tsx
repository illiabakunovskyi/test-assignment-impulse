import { Suspense } from "react";
import { GamePageContent } from "./_components";
import { getConfig } from "@/api/getConfig";

export default async function GamePage() {
  const config = await getConfig();

  return (
    <Suspense fallback={<div>Game config is loading...</div>}>
      <GamePageContent config={config} />
    </Suspense>
  );
}
