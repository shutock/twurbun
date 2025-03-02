import type { Metadata, Viewport } from "next";

import { Providers } from "@/lib/providers";

import "./globals.css";

export const metadata: Metadata = {};

export const viewport: Viewport = {};

const Root: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
};

export default Root;
