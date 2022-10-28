const maxJoy = require(".");

describe(maxJoy.name, function () {
  it("returns undefined when passed object that the knapsack cannot carry", () => {
    const result = maxJoy([1, 99], [10, 15], 5);

    expect(result).toBe(undefined);
  });
  it("returns `25` when that is the hightest possible value", () => {
    const result = maxJoy([1, 25], [10, 5], 10);

    expect(result).toBe(25);
  });
});
