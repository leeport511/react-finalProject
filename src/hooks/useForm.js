import { useState } from "react";


export const useForm = ( initialForm = {} ) => {
  
    const [formState, setFormState] = useState( initialForm );


    const onInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    const onResetForm = (e) => {
        e.preventDefault()
        setFormState(initialForm);
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

    }

}
