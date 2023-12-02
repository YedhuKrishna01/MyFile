import ThemeContext from "./context";
import { useContext } from "react";

function Input({ type }){
    const theme2 = useContext(ThemeContext);
    var result = <input type={type} style={theme2} />
    return result;
}

export default Input;
export {result};
