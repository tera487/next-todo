import { Button } from "@/app/lib/material";
import Link from "next/link";

export default function Hello() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>To Be Continued!</h1>
      <Button
        variant="contained"
        style={{ backgroundColor: "#1976d2", margin: "8px" }}
      >
        <Link href="/">Back</Link>
      </Button>
    </main>
  );
}
