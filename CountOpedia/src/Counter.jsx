import { useState } from "react";
import attackImage from './images/attack.png';
import defendImage from './images/defend.png';

function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
       setCount(function(prevCount) {
        return prevCount + 1;
       });
    }
    function handleDecrement() {
       setCount(function(prevCount) {
        return prevCount - 1;
       });
    }

    return (  
        <div className="container">
            <div className="row text-white text-center container">
                <h1 className="h1 m-3">Game Score : {count}</h1>
                <p>You win at +5 points and lose at -5 points!</p>

                <div className = "col-6 col-md-3 offset-md-3">
                    <img src={attackImage} style={
                        {
                            width: "100%",
                            cursor: "pointer",
                            border: "1px solid green"
                        }} 
                        className="mb-3"
                    />
                </div>

                <div className = "col-6 col-md-3 offset-md-3">
                    <img src={defendImage} 
                    style={{
                            width: "100%",
                            cursor: "pointer",
                            border: "1px solid red"
                        }} 
                        className="p-4 rounded mb-3">

                    </img>

                </div>


                
                <button onClick={handleIncrement} 
                className="btn btn-success">+1</button>
                <span className="h1 m-3">{count}</span>
                <button onClick={handleDecrement} className="btn btn-danger">-1</button>
            </div>
        </div>
        

    );
}

export default Counter;