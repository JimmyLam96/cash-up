import { useState } from 'react'; 

const useForm = () => {
    const [state, setState] = useState({});

    function handleChange (e: any) {
        // console.log(e)
        setState(state => ({ ...state , [e.target.name]: e.target.value}));
    }

    return [state, handleChange];
}

export default useForm;