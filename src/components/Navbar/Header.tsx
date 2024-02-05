export {};

import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }: any) => {
  return (
    <div className="bg-background dark:bg-darkBackground shadow-md">
      <div className="py-4 lg:px-48 md:px-16 px-20 flex justify-between items-center w-full">
        <h1 className="text-xl md:text-2xl font-semibold dark:text-textLight text-textDark">{title}</h1>
        {linkHref && linkTitle ? (
          <Link href={linkHref} className="md:text-base text-xs hover:text-active hover:transition hover:duration-400 hover:ease-in-out dark:text-textLight text-textDark">
            {linkTitle}
          </Link>
        ) : null}
      </div>
    </div>
  );
};
export default Header;

export function NavbarComponent({ linkHref, linkTitle }: any) {
  return (
    <div className="items-center flex relative">
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="group text-sm md:text-base hover:text-active hover:transition hover:duration-400 hover:ease-in-out text-textDark dark:text-textLight dark:hover:text-darkActive">
          <span className="absolute bottom-0 h-0.5 bg-active dark:bg-darkActive transition duration-300 w-full transform origin-left scale-x-0 group-hover:scale-x-100"></span>
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}

export function ListComponent({ linkHref, linkTitle }: any) {
  return (
    <div className="items-center flex relative">
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="sm:text-md text-sm text-textDark dark:text-textLight hover:text-active">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}

export function HeaderMenu({ title }: any) {
  return (
    <div className="p-4 text-textDark dark:text-textLight">
      <div className="ml-2 text-xl md:text-2xl font-semibold">Lihat Semua</div>
    </div>
  );
}
