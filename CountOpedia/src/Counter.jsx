function Counter() {
    let count = 0;
    return (  
        <div className="row text-white container">
            <button className="btn btn-success">+1</button>
            <span className="h1 m-3">{count}</span>
            <button className="btn btn-danger">-1</button>
        </div>

    );
}

export default Counter;