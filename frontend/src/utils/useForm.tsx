import React from "react";
import { createContext, useState, useContext } from 'react'; 
import { DetailsType } from "../../../shared/interfaces/Interfaces";

const FormContext = createContext<value>({} as value);

export function useForm() {
    return useContext(FormContext);
}

//provider that enables every child wrapped within it to have access to the form details when making a new order
export function FormProvider({ children } : formProps) {
    const [errors, setErrors] = useState<object>({});
    const [state, setState] = useState<DetailsType>({} as DetailsType);

    //verifies if users put in the correct values for each field
    function handleChange (e: any) {
        
        let regex = undefined;

        //only verify certain fields
        switch(e.target.name) {
            case "postal":
                regex = new RegExp("[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z|A-Z]{2}");
                break;
            case "time":
                regex = new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$");
                break;  
            case "phone":
                regex = new RegExp("[0-9]{10}");
                break;

        }

        if(regex) {
            //reset error and don't do verification if the field is empty
            if(e.target.value === '') {
                //transform the prevState to an array and filter out the error we want to get rid of and transform it back to an object
                return setErrors(prevState => (Object.fromEntries((Object.entries(prevState).filter(x => x[0] !== e.target.name + "Error")))))
            }

            if(e.target.value.match(regex)) {
                setErrors(prevState => (Object.fromEntries((Object.entries(prevState).filter(x => x[0] !== e.target.name + "Error")))))
                return setState(state => ({ ...state , [e.target.name]: e.target.value}));
            } else {
                return setErrors(prevState => ({...prevState, [e.target.name + "Error"]: "* " + e.target.name}))
            }
        }

        return setState(state => ({ ...state , [e.target.name]: e.target.value}));

    }         

    //values that can be accessed by the consumers of this provider
    const values: value = {
        errors: errors,
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
    errors: object;
    state: DetailsType,
    handleChange: (e: any) => void,
}

