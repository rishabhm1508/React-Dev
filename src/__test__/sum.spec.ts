import { sum } from "../../sum";

test("expect sum func to give sum of 2 numbers", () => {
  const result = sum(4, 5);

  expect(result).toBe(9);
});
