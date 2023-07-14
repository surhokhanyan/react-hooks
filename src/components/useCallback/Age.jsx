import React from 'react';

const Age = ({name}) => {
    console.log(`This is ${name}`)
    return (
        <div>
           The age is {name}
        </div>
    );
};

export default React.memo(Age);