import React from 'react';

const validation = (props) => {
    let output = null;
    if(props.length < 3){
        output = "Input text is too short :(";
    }else if(props.length > 20){
        output = "Input text is too long :(";
    }else{
        output = "Input text is perfectly fine :)";
    }
    return(
        <div className="Validation">

            <p>{output}</p>

        </div>
    );
}

export default validation;