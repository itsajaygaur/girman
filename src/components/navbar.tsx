import { navItems } from "@/constant/nav-items";
import MobileSidebar from "./mobile-nav";
import { useSearchContext } from "./search-context";
import { Input } from "./ui/input";

export default function Navbar() {
  const { searchTerm, setSearchTerm } = useSearchContext();

  function searchUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("search") as string;
    setSearchTerm(searchQuery.trim());
  }

  return (
    <nav className="shadow-lg  w-full bg-white">
      <div className="flex items-center justify-between gap-4 p-4 max-w-[1080px] mx-auto">
        <a href="/">
          <img
            src="/girman-logo.png"
            width={180}
            height={62}
            alt="Girman Logo"
          />
        </a>
        <MobileSidebar />
        <div className="hidden md:block">
          {searchTerm ? (
            <form onSubmit={searchUser} className="h-full">
              <Input
                defaultValue={searchTerm}
                name="search"
                placeholder="Search"
                size={52}
                className="border-gray-300 bg-white rounded-lg"
              />
            </form>
          ) : (
            <ul className="flex items-center gap-7 h-full">
              {navItems?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="hover:text-blue-500 hover:underline hover:font-semibold"
                  >
                    <a
                      href={item.href}
                      target={item.newTab ? "_blank" : "_self"}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
