import {BestsellerListDetailSuspense} from "@/widgets/bestseller";

export function ListPage({name}: {name: string}) {
  return (
    <div style={{paddingTop: "80px"}}>
      <BestsellerListDetailSuspense name={name}/>
    </div>
  );
}
