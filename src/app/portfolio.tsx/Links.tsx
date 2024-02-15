import Link from "next/link";

export default function Links() {
  return (
    <div className="flex justify-center items-center gap-16 bg-white text-black rounded-3xl px-16 py-6 uppercase font-semibold">
      <Link href="#">ui/ux design</Link>
      <Link href="#">web design</Link>
      <Link href="#">content design</Link>
      <Link href="#">branding</Link>
      <Link href="#">video content</Link>
    </div>
  );
}
