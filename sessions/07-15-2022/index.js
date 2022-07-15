/**
 * Returns true or false depending whether or not a passed string has
 * entirely unique characters
 * hasUniqueCharacter('Oswaldo'): false
 * hasUniqueCharaters('Bay'): true
 * The function does not care about the case of the characters
 * @param {string} string
 */
export const hasUniqueCharacters = (string) => {
  // do something
  if (string.length <= 1) {
    return true;
  }

  const map = {};

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    console.log(character.codePointAt(0));
    console.log("map", map);

    if (map[character.codePointAt(0)]) {
      console.log(
        "map[character.codePointAt(0)]",
        map[character.codePointAt(0)]
      );

      return false;
    } else {
      map[character.codePointAt(0)] = character.codePointAt(0);
    }
  }

  return true;

  // console.log(`${😀.toLocaleString()}`);

  // console.log(map);
};
