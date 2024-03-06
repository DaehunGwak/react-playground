import {Link, Outlet, useParams} from "react-router-dom";
import {users} from "../../data/mock";

function User() {
  const {userId} = useParams();
  const user = users[Number(userId) - 1];

  return (
    <div>
      <h1>User with id {userId} is named: {user.name}</h1>
      <hr/>
      <Link to={"followers"}>See followers</Link>
      <Outlet context={{userName: user.name}}/>
    </div>
  );
}

export default User;
