import { useNavigate } from 'react-router-dom';
const FoodCard = ({ item }) => {
 const navigate = useNavigate();
 return (
<div className='card'>
<div className='h-48 border border-gray-200 rounded-lg overflow-hidden relative'>
<img
         src={item.strMealThumb}
         alt={item.strMeal}
         className='object-cover h-48 rounded-lg cursor-pointer w-96 transform duration-300 scale-95 hover:scale-100 hover:shadow-lg'
         onClick={() => navigate(`${item.idMeal}`)}
       />
<div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30'></div>
</div>
<a
       href={item.strYoutube}
       className='btn-link pl-2 mt-2 font-semibold text-blue-900 duration-200 hover:text-blue-500 hover:underline'
>
       {item.strMeal}
</a>
<h5 className='pl-2 font-medium text-gray-800'>Ingredients:</h5>
<ul className='pl-3 italic text-gray-700 font-sm list-disc'>
<li>{item.strIngredient1}</li>
<li>{item.strIngredient2}</li>
<li>{item.strIngredient3}</li>
<li>{item.strIngredient4}</li>
<li>{item.strIngredient5}</li>
</ul>
</div>
 );
};
export default FoodCard;