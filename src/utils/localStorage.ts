export const getLongestStreak = () => {
  const longestStreak = localStorage.getItem('longestStreak')
  if (longestStreak === null) {
    return 0
  }
  return parseInt(longestStreak)
}