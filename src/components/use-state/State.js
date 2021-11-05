import { useState } from "react"

const State = () => {
    const [test, setTest] = useState(0);
    function Increment() {
        setTest(test + 1);

    }
    function Decriment() {
        setTest(test - 1);
    }
    return (
        <div>
            <button onClick={Increment}>Inc</button>
            <p>{test}</p>
            <button onClick={Decriment}>dec </button>
        </div>
    )
}

export default State