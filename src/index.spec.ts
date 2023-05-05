import { add } from ".";

describe("test", () => {
  it("add", () => {
    const res = add(1, 2);
    expect(res).toBe(3);
  });
});
