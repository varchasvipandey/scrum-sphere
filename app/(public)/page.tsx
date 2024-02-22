import { Button } from "@/components/ui/button";
import { Routes } from "@/lib/routes";
import { siteMeta } from "@/meta";
import { Globe2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center space-y-8">
      <div className="flex flex-col space-y-2 items-center">
        <div className="flex items-center gap-2">
          <Globe2 className="text-primary" />
          <p className="text-primary text-4xl font-bold">Scrum Sphere</p>
        </div>

        <p className="text-center max-w-[60vh]">{siteMeta.description}</p>
      </div>

      <div className="flex space-x-2">
        <Button variant="secondary" asChild>
          <Link href={Routes.signIn}>Login</Link>
        </Button>
        <Button asChild>
          <Link href={Routes.signUp}>Get Started for Free!</Link>
        </Button>
      </div>
    </main>
  );
}
