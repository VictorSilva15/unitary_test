const { sum, inOneHour } = require("./my-code");

//To do a unit testing is necessary to use the sintaxe bellow

/*
it("sums 2 numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
*/

//To describe a unit testing, you can use the method describe(), as showed bellow:

/*
describe("Math functions", () => {
  it("sums 2 numbers", () => {
    expect(sum(1, 4)).toBe(5);
  });
});
*/

//inside of the describe method, you can put others methods before the unit testing:

/*
beforeAll() -> it runs anything before the test

beforeEach() -> it runs anything before each test inside of describe

Example:
*/

describe("Math functions", () => {
  beforeAll(() => {
    console.log("Anything happend before the all test");
  });

  beforeEach(() => {
    console.log("Test will run");
  });

  //Test 1
  it("Sums 2 numbers", () => {
    expect(sum(5, 4)).toBe(9);
  });

  //Test 2
  it("Sums 2 numbers", () => {
    expect(sum(24, 4)).toBe(28);
  });

  afterAll(() => {
    console.log("tests finished");
  });
});

// Just as there's  beforeAll and beforeEach methods, exist afterAll and afterEach too

//Sometimes We need freeze variables so that the test run correctly, and doesn't get any errors. If your function has some variables that change the value all the time. set it to avoid unexpected values. Ex:

describe("Math functions", () => {
  it("returns the timestamp for one hour ahead", () => {
    const realDateNow = Date.now.bind(global.Date);
    global.Date.now = () => 0; // settings the global method to zero
    expect(inOneHour()).toBe(3600000); // running the InOneHour method with Date equal zero
    global.Date.now = realDateNow; // settings the real value to global method
    console.log(Date.now()); // console the real Date
  });
});
