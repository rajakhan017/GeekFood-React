import React from 'react';
import { Link } from 'react-router-dom';
const Links = ({ activeTab, data }) => {
 return (
<ul className='hidden gap-8 font-medium md:flex'>
     {data.map((item) => (
<li
         className={`duration-200 cursor-pointer ${
           activeTab === item.path ? 'text-blue-500 hover:text-blue-600' : 'hover:text-blue-600'
         }`}
         key={item.path}
>
<Link to={item.path}>{item.label}</Link>
</li>
     ))}
</ul>
 );
};
export default Links;