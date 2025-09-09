import AddTourTypeForm from '@/components/modules/dashboard/admin/AddTourTypeForm';
import React from 'react'

export default function AddTourTypePage() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <h1 className="font-bold text-4xl my-10">Add Tour Type</h1>
      <AddTourTypeForm/>
    </div>
  );
}
