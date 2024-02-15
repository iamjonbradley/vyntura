/* eslint no-use-before-define: 0 */ // --> OFF
import { ModeToggle } from '@/components/global/mode-toggle';
import { UserButton } from '@clerk/nextjs';
import { User, currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  user?: null | User;
};

const Navigation = async ({ user }: Props) => {
  const isLoggedIn = await currentUser();
  return (
    <div className='fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-50 dark:bg-black/60 bg-white/60'>
      <aside className='flex items-center gap-2'>
        <Image
          src={'./assets/plura-logo.svg'}
          width={40}
          height={40}
          alt='plur logo'
        />
        <span className='text-xl font-bold'> Vyntura.</span>
      </aside>
      <nav className='hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
        <ul className='flex items-center justify-center gap-8'>
          <Link href={'#pricing'}>Pricing</Link>
          <Link href={'#about'}>About</Link>
          <Link href={'#docs'}>Documentation</Link>
          <Link href={'#features'}>Features</Link>
        </ul>
      </nav>
      <aside className='flex gap-2 items-center'>
        {!isLoggedIn ? (
          <Link
            href={'/agency'}
            className='bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80'
          >
            Login
          </Link>
        ) : (
          <Link
            href={'/agency'}
            className='bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80'
          >
            dashboard
          </Link>
        )}
        <UserButton afterSignOutUrl='/' />
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
