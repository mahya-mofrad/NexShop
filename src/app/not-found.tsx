import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="font-semibold text-amber-500">
        {" "}
        Return Home
      </Link>
    </div>
  );
}
