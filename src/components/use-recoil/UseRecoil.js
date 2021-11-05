import { atom } from 'recoil';
import { useRecoilState } from 'recoil';

const Add = () => {
    const counterAtom = atom({
        key: "counter",
        default: 0
    })
    const [test, setTest] = useRecoilState(counterAtom);
    function Increment() {
        setTest(test + 1);

    }
    function Decriment() {
        setTest(test - 1);
    }
    return (
        <div>
            <button onClick={Increment}>Increment</button>
            <p>{test}</p>
            <button onClick={Decriment}>Decriment </button>
        </div>
    )
}

export default Add