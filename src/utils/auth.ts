import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { UserRole } from "@/constants";

async function getUserInfo() {
  const cookieStore = cookies();


  const token = (await cookieStore).get("accessToken")?.value;
  if (!token) return null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/me`, {
      headers: {
        Cookie: `accessToken=${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error("getUserInfo error:", err);
    return null;
  }
}

export async function requireRole(allowedRoles: UserRole[]) {
  const user = await getUserInfo();

  if (!user || !allowedRoles.includes(user.data.role)) {
    redirect("/not-authorized");
  }

  return user;
}
