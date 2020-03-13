import { useState } from 'react';

const useAddMuseum = (formSubmitCb) => {
    const [inputs, setInputs] = useState({
        name: '',
        city: '',
        country: '',
        image: ''
    });

    const handleInputChange = e => {
        e.persist();
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        formSubmitCb();
    }

    return {
        handleSubmit,
        handleInputChange,
        inputs
    }


}

export {
    useAddMuseum
}