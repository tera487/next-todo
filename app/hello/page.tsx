import { Button } from "@/app/lib/material";
import Link from "next/link";

export default function Hello() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World!</h1>
      <Button variant="contained">
        <Link href="/">Back</Link>
      </Button>
    </main>
  );
}
