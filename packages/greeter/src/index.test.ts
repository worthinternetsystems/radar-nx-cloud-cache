import { englishGreeter, excitedGreeter, racistFrenchGreeter } from "./index";
describe("greeter", () => {
  test("greets in English", () => {
    expect(englishGreeter("Davey McDaveson")).toBe("Hello Davey McDaveson");
  });
  test("greets in excited way", () => {
    expect(excitedGreeter("Davey McDaveson")).toBe(
      "Wow Davey McDaveson! Nice to meet you :) !!"
    );
  });
  test("greets in really bad French", () => {
    expect(racistFrenchGreeter("Claud")).toBe(
      "Bonjour Claud! Je suis Français mon amis"
    );
  });
});
