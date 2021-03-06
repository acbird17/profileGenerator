const Intern = require("../lib/intern");

test("can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Test", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test('getTitle() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Test", 1, "test@test.com", "UCLA");
  expect(e.getTitle()).toBe(testValue);
});

test("can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Test", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
