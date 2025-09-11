import Link from "next/link";

export default function NotAuthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Unauthorized</h1>
      <p className="mb-6 text-gray-600">
        You do not have permission to access this page.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}
