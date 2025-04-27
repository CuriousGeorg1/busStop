/**
 *Handling favorites:
 * This function updates the favorites list
 * and return the updated list to controller.
 * Favorites are stored in memory
 * @param {Array} favorites - Array of favorite bus stops
 * @returns {Array} - Array of updated favorite bus stops
 */
let favorites = [];
export async function updateFavorites({ favorites: newFavorites }) {
  // Check if the favorites array is empty
  if (!Array.isArray(newFavorites) || newFavorites.length === 0) {
    return { message: "No favorites to update" };
  }
  // Update the favorites array
  favorites = newFavorites;
  return { message: "Favorites updated", favorites };
}

export async function getFavorites() {
  return favorites;
}
