import { useEffect, useState } from "react"
import DisplayEffect from "./DisplayEffect";

const Sub = () => {
    const [incomeSources, setIncomeSources] = useState([]);
    useEffect(() => {
        fetch('https://finalspaceapi.com/api/v0/character/?limit=12')
            .then((res) => res.json())
            .then((response) => {
                console.log('this is success', response);
                setIncomeSources(response);

            }).catch((error) => {
                console.log('this is error', error);
            })
    }, []);

    return (
        <div>
            {
                incomeSources && incomeSources.length > 0 && incomeSources.map((item) => {
                    return <DisplayEffect {...item} />
                })
            }
        </div>
    )
}

export default Sub