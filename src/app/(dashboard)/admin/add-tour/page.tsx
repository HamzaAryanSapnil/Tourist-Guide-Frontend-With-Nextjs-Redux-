import AddTourForm from "@/components/modules/dashboard/admin/AddTourForm";


export default function AddTourPage() {
  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen" >
      <h1 className="font-bold text-4xl my-10" >Add Tour</h1>
      <AddTourForm/>
    </div>
  )
}
