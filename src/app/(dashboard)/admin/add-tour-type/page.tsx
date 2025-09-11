/* eslint-disable @typescript-eslint/no-unused-vars */
import AddTourTypeForm from '@/components/modules/dashboard/admin/AddTourTypeForm';
import { UserRole } from '@/constants';
import { requireRole } from '@/utils/auth';
import React from 'react'

export default async function AddTourTypePage() {
  const user = await requireRole([UserRole.ADMIN, UserRole.SUPER_ADMIN]);
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <h1 className="font-bold text-4xl my-10">Add Tour Type</h1>
      <AddTourTypeForm/>
    </div>
  );
}
