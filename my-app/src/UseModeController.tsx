import useLocalStorage from "use-local-storage";

export default function useModeController(
){
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return {
        theme, 
        setTheme, 
        switchTheme,
    };
}
