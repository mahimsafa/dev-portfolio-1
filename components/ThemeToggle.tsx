import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const Toggle = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        console.log(theme);
        setTheme(theme === "light" ? "dark" : "light");
        console.log(theme);
    };
    return (
        <div
            onClick={changeTheme}
            className="cursor-pointer"
        >
            {
                theme === "light" ?
                    <FaMoon className="w-8 h-8" />
                    :
                    <FaSun className="w-8 h-8" />

            }
        </div>
    );
}

export default Toggle;