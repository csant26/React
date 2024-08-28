import { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/home.css";

export default function Home(){
    const [count, setCount] = useState(0)
    const [animate, setAnimate] = useState(false)

    const handleIncrement = () =>{
        startAnimation();
        setCount(prevCount => prevCount + 1);
    }
    const handleDecrement = () =>{
        setCount(prevCount => prevCount - 1);
    }
    const startAnimation = () =>{
        setAnimate(true);
    }
    const stopAnimation = () =>{
        setAnimate(false);
    }

    return(
        <>
        <Navbar title={"Home Page"}/>
        <p id="center-text"className={animate ? "text-change":""} onAnimationEnd={stopAnimation}>{count}</p>
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