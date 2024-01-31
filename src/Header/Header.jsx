import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import Links from './Links';
import Button from './Button';
const Header = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const data = [
    { label: 'Home', path: '/' },
    { label: 'Quote', path: '/quote' },
    { label: 'Restaurants', path: '/restaurant' },
    { label: 'Food', path: '/food' },
    { label: 'Contact', path: '/contact' },
  ];
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
<header className='sticky top-0 z-40 flex items-center justify-between px-3 py-4 text-white lg:px-16 bg-zinc-900 h-[10vh]'>
<div className='dropdown md:hidden'>
<summary className='btn btn-ghost' onClick={toggleDropdown}>
<FaBars className='text-2xl cursor-pointer' />
</summary>
        {isDropdownOpen && (
<ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-black'>
            {data.map((item) => (
<li key={item.path}>
<Link to={item.path} onClick={toggleDropdown}>
                  {item.label}
</Link>
</li>
            ))}
</ul>
        )}
</div>
<Link to='/'>
<div className='flex items-center gap-4'>
<img
            src='https://flowbite.com/docs/images/logo.svg'
            alt='icon'
          />
<h2 className='text-lg font-bold md:text-2xl'>Geekfoods</h2>
</div>
</Link>
<Links activeTab={location.pathname} data={data} />
<Button />
</header>
  );
};
export default Header;