import { assertEquals } from "https://deno.land/std@0.170.0/testing/asserts.ts";

export const dateStringFormatter = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
  .split("/")
  .join("-");
};

Deno.test("happy path 1", () => {
  const dateString = "Sun Jan 01 2023 02:46:39 GMT+0900 (Japan Standard Time)";
  const expected = "2023-01-01";
  const actual = dateStringFormatter(dateString);
  assertEquals(actual, expected);
});
