import type { Meal } from "@/types/Meal";

const meals: Meal[] = [
  {
    name: 'Breakfast Burrito',
    description: 'A hearty breakfast burrito filled with fluffy scrambled eggs, savory sausage, melted cheese, and crispy potatoes, all wrapped in a warm tortilla.',
    price: 10,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1574365361850-8e8aec561723'
  },
  {
    name: 'Pancakes',
    description: 'A stack of light, fluffy pancakes served warm with sweet syrup and butter for a classic comforting breakfast.',
    price: 8,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929'
  },
  {
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce tossed with creamy Caesar dressing, crunchy croutons, and a generous sprinkle of parmesan cheese.',
    price: 12,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a'
  },
  {
    name: 'Grilled Cheese Sandwich',
    description: 'Golden, buttery toasted bread filled with perfectly melted cheese for a simple, satisfying classic.',
    price: 9,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1591972619306-0a13c4ab5c1a'
  },
  {
    name: 'Steak Dinner',
    description: 'A juicy, tender steak cooked to perfection and served with savory sides for a filling and flavorful dinner.',
    price: 25,
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1608877907149-a206d75ba011'
  },
  {
    name: 'Spaghetti Bolognese',
    description: 'Classic spaghetti topped with a rich, slow-simmered meat sauce made with tomatoes, herbs, and aromatic seasonings.',
    price: 18,
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1623243020684-9f8bcefe6e94'
  },
  {
    name: 'Caprese Sandwich',
    description: 'Fresh mozzarella, ripe tomatoes, and basil layered on toasted bread with a drizzle of balsamic glaze.',
    price: 12,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af'
  },
  {
    name: 'Avocado Toast',
    description: 'Toasted artisan bread topped with creamy smashed avocado, cherry tomatoes, and a light sprinkle of seasoning.',
    price: 11,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543'
  },
  {
    name: 'French Toast',
    description: 'Thick slices of bread soaked in a cinnamon-vanilla egg batter and cooked until golden brown, served with syrup.',
    price: 9,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1664192578370-0cd2b291c4cd'
  },
  {
    name: 'Omelette',
    description: 'A fluffy three-egg omelette filled with melted cheese, fresh vegetables, and your choice of savory add-ins.',
    price: 10,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1677137261161-0095c10418ef'
  },
  {
    name: 'Breakfast Sandwich',
    description: 'A warm breakfast sandwich with fluffy eggs, melted cheese, and savory bacon served on a toasted English muffin.',
    price: 9,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1700937314577-898450cafe35'
  },
  {
    name: 'Chicken Wrap',
    description: 'A grilled chicken wrap packed with fresh greens, tomatoes, and a creamy dressing inside a soft tortilla.',
    price: 13,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1666819615040-eff5e52c778a'
  },
  {
    name: 'Turkey Club Sandwich',
    description: 'A layered club sandwich with sliced turkey, crispy bacon, lettuce, tomato, and mayonnaise on toasted bread.',
    price: 14,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1676300184084-de35d56a9a70'
  },
  {
    name: 'Burger and Fries',
    description: 'A juicy beef burger served with crisp lettuce, tomato, and a side of golden fries.',
    price: 16,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
  },
  {
    name: 'Chicken Alfredo',
    description: 'Fettuccine pasta tossed in a creamy Alfredo sauce and topped with tender grilled chicken.',
    price: 19,
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1583749807693-2ee8e006fc56'
  },
  {
    name: 'Salmon Plate',
    description: 'Pan-seared salmon served with seasoned vegetables and a flavorful side for a balanced dinner.',
    price: 23,
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288'
  },
  {
    name: 'BBQ Ribs',
    description: 'Slow-cooked ribs glazed in smoky barbecue sauce and served with hearty classic sides.',
    price: 26,
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947'
  },
  {
    name: 'Veggie Stir Fry',
    description: 'A colorful mix of fresh vegetables tossed in a savory sauce and served over rice or noodles.',
    price: 17,
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19'
  }
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