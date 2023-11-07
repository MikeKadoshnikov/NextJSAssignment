import {useState, useEffect} from "react"
import "./CountButton.css"

export default function CountButton(props) {
    let [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1*props.mult);
    }
    function rollOverCount(){
        if(count > 10) {
            setCount(0);
        }
    }
    const buttonStyle = {
        backgroundColor: props.bgcolor,
        color: "white",
        padding: ".7rem",
        borderRadius: "10px",
    }

    useEffect(rollOverCount, [count]);
    return (
        <div className="buttonstuff">
        <button style={buttonStyle} onClick={handleClick}>+{props.mult}</button>
        <div><p>{count}</p></div>
        </div>
    )
}