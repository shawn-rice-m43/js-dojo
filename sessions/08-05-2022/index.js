/**
 *
 * @param {Object} haystack
 * @param {String, Number, Boolean} needle
 */
export const contains = (haystack, needle) => {
  if (Object.keys(haystack).length === 0) {
    return false;
  }
  let needleInHaystack = false;

  for (let key in haystack) {
    if (Array.isArray(haystack[key])) {
      continue;
    }

    if (typeof haystack[key] === "object") {
      const found = contains(haystack[key], needle);
      if (found) {
        return true;
      }
    } else if (haystack[key] === needle) {
      // console.log("key", key, haystack[key], haystack[key] === needle);
      // needleInHaystack = true;
      return true;
    }
  }

  return needleInHaystack;
};
