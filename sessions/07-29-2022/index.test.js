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
    expect(true).toBe(false);
  });
});
