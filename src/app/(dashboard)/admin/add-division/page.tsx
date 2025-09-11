/* eslint-disable @typescript-eslint/no-unused-vars */
import AddTourDivisionForm from "@/components/modules/dashboard/admin/AddTourDivision";
import { UserRole } from "@/constants";
import { requireRole } from "@/utils/auth";


export default async function AddDivision() {
  const user = await requireRole([UserRole.ADMIN, UserRole.SUPER_ADMIN]);
  
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen ">
     
      <h1 className="font-bold text-4xl my-10">Add Tour Division</h1>

      <AddTourDivisionForm />
    </div>
  );
}
