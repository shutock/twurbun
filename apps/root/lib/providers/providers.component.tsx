import { NextThemes } from "./next-themes";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <NextThemes>{children}</NextThemes>;
};
