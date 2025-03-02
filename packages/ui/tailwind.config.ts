import type { Config } from "tailwindcss";
import { config } from "@configs/tailwind";

export default {
	content: ["./src/**/*.tsx"],
	presets: [config],
} as Pick<Config, "prefix" | "presets" | "content">;
