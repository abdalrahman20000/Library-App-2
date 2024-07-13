

import { Link } from "react-router-dom"

function Header_() {


    

    const signed = sessionStorage.getItem("signed");
    console.log(signed);
    return (
        <header>
            <div className="logo">
                {/* <img src="./library_-removebg-preview.png" alt="" /> */}
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/catalog">Catalog</Link>
                        <Link to="/aboutus">About us</Link>
                        <Link to="/contact">Contact</Link>
                        {/* <Link to="/test">Test</Link> */}
                    </li>
                </ul>
            </nav>

            <div className="icons">
                {sessionStorage.getItem("signed") ? (<Link to="/signUp" onClick={sessionStorage.setItem("signed", false)}>Log out</Link>) : (<Link to="/signUp">Sign up</Link>)}
            </div>
        </header>
    )
}




export default Header_;