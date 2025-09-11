"use client";

import { Button } from "@/components/ui/button";
import { authApi, useLogoutMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";

export default function ClientNavActions({ hasToken }: { hasToken: boolean }) {
  const { data } = useUserInfoQuery(undefined, {
    skip: !hasToken, 
  });

  console.log(data, "from client nav");
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
    window.location.href = "/login"; // force reload after logout
  };

  return (
    <div className="flex items-center gap-2">
      {data?.data?.email ? (
        <Button onClick={handleLogout} variant="outline" className="text-sm">
          Logout
        </Button>
      ) : (
        <Button asChild className="text-sm">
          <Link href="/login">Login</Link>
        </Button>
      )}
    </div>
  );
}
