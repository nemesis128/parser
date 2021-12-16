const parser = require("./script");

test("Testing: Smooth", () => {
  expect(parser("Smooth")).toBe("S3h");
});

test("Testing: Abeeline", () => {
  expect(parser("Abeeline")).toBe("A5e");
});

test("Testing: And Before the Universe", () => {
  expect(parser("And Before the Universe")).toBe("A1d B4e t1e U6e");
});