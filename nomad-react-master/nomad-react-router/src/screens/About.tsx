import {useSearchParams} from "react-router-dom";

function About() {
  const [searchParams, setSearchParams] = useSearchParams();

  setTimeout(() => {
    setSearchParams("test=ttt&all=aaaa");
  }, 3000);

  return (
    <div>
      <h1>About</h1>
      <span>
        {`test: ${searchParams.get("test")}, all: ${searchParams.get("all") ?? "unknown"}`}
      </span>
    </div>
  );
}

export default About;
