/* eslint-disable @typescript-eslint/no-explicit-any */

import Navbar from "@/components/Navbar"

export default  function layout({ children }: any) {
  
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
