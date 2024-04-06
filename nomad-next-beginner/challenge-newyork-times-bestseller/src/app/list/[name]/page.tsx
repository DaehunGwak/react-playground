import {ListPage} from "@/page/list";
import {getBestsellerDetailResult} from "@/entities/bestseller";

export async function generateMetadata({
  params: {name}
}: {
  params: {name: string}
}) {
  const result = await getBestsellerDetailResult(name);
  return {
    title: result.display_name ?? result.list_name
  };
}

export default function ListName({
  params: {name},
}: {
  params: {name: string}
}) {
  return <ListPage name={name}/>;
}
