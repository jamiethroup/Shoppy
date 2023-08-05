import { useState } from 'react';

interface RecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipe: {
    strInstructions: string;
    strYoutube: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strIngredient16: string;
    strIngredient17: string;
    strIngredient18: string;
    strIngredient19: string;
    strIngredient20: string;
  };
}

export default function RecipeModal({ isOpen, onClose, recipe }: RecipeModalProps) {
  if (!isOpen) {
    return null;
  }

  const ingredients = [
    recipe.strIngredient1,
    recipe.strIngredient2,
    recipe.strIngredient3,
    recipe.strIngredient4,
    recipe.strIngredient5,
    recipe.strIngredient6,
    recipe.strIngredient7,
    recipe.strIngredient8,
    recipe.strIngredient9,
    recipe.strIngredient10,
    recipe.strIngredient11,
    recipe.strIngredient12,
    recipe.strIngredient13,
    recipe.strIngredient14,
    recipe.strIngredient15,
    recipe.strIngredient16,
    recipe.strIngredient17,
    recipe.strIngredient18,
    recipe.strIngredient19,
    recipe.strIngredient20,
  ].filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white rounded-lg p-5 z-10 max-h-[90vh] overflow-scroll">
        <h2 className="text-xs font-bold mb-2">{recipe.strInstructions}</h2>
        <ul className="list-disc list-inside mb-4">
          
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <a href={recipe.strYoutube}>Watch on YouTube</a>
        <button className="absolute top-0 right-0" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}