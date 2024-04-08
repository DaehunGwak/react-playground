import "@/src/shared/lib/db";
import db from "@/src/shared/lib/db";

export default async function Home() {
  const tests = await db.test.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="rounded-3xl shadow-lg p-6 bg-white">
        hello next.js chat
      </div>
      {
        tests.map(test =>
          <div key={test.id} className="rounded-3xl shadow-lg p-6 bg-white">
            {test.id}: {test.text}
          </div>
        )
      }
    </main>
  );
}
