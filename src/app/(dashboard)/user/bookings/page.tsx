import UserBookingsTable from "@/components/modules/dashboard/user/UserManagebookings";


export default function UserBookingsPage() {
  return (
    <div className='flex flex-col justify-start items-center w-full min-h-screen gap-y-10' >
      <h1 className='font-bold text-4xl my-10' >Manage Your Bookings</h1>
      <UserBookingsTable/>
    </div>
  )
}
