import React, { useEffect, useState } from "react";
import axios from "axios";
function App2(props){
    const [login,setLogin] = useState(false);
    const [profile, setProfile] = useState(false);

    return(
        <>
        {!login ?(
            <Register setLogin = {setLogin}/>
        ):(
            <Login setProfile= {setLogin}/>
        )}
        </>
    );
}
export default App2;

function Register({ setLogin}){
    const register = () =>{
        let username = document.getElementById("username").value;
        console.log(username)
        let password = document.getElementById("password").value;
        let response = axios.post("http://localhost:3200/api/register", {
            username,
            password
        });
        response.then((res) =>{
            alert(res.data);
            if(res.status == 20){
                setLogin(true);
            }
        })
        .catch(error =>{
            alert(error.responsive.data);
            console.log(error);
        });
    };
    return(
        <>
        <form>
            <h2>Register here:</h2>
            <input type="text" name="username" id="username" placeholder="username"/>
            <input type="password" name="password" id="password" placeholder="password" />
            <input type="submit" value="register" onClick={register}/>
        </form>
        </>
    );
}

function Login({ setLogin }){
    return (
        <>
        <h2>Login</h2>
        <input type="text" name="username" placeholder="username"/>
        <input type="password" name="paswword" id="password" placeholder="password"/>
        <input type="submit" value="login"/>
        </>
    )
}