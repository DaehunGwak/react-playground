"use client";
import {useEffect, useState} from "react";

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    setMovies(await response.json());
    setLoading(true);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <span>{
        isLoading ? "loading" : JSON.stringify(movies)
      }</span>
    </>
  );
}
