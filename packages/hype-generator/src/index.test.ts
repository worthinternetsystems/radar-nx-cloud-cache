import { generateHype } from "./index";
import * as  englishGreeterMock from 'greeter';

describe("generateHype", () => {
  test("Says that everything is awesome", () => {
    expect(generateHype(3)).toBe("This is awesome!!!");
  });

  test("Should optionally prefix with a greeting", () => {
    jest.spyOn(englishGreeterMock, 'englishGreeter').mockReturnValue('Hello Joe Soap')
    expect(generateHype(3, {addressee: 'Joe Soap'})).toBe("Hello Joe Soap\nThis is awesome!!!");
  });
});
