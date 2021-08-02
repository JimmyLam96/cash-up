import * as React from "react";
import { createContext, useState, useEffect, useContext } from 'react'; 
import { DetailsType } from "../../../shared/interfaces/Interfaces";

const FormContext = createContext<value>({} as value);

export function useForm() {
    return useContext(FormContext);
}

//Provider that enables every child wrapped within it to have access to the form details when making a new order
export function FormProvider({ children } : formProps) {
    const [error, setError] = useState<string>("");
    const [state, setState] = useState<DetailsType>({} as DetailsType);

    //verifies if users put in the correct values for each field
    function handleChange (e: any) {
        switch(e.target.name) {
            case "postal":
                let postalRegex = new RegExp("[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z|A-Z]{2}");
                if(e.target.value.match(postalRegex)) {
                    return setState(state => ({ ...state , [e.target.name]: e.target.value}));
                } else {
                    setError(e.target.value)
                }
                break;
            default:
                return setState(state => ({ ...state , [e.target.name]: e.target.value}));  
        }
    }         

    //values that can be accessed by the consumers of this provider
    const values: value = {
        error: error,
        state: state,
        handleChange: handleChange,
    }

    return (
        <FormContext.Provider value={values}>
            {children}
        </FormContext.Provider>
        )
}

interface formProps {
    children?: any;
    value?: DetailsType
}

interface value {
    error: string,
    state: DetailsType,
    handleChange: (e: any) => void,
}

