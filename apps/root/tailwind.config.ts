import type { Config } from "tailwindcss";
import { config } from "@configs/tailwind";

export default {
	content: ["./src/app/**/*.tsx"],
	presets: [config],
} as Pick<Config, "content" | "presets">;
