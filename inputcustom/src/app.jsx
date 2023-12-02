import React, { createContext, useContext } from "react";
import Input from "./input.jsx";
import ThemeContext from "./context.jsx";
import Show from "./show.jsx"

function App2(props){
    let theme = {
        backgroundColor: "black",
        color: "white"
    };
    return(
        <>
        <ThemeContext.Provider value = {theme}>
            <Section />
        </ThemeContext.Provider> 
        </>

    );
    }
    export default App2;

    function Section(){
        return(
            <section>
                <Form />
            </section>
        );
    }

    function Form(){
        return(
            <form onSubmit={Show}>
                <Input type="text" id="username" name="username"/><br />
                <Input type="text" id="email" name="email"/><br />
                <Input type="text" id="tel" name="tel"/><br />
                <Input type="submit"/>
            </form>
        );
    }


