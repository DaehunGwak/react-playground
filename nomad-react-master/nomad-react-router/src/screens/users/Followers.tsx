import {useOutletContext} from "react-router-dom";

interface FollowerContext {
  userName: string;
}

function Followers() {
  const {userName} = useOutletContext<FollowerContext>();

  return <h2>{userName}'s Followers</h2>;
}

export default Followers;
