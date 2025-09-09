import Logo from "@/components/logo";
import { ModeToggle } from "@/components/theme-toggler";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <div className="w-full">
      <div className=" w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex justify-center md:justify-start items-center md:items-start py-5">
        <nav className=" container mx-auto w-full  ">
          <Link href="/">
            <Logo />
          </Link>
        </nav>
      </div>
      {children}
    </div>
  );
}
