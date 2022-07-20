import { useEffect, useState } from "react";

const SimpleFunctionComp = () => {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('');

    // component did mount
    useEffect(() => {
        console.log("component did mount");
    }, [])//we will give empty array



    //component did update
    useEffect(() => {
        // if (number == 5) {
        //     alert("u reached 5");
        // }
        if (number == 0) return;
        console.log("component did update");
    }, [number]);


    useEffect(() => {
        if (name == '') return;
        console.log("name changed");
    }, [name])

    return (
        <div>
            <h1 style={{ color: "blue" }}>Functional Component Project</h1>
            {number}<br></br>
            <button onClick={() => setNumber(number + 1)}>updateNumber</button>
            <button onClick={() => setName("weblaaa")}>Updatename</button>
        </div>
    )
}

export default SimpleFunctionComp;