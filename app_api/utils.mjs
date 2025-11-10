// utils.mjs
// Utility: sort array by multiple keys and order
export function sortBy(arr, keys, order = "asc") {
  const multiplier = order === "desc" ? -1 : 1;
  console.log("Sorting by keys:", keys, "Order:", order);
  return [...arr].sort((a, b) => {
    for (let key of keys) {
      const valA = a[key];
      const valB = b[key];
      if (valA < valB) return -1 * multiplier;
      if (valA > valB) return 1 * multiplier;
      // continue if equal
    }
    return 0;
  });
}
