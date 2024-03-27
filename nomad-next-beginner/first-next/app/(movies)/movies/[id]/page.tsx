export const metadata = {
  title: 'Movie'
};

export default function MovieDetail(
  {params: {id}}: {
    params: {id: string}, // path parameter
    searchParams: {} // query parameter
  }
) {
  return <>
    <h1>movie: {id}</h1>
  </>;
}
