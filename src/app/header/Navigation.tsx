import Link from "next/link";

interface NavProps {
  className?: string;
}

export default function Navigation({className}: NavProps) {
  return (
    <nav className={`flex justify-center items-center gap-16 rounded-full px-16 py-2 ${className}`}>
      <Link href="#home">Home</Link>
      <Link href="#bio">Bio</Link>
      <Link href="#portfolio">Portfolio</Link>
      <Link href="#contact">Contact</Link>
    </nav>
  );
}
