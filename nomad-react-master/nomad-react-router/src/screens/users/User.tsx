import {useParams} from "react-router-dom";
import {users} from "../../data/mock";

function User() {
  const {userId} = useParams();

  return (
    <div>
      <h1>User with id {userId} is named: {users[Number(userId) - 1].name}</h1>
    </div>
  );
}

export default User;
