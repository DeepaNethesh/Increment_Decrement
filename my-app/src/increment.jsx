import React, {useState} from 'react' ;



const Increment = () => {
    const [num, setNum] = useState(0)
    const incNum = () => {
    setNum(num+1)
    }
    const decNum = () => {
        setNum(num-1)
    }

    return(
        
        <div className = 'inc'>
            <div className = 'text'>
                <h1> {num} </h1>
            </div>
            <div className = 'button'>
                <button onClick={incNum}>Add</button>
                <button onClick={decNum}>Subtract</button>
            </div>
        </div>
        

    )
}

export default Increment;