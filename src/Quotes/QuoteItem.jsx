import React, { useState } from 'react';
const QuoteItem = (props) => {
   const [likes, setLikes] = useState(0);
   return (
<div className={`w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ${props.customClass}`}>
<h5 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
               {props.quote}
</h5>
<p className='mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400'>
               {props.author}
</p>
           {props.date && (
<p className='mb-3 text-sm text-gray-600 dark:text-gray-300'>
                   {props.date}
</p>
           )}
<button onClick={() => setLikes(likes + 1)} className='text-blue-500'>
               Like ({likes})
</button>
<button
               onClick={() => {
                   navigator.share({
                       title: 'Quote',
                       text: `${props.quote} - ${props.author}`,
                   });
               }}
               className='ml-3 text-green-500'
>
               Share
</button>
</div>
   );
};
export default QuoteItem;