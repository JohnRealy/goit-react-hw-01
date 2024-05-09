import Profile from "./Profile/Profile";
import userData from "../usersData.json";

export default function App() {
  return (
    <>
      <Profile userData={userData} />
    </>
  );
}
