import Logo from "@/components/logo";
import { ModeToggle } from "@/components/theme-toggler";

interface Props {
  children: React.ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex justify-center md:justify-start items-center md:items-start py-5">
        <Logo />
      </nav>
      {children}
    </div>
  );
}
