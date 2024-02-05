import Link from "next/link";
import Image from "next/legacy/image";
import logo from "../img/logo.png";
import SearchInput from "./SearchInput";
import DarkMode from "./DarkMode";
import ButtonList from "./ButtonList";
import { NavbarComponent } from "./Header";

const Navbar = () => {
  return (
    <nav className="py-3 px-2 sm:px-4 max-w-full bg-background shadow-lg dark:bg-darkBackground">
      <div className="md:mx-2 mx-2 flex justify-between">
        <div className="items-center gap-3 flex">
          <ButtonList></ButtonList>
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Logo Soleh Wahyu Pratama" width={60} height={27} />
            <h1 className="mx-2 font-bold hidden md:block text-textDark dark:text-textLight ">Anime List</h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-3 ">
          <NavbarComponent linkHref="/animeDatas" linkTitle="Anime"></NavbarComponent>
          <NavbarComponent linkHref="/mangaDatas" linkTitle="Manga"></NavbarComponent>
        </div>
        <div className="flex">
          <DarkMode></DarkMode>
          <SearchInput></SearchInput>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
