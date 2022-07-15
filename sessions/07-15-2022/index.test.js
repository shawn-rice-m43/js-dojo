import { hasUniqueCharacters } from "./";

describe("hasUniqueCharacters", () => {
  test("do something", () => {
    expect(hasUniqueCharacters("")).toBe(true);
    expect(hasUniqueCharacters("0")).toBe(true);
    expect(hasUniqueCharacters("01")).toBe(true);
    expect(hasUniqueCharacters("0 1")).toBe(true);
    expect(hasUniqueCharacters("01234567")).toBe(true);
    expect(hasUniqueCharacters("😀 😃")).toBe(true);

    expect(hasUniqueCharacters("    ")).toBe(false);
    expect(hasUniqueCharacters("00")).toBe(false);
    expect(hasUniqueCharacters("000")).toBe(false);
    expect(hasUniqueCharacters("010")).toBe(false);
    expect(hasUniqueCharacters("012345670")).toBe(false);
    expect(hasUniqueCharacters("0 1 ")).toBe(false);
    expect(hasUniqueCharacters("😀😀")).toBe(true);
  });
});
