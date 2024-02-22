import { Globe2 } from "lucide-react";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <div className="flex items-center gap-2">
        <Globe2 className="text-emerald-600" />
        <p className="text-emerald-600 text-3xl">Scrum Sphere</p>
      </div>
    </main>
  );
}
