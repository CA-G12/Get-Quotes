const truncate = require("../javascript/logic");
// ?Create a group of test for the trucate function
describe("Testing the truncate function", () => {
  test("test truncate function", function () {
    const testArr = [1, 2, 3, 4, 5];
    const actual = truncate(testArr, 3);
    const expected = [1, 2, 3];
    expect(actual).toStrictEqual(expected);
  });

  test("test truncate function", function () {
    const testArr = [
      2, 80, 50, 90, 10, 2, 10, 50, 1000, 10, 20, 900, 50, 90, 800,
    ];
    const actual = truncate(testArr, 10);
    const expected = [2, 80, 50, 90, 10, 2, 10, 50, 1000, 10];
    expect(actual).toStrictEqual(expected);
  });
});
