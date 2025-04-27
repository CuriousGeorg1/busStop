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
  // Update the favorites array
  favorites = newFavorites;
  return { message: "Favorites updated", favorites };
}

export async function getFavorites() {
  return favorites;
}
