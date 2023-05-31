import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href={'/'}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              alt="logo"
              src={'/gdsc.jpg'}
              fill={true}
              className="object-cover object-center"
            />
          </div>
          <span className="ml-3 text-xl">GDSC UM</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'} className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href={'/blog'} className="mr-5 hover:text-gray-900">
            Blog
          </Link>
          <Link href={'/quiz'} className="mr-5 hover:text-gray-900">
            Quiz
          </Link>
          <Link
            href={'/profile'}
            className="mr-5 hover:text-gray-900"
          >
            Profile
          </Link>
        </nav>
        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>
  );
};

export default Navbar;
