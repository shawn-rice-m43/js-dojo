import { PseudoArray } from ".";

describe(PseudoArray.name, () => {
  it("gets the last item on pop", () => {
    const array = new PseudoArray(1, "horray", null);
    const lastItem = array.pop();
    expect(lastItem).toBe(null);
  });

  it("length should return the length of the array", () => {
    const array = new PseudoArray(1, "horray", null);
    expect(array.length).toBe(3);
  });

  it("has a push method that adds an element to the end of the array", () => {
    const array = new PseudoArray(1);
    expect(array.push(2)).toBe(2);
    expect(array.length).toBe(2);
    expect(array.array[1]).toBe(2);
  });

  it("has a forEach method that executes a provided function once for each array element", () => {
    const array = new PseudoArray(1, 2, 3, 4);
    const result = [];
    array.forEach((num) => {
      result.push(num * 10);
    });

    expect(result).toEqual([10, 20, 30, 40]);
  });
});
