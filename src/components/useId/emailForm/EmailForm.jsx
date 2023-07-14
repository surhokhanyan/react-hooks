import React, {useId} from 'react';

const EmailForm = () => {

    const id = useId();

    return (
        <div>
            <label htmlFor={id}>Email</label>
            <input type={"email"} id={`${id}-email`}/>
            <input type="text" id={`${id}-text`}/>
            <input type="tel" id={`${id}-tel`}/>
        </div>
    );
};

export default EmailForm;