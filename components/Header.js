import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  ChevronDoubleDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
import { useSession, signOut } from 'next-auth/react';

function Header() {
  const { data: session } = useSession();
  return (
    <div className='sitcky top-0 z-50 bg-white flex intems-center p-2 lg:px-5 shadow-md'>
      <div className='ml-2 flex itenms-center justify-between'>
        <Image
          src='https://links.papareact.com/5me'
          alt='Facebook logo'
          width={40}
          height={40}
          layout='fixed'
        />
        <div className='flex ml-2 bg-gray-100 p-2 rounded-full items-center'>
          <SearchIcon className='h-6 text-gray-600' />
          <input
            className=' hidden md:inline-flex ml-2 outline-none bg-transparent placeholder-gray-500 flex-shrink'
            type='text'
            placeholder='Search Facebook...'
          />
        </div>
      </div>
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className='flex items-center sm:space-x-2 justify-end'>
        <Image
          onClick={signOut}
          src={session.user.image}
          width={40}
          height={40}
          layout='fixed'
          className='rounded-full cursor-pointer'
        />
        <p className='font-semibold pr-3 whitespace-nowrap'>
          {session.user.name}
        </p>
        <ViewGridIcon className='icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDoubleDownIcon className='icon' />
      </div>
    </div>
  );
}

export default Header;
