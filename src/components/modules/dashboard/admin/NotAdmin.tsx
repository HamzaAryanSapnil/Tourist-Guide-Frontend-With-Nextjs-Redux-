"use client"
import { useUserInfoQuery } from '@/redux/features/auth/auth.api';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function NotAdmin() {
     const { data } = useUserInfoQuery(undefined);
      const router = useRouter();
      if (
        (data?.data?.role !== "admin" && data?.data?.role !== "super-admin") ||
        !data?.data ||
        !data
      ) {
        router.push("/not-authorized");
      }
  return (
    <div>
      
    </div>
  )
}
