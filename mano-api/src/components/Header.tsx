import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4 py-4 container">
      <Link className="font-bold" href="/">MANO</Link>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
