export function sortByPopularity(data) {
  return data.sort((a, b) => b.likes - a.likes);
}

export function sortByDate(data) {
  return data.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function sortByTitle(data) {
  return data.sort((a, b) => a.title.localeCompare(b.title));
}
