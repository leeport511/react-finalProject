import { useState } from "react";

export const useCounter = (initialValue) => {

    const [counter, setCounter] = useState(initialValue);
    const [buttonState, setButtonState] = useState({
        plusClick: false,
        minusClick: false,
    });

    const incrementCounter = (stock) => {

        if(stock > counter) {
            setCounter(counter + 1 );
            setButtonState({...buttonState, plusClick: true});
            setTimeout(() => {
                setButtonState({...buttonState, plusClick: false})
            },100);
        }
    }

    const decrementCounter = () => {

        if(counter > 1) {
            setCounter(counter - 1 )
            setButtonState({...buttonState, minusClick: true});
            setTimeout(() => {
                setButtonState({...buttonState, minusClick: false})
            },100);

        }
    }

    const resetCounter = () => {

        setCounter(initialValue)
    }


  return {
    counter,
    buttonState,
    incrementCounter,
    decrementCounter,
    resetCounter
  }
    
}
