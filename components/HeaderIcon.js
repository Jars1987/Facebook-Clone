function HeaderIcon({ Icon, active }) {
  return (
    <div className='cursor-pointer md:px-10 md:hover:bg-gray-400 sm:h-14 flex items-center rounded-xl active:border-b-2 active:border-blue-500 group'>
      <Icon
        className={`h-5 sm:h-7 mx-auto text-center text-gray-500 group-hover:text-blue-500 ${
          active && 'text-blue-500'
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
