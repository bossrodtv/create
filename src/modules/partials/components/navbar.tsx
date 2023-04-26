import Link from 'next/link';
import React from 'react';
import { ROUTES } from 'shared/constants/commons';
import { useUserStore } from 'shared/store';

export const Navbar: React.FC = () => {
  const logout = useUserStore(state => state.logout);
  const user = useUserStore(state => state.user);

  return (
    <div className="flex w-full justify-center">
      <div className="container flex items-center">
        <ul className="flex gap-2">
          <Link href={ROUTES.HOME} className="hover:underline">
            Home
          </Link>
          <Link href={ROUTES.ABOUT} className="hover:underline">
            About
          </Link>
        </ul>
        <div className="ml-auto flex gap-2">
          <Link href={ROUTES.HOME}>{user && user.email}</Link>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};
