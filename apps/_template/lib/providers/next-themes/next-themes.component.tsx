"use client";

import { ThemeProvider } from "next-themes";

export const NextThemes: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider {...{ attribute: "data-theme", defaultTheme: "system" }}>
			{children}
		</ThemeProvider>
	);
};
