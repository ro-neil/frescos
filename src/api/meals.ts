import type { Meal } from "@/types/Meal";

const meals: Meal[] = [
    { name: 'Breakfast Burrito', description: 'A delicious breakfast burrito', price: 10, category: 'breakfast', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929' },
    { name: 'Pancakes', description: 'Fluffy pancakes with syrup', price: 8, category: 'breakfast', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929' },
    { name: 'Caesar Salad', description: 'Fresh romaine with Caesar dressing', price: 12, category: 'lunch', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187' },
    { name: 'Grilled Cheese Sandwich', description: 'Classic grilled cheese', price: 9, category: 'lunch', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187' },
    { name: 'Steak Dinner', description: 'Juicy steak with sides', price: 25, category: 'dinner', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
    { name: 'Spaghetti Bolognese', description: 'Pasta with rich meat sauce', price: 18, category: 'dinner', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
    
    { name: 'Breakfast Burrito', description: 'A delicious breakfast burrito', price: 10, category: 'breakfast', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929' },
    { name: 'Pancakes', description: 'Fluffy pancakes with syrup', price: 8, category: 'breakfast', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929' },
    { name: 'Caesar Salad', description: 'Fresh romaine with Caesar dressing', price: 12, category: 'lunch', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187' },
    { name: 'Grilled Cheese Sandwich', description: 'Classic grilled cheese', price: 9, category: 'lunch', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187' },
    { name: 'Steak Dinner', description: 'Juicy steak with sides', price: 25, category: 'dinner', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
    { name: 'Spaghetti Bolognese', description: 'Pasta with rich meat sauce', price: 18, category: 'dinner', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
    
    { name: 'Breakfast Burrito', description: 'A delicious breakfast burrito', price: 10, category: 'breakfast', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929' },
    { name: 'Pancakes', description: 'Fluffy pancakes with syrup', price: 8, category: 'breakfast', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929' },
    { name: 'Caesar Salad', description: 'Fresh romaine with Caesar dressing', price: 12, category: 'lunch', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187' },
    { name: 'Grilled Cheese Sandwich', description: 'Classic grilled cheese', price: 9, category: 'lunch', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187' },
    { name: 'Steak Dinner', description: 'Juicy steak with sides', price: 25, category: 'dinner', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
    { name: 'Spaghetti Bolognese', description: 'Pasta with rich meat sauce', price: 18, category: 'dinner', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
    
    { name: 'Breakfast Burrito', description: 'A delicious breakfast burrito', price: 10, category: 'breakfast', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929' },
    { name: 'Pancakes', description: 'Fluffy pancakes with syrup', price: 8, category: 'breakfast', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929' },
    { name: 'Caesar Salad', description: 'Fresh romaine with Caesar dressing', price: 12, category: 'lunch', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187' },
    { name: 'Grilled Cheese Sandwich', description: 'Classic grilled cheese', price: 9, category: 'lunch', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187' },
    { name: 'Steak Dinner', description: 'Juicy steak with sides', price: 25, category: 'dinner', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
    { name: 'Spaghetti Bolognese', description: 'Pasta with rich meat sauce', price: 18, category: 'dinner', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
]


export const mealsApi = {
  list: async (params = {}) => {
    // const qs = new URLSearchParams(params).toString()
    // const res = await fetch(`/api/meals${qs ? `?${qs}` : ''}`)
    // if (!res.ok) throw new Error('Failed to fetch meals')
    // return res.json()
    return new Promise((resolve) => {
        setTimeout(() => {
            const items: Meal[] = meals.map((meal, index) => ({
                id: index + 1,
                name: meal.name,
                description: meal.description,
                price: meal.price,
                category: meal.category,
                image: meal.image,
            }))
            resolve({ items, total: items.length })
        }, 500)
    })
  },
  get: async (id: number) => {
    const res = await fetch(`/api/meals/${id}`)
    if (!res.ok) throw new Error('Failed to fetch meal')
    return res.json()
  },
  update: async (id: number, body: any) => {
    const res = await fetch(`/api/meals/${id}`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error('Failed to update meal')
    return res.json()
  },
}