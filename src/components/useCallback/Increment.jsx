import React from 'react';

const Increment = ({name, increment}) => {
    console.log(`Increment ${name}`)
    return (
        <button onClick={() => increment()}>
            Increment {name}
        </button>
    );
};

export default React.memo(Increment);