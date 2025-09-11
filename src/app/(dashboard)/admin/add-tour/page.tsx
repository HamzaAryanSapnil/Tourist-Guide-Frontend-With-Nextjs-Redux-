/* eslint-disable @typescript-eslint/no-unused-vars */
import AddTourForm from "@/components/modules/dashboard/admin/AddTourForm";
import { UserRole } from "@/constants";
import { requireRole } from "@/utils/auth";


export default async function AddTourPage() {
  const user = await requireRole([UserRole.ADMIN, UserRole.SUPER_ADMIN]);
  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen" >
      <h1 className="font-bold text-4xl my-10" >Add Tour</h1>
      <AddTourForm/>
    </div>
  )
}
