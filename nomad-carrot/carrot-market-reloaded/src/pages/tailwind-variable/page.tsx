export default function TailwindVariablePage() {
  return (
    <main className="h-screen flex items-center justify-center p-5
                     bg-gray-100 sm:bg-amber-300 md:bg-green-200 lg:bg-cyan-200 xl:bg-orange-100 2xl:bg-purple-100">
      <div
        className="shadow-lg p-5 rounded-3xl w-full max-w-screen-sm bg-white text-black
                   flex flex-col gap-2 sm:flex-row"
      >
        <input className="w-full rounded-full h-10 bg-gray-200 px-5 outline-none
                          ring ring-transparent focus:ring-orange-300 focus:ring-offset-2 transition-shadow
                          placeholder:drop-shadow"
               type="text"
               placeholder="Search here..."/>
        <button className="bg-black py-2 rounded-full text-white active:scale-90 transition-transform sm:w-24">
          Search
        </button>
      </div>
    </main>
  );
}
