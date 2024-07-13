import Header from "../component/header";
import Footer from '../component/footer';

import {useState} from "react"
import { useNavigate } from "react-router-dom";

function Signup_() {

    const navigate = useNavigate();

    const [name,set_name] = useState("");
    const [email,set_email] = useState("");
    const [pass,set_pass] = useState("");


    function handel_signup(e){
        e.preventDefault();


        let user = {
            name : name,
            email: email,
            pass : pass
        };

        sessionStorage.setItem("use_data",JSON.stringify(user));

        alert("Signed successfully!!!");

        set_name("");
        set_email("");
        set_pass("");

        sessionStorage.setItem("signed",true);

        navigate("/");
    }

    return (
        <>
            {/* <Header></Header> */}
            <main>
                <form onSubmit={handel_signup} >
                    <label htmlFor="">Name :
                        <br />
                        < input type="text"
                            id="name"
                            value={name}
                            onChange={(e)=>{set_name(e.target.value)}}
                            required
                        />
                    </label>

                    <label htmlFor="">Email :
                        <br />
                        < input type="email"
                            id="email"
                            value={email}
                            onChange={(e)=>{set_email(e.target.value)}}
                            required

                        />
                    </label>

                    <label htmlFor="">Password :
                        <br />
                        < input type="password"
                            id="pass"
                            value={pass}
                            onChange={(e)=>{set_pass(e.target.value)}}
                            required

                        />
                    </label>

                    <button type="submit">Sign up</button>
                </form>
            </main>
            {/* <Footer></Footer> */}
        </>
    )
}

export default Signup_;