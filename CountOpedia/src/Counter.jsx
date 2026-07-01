import { useState } from "react";
import attackImage from './images/attack.png';
import defendImage from './images/defend.png';

function Counter() {

    function getGameStatus(count) {
        if (count >= 5) {
            return "You Win!";
        }

        if (count <= -5) {
            return "You Lose!";
        }

        return "In Progress";
    }

    const [gameState, setGameState] = useState({
        count: 0,
        gameStatus: "In Progress"
    });

    function handleIncrement() {
        setGameState((prevState) => ({
            count: prevState.count + 1,
            gameStatus: getGameStatus(prevState.count + 1)
        }));
    }

    function handleDecrement() {
        setGameState((prevState) => ({
            count: prevState.count - 1,
            gameStatus: getGameStatus(prevState.count - 1)
        }));
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
        setGameState({
            count: 0,
            gameStatus: getGameStatus(0)
        });
    }

    function handleLog() {
        console.log("Current count:", gameState.count);
    }

    return (  
        <div className="container">
            <div className="row text-white text-center container">
                <h1 className="h1 m-3">Game Score : {gameState.count}</h1>
                <p>You win at +5 points and lose at -5 points!</p>
                {gameState.gameStatus.length > 0 && <h3 >Game Status: {gameState.gameStatus}</h3>}

                <div className="col-12 col-md-8 mx-auto">
                    <div className="row g-3">
                        <div className="col-6">
                            <img
                                src={attackImage}
                                style={{
                                    width: "100%",
                                    cursor: "pointer",
                                    border: "1px solid green"
                                }}
                                onClick={handleIncrement}
                                className="mb-3"
                            />
                        </div>

                        <div className="col-6">
                            <img
                                src={defendImage}
                                style={{
                                    width: "100%",
                                    cursor: "pointer",
                                    border: "1px solid red"
                                }}
                                onClick={handleDecrement}
                                className="p-4 rounded mb-3"
                            />
                        </div>
                    </div>

                    <div className="d-grid gap-2 mt-2">
                        <button className="btn btn-success" onClick={handleRandomPlay}>Random Play</button>
                        <button className="btn btn-danger" onClick={handleReset}>Reset</button>
                        <button className="btn btn-warning" onClick={handleLog}>Log</button>
                    </div>
                </div>


                
               
            </div>
        </div>
        

    );
}

export default Counter;