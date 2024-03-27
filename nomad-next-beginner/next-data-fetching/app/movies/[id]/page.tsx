import {Suspense} from "react";
import MovieInfo from "@/app/(components)/movie-info";
import MovieVideos from "@/app/(components)/movie-videos";

export default function MovieDetail({params: {id},}: {params: { id: string }}) {
  return (
    <>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id}/>
      </Suspense>
      <Suspense fallback={<div>Loading movie videos</div>}>
        <MovieVideos id={id}/>
      </Suspense>
    </>
  );
}
