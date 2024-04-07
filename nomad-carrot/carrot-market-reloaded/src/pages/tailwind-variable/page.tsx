export default function TailwindVariablePage() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5">
      <div className="flex flex-col gap-2
        shadow-lg p-5 rounded-3xl w-full max-w-screen-sm bg-white text-black"
      >
        <input className="w-full rounded-full h-10 bg-gray-200 px-5 outline-none
                          ring ring-transparent focus:ring-orange-300 focus:ring-offset-2 transition-shadow
                          placeholder:drop-shadow"
               type="text"
               placeholder="Search here..."/>
        <button className="bg-black py-2 rounded-full text-white active:scale-90 transition-transform">
          Search
        </button>
      </div>
    </main>
  );
}
