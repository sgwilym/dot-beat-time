import { fromDate } from "./index";

it("returns the correct beats for noon", () => {
  const date = new Date(2000, 11, 21, 12, 0);

  expect(fromDate(date)).toBe("@500");
});

it("returns the correct number of beats for noon in long format", () => {
  const date = new Date(2000, 11, 21, 12, 0, 43);

  expect(fromDate(date, true)).toBe("@500.50");
});

it("prepends zeroes to smaller beat numbers", () => {
  const midnight = new Date(2000, 11, 21, 0, 0);
  expect(fromDate(midnight)).toBe("@000");

  const earlyMorning = new Date(2000, 11, 21, 1, 0);
  expect(fromDate(earlyMorning)).toBe("@042");
});

it("handles midnight properly", () => {
  const midnight = new Date(2000, 11, 21, 0, 0);
  expect(fromDate(midnight)).toBe("@000");

  const nearlyMidnight = new Date(2000, 11, 21, 23, 59);
  expect(fromDate(nearlyMidnight)).toBe("@999");
});
