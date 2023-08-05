/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import RecipeModal from './RecipeModal';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strYoutube: string;
}

export default function RecipeSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Meal[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Meal | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    setResults(data.meals || []);
  };


  const handleRecipeClick = (recipe: Meal) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className='container mx-auto px-5'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchInput" className="sr-only">Search for a recipe</label>
        <input id="searchInput" className='w-full rounded-lg p-2' type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search for a recipe" aria-label="Search for a recipe" />
        <button type="submit">Search</button>
      </form>
      {query && (
        <h2 className="text-xs font-bold mb-2">Search results for &quot;{query}&quot; ({query.length})</h2>
      )}
      <ul className="grid grid-cols-2 gap-4">
        {results && results.map((result) => (
          <li className="rounded-lg bg-white" key={result.idMeal}>
            <img className="h-28 rounded-tr-lg rounded-tl-lg w-full object-cover" src={result.strMealThumb} alt={result.strMeal} />
            <div className="p-2">
            <h2 className="text-sm">{result.strMeal}</h2>
            <button onClick={() => handleRecipeClick(result)}>More Details</button>
            </div>
          </li>
        ))}
      </ul>
      <RecipeModal isOpen={selectedRecipe !== null} onClose={handleCloseModal} recipe={{
        strInstructions: '',
        strYoutube: '',
        strIngredient1: '',
        strIngredient2: '',
        strIngredient3: '',
        strIngredient4: '',
        strIngredient5: '',
        strIngredient6: '',
        strIngredient7: '',
        strIngredient8: '',
        strIngredient9: '',
        strIngredient10: '',
        strIngredient11: '',
        strIngredient12: '',
        strIngredient13: '',
        strIngredient14: '',
        strIngredient15: '',
        strIngredient16: '',
        strIngredient17: '',
        strIngredient18: '',
        strIngredient19: '',
        strIngredient20: ''
      }}  />
    </div>
  );
}