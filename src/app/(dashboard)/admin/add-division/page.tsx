import AddTourDivisionForm from "@/components/modules/dashboard/admin/AddTourDivision";


export default function AddDivision() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen ">
          <h1 className="font-bold text-4xl my-10">Add Tour Division</h1>
         <AddTourDivisionForm/>
        </div>
  )
}
