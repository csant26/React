import { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/home.css";

export default function Home(){
    const [count, setCount] = useState(0);

    const handleIncrement = () =>{
        setCount(prevCount => prevCount + 1);
    }
    const handleDecrement = () =>{
        setCount(prevCount => prevCount - 1);
    }
    return(
        <>
        <Navbar title={"Home Page"}/>
        <p id="center-text">{count}</p>
        <div id="button" onClick={handleIncrement}>+</div>
        </>
    );
}
// export const Home = () =>{
//     return(
//         <>
//         <Navbar title={"Home Page"}/>
//         </>
//     );
// }