import { highAndLow } from ".";

describe(highAndLow.name, () => {
  it("Generic high and low", () => {
    const answer = highAndLow("1 2 3 4 5");
    expect(answer).toBe("5 1");
  });

  it("Handle Duplicates", () => {
    const answer = highAndLow("1 2 1 5 5");
    expect(answer).toBe("5 1");
  });

  it("Only single string", () => {
    const answer = highAndLow("2");
    expect(answer).toBe("2 2");
  });

  it("handles larger numbers", () => {
    const answer = highAndLow("999 0 1 10000 2");

    expect(answer).toBe("10000 0");
  });

  it("handles negative numbers", () => {
    const answer = highAndLow("999 0 1 10000 -2");

    expect(answer).toBe("10000 -2");
  });
});
