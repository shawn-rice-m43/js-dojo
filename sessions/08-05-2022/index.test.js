import { contains } from "./";

const haystack1 = {
  a: "foo",
};

const haystack2 = {
  a: 0,
};

const haystack3 = {
  a: {
    a: true,
    b: false,
  },
};

const haystack4 = {
  a: {
    b: {
      c: {
        d: {
          e: {
            f: {
              a: 1,
              b: false,
            },
          },
        },
      },
    },
  },
  b: true,
};

const haystack5 = {
  a: {
    a: {
      a: {
        a: {
          a: [1, 2, 3, 4, 5],
        },
      },
    },
    b: {
      a: {
        a: {
          a: {
            a: true,
            b: {
              a: {
                a: false,
                b: 55,
                c: 1,
                d: [],
              },
            },
          },
        },
      },
    },
  },
};

describe(contains.name, () => {
  it("detects values in haystack1", () => {
    expect(contains({}, "foo")).toBe(false);
    expect(contains(haystack1, "foo")).toBe(true);
    expect(contains(haystack1, "bar")).toBe(false);
    expect(contains(haystack2, 0)).toBe(true);
    expect(contains(haystack3, true)).toBe(true);
    expect(contains(haystack3, false)).toBe(true);
    expect(contains(haystack4, false)).toBe(true);
    expect(contains(haystack4, true)).toBe(true);
    expect(contains(haystack5, 55)).toBe(true);
  });
});
