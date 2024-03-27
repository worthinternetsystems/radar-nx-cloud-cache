import { englishGreeter } from "greeter";

export const generateHype = (
  levelOfHype: number,
  options: {
    addressee?: string;
  }
) => {
  const hype = `This is TERRIBLE >:( ${"!".repeat(Math.abs(levelOfHype))}`;

  if (options?.addressee) {
    return [englishGreeter(options.addressee), hype].join("\n");
  }

  return hype;
};
