import { assertEquals } from "https://deno.land/std@0.170.0/testing/asserts.ts";

export const removeDuplications = (str: string) => {
  const arr = [...str];
  return (Array.from(new Set(arr))).join("");
};

Deno.test("happy path 1", () => {
  assertEquals(removeDuplications("lemonadern's blog"), "lemonadr's bg");
});
