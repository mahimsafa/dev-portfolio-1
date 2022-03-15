import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const Toggle = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        console.log(theme);
        setTheme(theme === "light" ? "dark" : "light");
        console.log(theme);
    };
    return (
        <motion.div
            whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            onClick={changeTheme}
            className="cursor-pointer"
        >
            {
                theme === "light" ?
                    <FaMoon className="w-8 h-8" />
                    :
                    <FaSun className="w-8 h-8" />

            }
        </motion.div>
    );
}

export default Toggle;