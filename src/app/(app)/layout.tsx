/* eslint-disable @typescript-eslint/no-explicit-any */

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"

interface ILayoutProps {
  children: React.ReactNode;
}

export default  function layout({ children }: ILayoutProps) {
  
  return (
    <div>
      <Navbar/>
      <div className="">{children}</div>
      <Footer/>
    </div>
  );
}
