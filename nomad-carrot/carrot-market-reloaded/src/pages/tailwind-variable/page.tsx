'use client';

import {FormEvent} from "react";

export default function TailwindVariablePage() {
  return (
    <main className="h-screen flex items-center justify-center p-5
                     bg-gray-100 sm:bg-amber-300 md:bg-green-200 lg:bg-cyan-200 xl:bg-orange-100 2xl:bg-purple-100">
      <form
        className="shadow-lg p-5 rounded-3xl w-full max-w-screen-sm bg-white text-black
                   flex flex-col gap-2 sm:flex-row group"
        onSubmit={preventDefault}
      >
        <div className="flex flex-col w-full group">
          <input className="w-full rounded-full h-10 bg-gray-200 px-5 outline-none
                          ring ring-transparent focus:ring-green-300 focus:ring-offset-2 transition-shadow
                          placeholder:drop-shadow
                          invalid:bg-red-100 invalid:focus:ring-red-500"
                 type="email"
                 placeholder="Email here..."
                 required
          />
          <span className="mx-2 mt-2 text-red-500 font-medium hidden group-invalid:block">Email is required</span>
        </div>
        <button className="py-2 h-10 rounded-full text-white active:scale-90 transition-transform sm:w-24
                           {/*bg-gradient-to-tr from-cyan-500 via-yellow-300 to-purple-400*/}
                           group-invalid:bg-gray-300 group-invalid:bg-none
                           bg-green-300">
          Log in
        </button>
      </form>
    </main>
  );
}

const preventDefault = (e: FormEvent) => {
  e.preventDefault();
}
