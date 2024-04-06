import {BestsellerListDetailSuspense} from "@/widgets/bestseller";

export function ListPage({name}: {name: string}) {
  return (
    <div style={{padding: "80px 24px"}}>
      <BestsellerListDetailSuspense name={name}/>
    </div>
  );
}
