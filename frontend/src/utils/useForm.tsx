import React from "react";
import { createContext, useState, useContext } from 'react'; 
import { DetailsType } from "../../../shared/interfaces/Interfaces";

const FormContext = createContext<value>({} as value);

export function useForm() {
    return useContext(FormContext);
}

//provider that enables every child wrapped within it to have access to the form details when making a new order
export function FormProvider({ children } : formProps) {
    const [timeError, setTimeError] = useState<string>("");
    const [postalError, setPostalError] = useState<string>("");
    const [phoneError, setPhoneError] = useState<string>("");
    const [state, setState] = useState<DetailsType>({} as DetailsType);

    //verifies if users put in the correct values for each field
    function handleChange (e: any) {
        //reset error and done do verification if the field is empty
        switch(e.target.name) {
            case "postal":
                
                if(e.target.value === '') {
                    setPostalError('')
                    return
                }
                
                const postalRegex = new RegExp("[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z|A-Z]{2}");

                if(e.target.value.match(postalRegex)) {
                    return setState(state => ({ ...state , [e.target.name]: e.target.value}));
                } else {
                    setPostalError("Postal code has the wrong format, please try again")
                }
                break;
            case "time":
                if(e.target.value === '') {
                    setTimeError('')
                    return
                }

                const timeRegex = new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$");
                if(e.target.value.match(timeRegex)) {
                    return setState(state => ({ ...state , [e.target.name]: e.target.value}));
                } else {
                    setTimeError("Delivery time has the wrong format, please try again")
                }
                break;
            default:
                return setState(state => ({ ...state , [e.target.name]: e.target.value}));  
        }
    }         

    //values that can be accessed by the consumers of this provider
    const values: value = {
        timeError: timeError,
        postalError: postalError,
        phoneError: phoneError,
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
    timeError: string,
    postalError: string,
    phoneError: string,
    state: DetailsType,
    handleChange: (e: any) => void,
}

