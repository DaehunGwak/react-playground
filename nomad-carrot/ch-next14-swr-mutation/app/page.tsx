import {DogWidget} from "@/src/widgets/dog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3">
      <DogWidget/>
    </main>
  );
}
