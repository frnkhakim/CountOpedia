import { useState } from "react";
import attackImage from './images/attack.png';
import defendImage from './images/defend.png';

function Counter() {
    const [count, setCount] = useState(0);
    const [gameStatus, setGameStatus] = useState("In Progress");

    function handleIncrement() {
       const newValue = prevCount + 1;
       setCount(newValue);
       if(newValue >= 5) {
        setGameStatus("You Win!");
       }else{ if(newValue <= -5){
        setGameStatus("You Lose!");
       }
       setCount(function(prevCount) {
        return newValue;
       });
    }
    function handleDecrement() {
       setCount(function(prevCount) {
        const newValue = prevCount - 1;
        if (newValue >= 5) {
            setGameStatus("You Win!");
        } else if (newValue <= -5) {
            setGameStatus("You Lose!");
        }
        return newValue;
       });
    }

    function handleRandomPlay() {
        const randomNumber = Math.floor(Math.random() * 2);
        if (randomNumber === 0) {
            handleIncrement();
        } else {
            handleDecrement();
        }
    }

    function handleReset() {
        setCount(0);
    }

    function handleLog() {
        console.log("Current count:", count);
    }

    return (  
        <div className="container">
            <div className="row text-white text-center container">
                <h1 className="h1 m-3">Game Score : {count}</h1>
                <p>You win at +5 points and lose at -5 points!</p>
                <h3 >Game Status: {gameStatus}</h3>

                <div className = "col-6 col-md-3 offset-md-3">
                    <img src={attackImage} style={
                        {
                            width: "100%",
                            cursor: "pointer",
                            border: "1px solid green"
                        }} 
                        onClick={handleIncrement}
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
                        onClick={handleDecrement}
                        className="p-4 rounded mb-3">
                        
                    </img>

                </div>

                <div className="col-12 col-md-4 offset-md-3">
                         <button className="btn btn-success w-100" onClick={handleRandomPlay}>Random Play</button>
                        <br />
                        <button  className="btn btn-danger w-100" onClick={handleReset}>Reset</button>
                       <br />
                        <button  className="btn btn-warning w-100" onClick={handleLog}>Log</button>
                </div>


                
               
            </div>
        </div>
        

    );
}

export default Counter;