import type { Config } from "tailwindcss";

export const config: Omit<Config, "content"> = {
	theme: {
		extend: {
			fontFamily: {
				sans: "SF Pro Rounded",
			},
		},
	},
};
