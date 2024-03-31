import {ListPage} from "@/page/list";

export default function ListName({
  params: {name},
}: {
  params: {name: string}
}) {
  return <ListPage name={name}/>;
}
