import {getBestsellerDetailResult} from "@/entities/bestseller";

export async function BestsellerListDetail({name}: {name: string}) {
  const result = await getBestsellerDetailResult(name);

  return <div>
    {JSON.stringify(result)}
  </div>;
}
