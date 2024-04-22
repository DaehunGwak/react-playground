import {DogFeature} from "@/src/features/dog";

export default function DogWidget() {
  return (
    <div className="flex flex-col min-w-64 w-2/3 shadow-gray-400 shadow-md rounded-lg pt-9 pb-6 px-3">
      <DogFeature/>
    </div>
  );
}
