export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-xl w-96">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold -mb-0.5">In transit</span>
            <span className="text-4xl font-semibold">Coolblue</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-400"/>
        </div>
        <div className="my-2 flex items-center gap-2">
          <span className="bg-green-400 text-white px-2.5 py-1.5 text-sm rounded-full uppercase">Today</span>
          <span>9:30-10:30</span>
        </div>
        <div className="relative mb-5">
          <div className="absolute bg-gray-200 rounded-full w-full h-2"/>
          <div className="absolute bg-green-400 rounded-full w-2/3 h-2"/>
        </div>
        <div className="flex justify-between items-center text-gray-600">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span>Delivered</span>
        </div>
      </div>
    </main>
  );
}
