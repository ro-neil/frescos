export const MealTime = {
  BREAKFAST: 'breakfast',
  LUNCH: 'lunch',
  DINNER: 'dinner',
} as const;

export type MealTimeKey = keyof typeof MealTime;
export type MealTimeValue = (typeof MealTime)[MealTimeKey];

/**
 * Vue composable that returns the MealTime constants.
 */
export function useMealTime() {
  return MealTime
}