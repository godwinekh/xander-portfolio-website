import Link from "next/link";

export default function Links() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 bg-white text-black rounded-3xl mx-8 md:mx-0 px-16 py-10 md:py-6 uppercase font-semibold">
      <p>ui/ux design</p>
      <p>web design</p>
      <p>content design</p>
      <p>branding</p>
      <p>video content</p>
    </div>
  );
}
