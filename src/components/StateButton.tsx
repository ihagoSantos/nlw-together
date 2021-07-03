import { useState } from "react";

export function StateButton(){
    // let counter = 0;
    const [counter, setCounter] = useState(0); //Estado

    function increment(){
        // counter++;
        setCounter(counter + 1);
        console.log(counter);

    }

    // Todos os atributos tem formato camel case
    return (
        <button onClick={increment}>{counter}</button>
    )
}
