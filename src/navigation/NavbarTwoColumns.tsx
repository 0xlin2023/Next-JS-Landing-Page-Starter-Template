import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between py-4">
    <div className="shrink-0">
      <Link href="/" className="block">
        {props.logo}
      </Link>
    </div>

    <nav className="hidden md:block">
      <ul className="flex items-center space-x-8">{props.children}</ul>
    </nav>

    {/* Mobile menu button - for future mobile navigation implementation */}
    <div className="md:hidden">
      <button className="p-2 text-gray-600 transition-colors duration-200 hover:text-apple-blue">
        <svg
          className="size-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>
);

export { NavbarTwoColumns };
