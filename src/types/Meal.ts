// src/api/meals.js
export interface Meal {
  name: string;
  description: string;
  price: number;
  category: 'breakfast' | 'lunch' | 'dinner';
  image?: string;
}
