import ArrayDisplay from "./ArrayDisplay";

const ArrayProps = () => {
    const people = [
        {
            name: "Viaks",
            gender: "Male",
            message: "hi",
        },
        {
            name: "Guna",
            gender: "Male",
            message: "hlo",
        },
        {
            name: "Raju",
            gender: "Male",
            message: "How are you?",
        },
        {
            name: "Divya",
            gender: "Male",
            message: "I am Fine.What about you?",
        },
        {
            name: "Sravanthi",
            gender: "Male",
            message: "I am Good.",
        }
    ];
    return (
        <div>
            {
                people.map((ele) => {
                    return <ArrayDisplay {...ele} />
                })
            }
        </div>
    )
}

export default ArrayProps