import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    dark: true,
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}
