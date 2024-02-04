import type { MetaFunction } from "@remix-run/node";

import { Button } from "~/ui/button";
import { TypographyH1 } from "~/ui/typography.h1";
import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <Button variant="destructive">click me</Button>
      <TypographyH1>sdkfjkasdjf</TypographyH1>
    </main>
  );
}
