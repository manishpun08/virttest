import LongestConsecutives from "./components/LongestConsecutives";
import SearchFilter from "./components/SearchFilter";
import UserLists from "./components/UserLists";

export default function Home() {
  return (
    <div className="grid px-10 items-center  ">
      <SearchFilter />
      <UserLists />
      <LongestConsecutives nums={[100, 4, 200, 1, 3, 2, 5, 6, 300]} />
    </div>
  );
}
