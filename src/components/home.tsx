import { Fragment } from "react/jsx-runtime";
import NoUserFound from "./no-user-found";
import UserCard from "./user-card";
import users from "../constant/user.json";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useSearchContext } from "./search-context";
import { useEffect, useState } from "react";

export default function Home() {
  const { searchTerm, setSearchTerm } = useSearchContext();

  const [filterdUsers, setFilterdUsers] = useState(users);

  function searchUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("search") as string;
    setSearchTerm(searchQuery.trim());
  }

  useEffect(() => {
    setFilterdUsers(
      users.filter((user) => Object.values(user).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      ))
    );
  }, [searchTerm]);

  return (
    <>
      {!searchTerm ? (
        <div className="max-w-[600px] mx-auto w-full pt-16 md:pt-28">
          <img
            className="mb-12"
            src="girman-logo-white.svg"
            width={600}
            height={120}
            alt="Girman Logo"
          />
            <form className="relative" action="" onSubmit={searchUser}>
            <Search
              size={16}
              className=" text-gray-600 absolute top-3 left-2"
            />
              <Input
                name="search"
                placeholder="Search"
                className="border-gray-300 bg-white rounded-lg pl-8"
              />
            </form>
        </div>
      ) : filterdUsers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full w-full sm:px-6 lg:px-14 pt-5 md:pt-20">
          {filterdUsers?.map((user, index) => {
            return (
              <Fragment key={index}>
                <UserCard key={index} user={user} />
              </Fragment>
            );
          })}
        </div>
      ) : (
        <NoUserFound />
      )}
    </>
  );
}
