import React from 'react';

const validation = (props) => {
    let message = "Input text is perfectly fine :)";
    if(props.inputLength < 3){
        message = "Input text is too short :(";
    }else if(props.inputLength > 20){
        message = "Input text is too long :(";
    }
    const style = {
        color: "rgb(88, 189, 223)"
    }

    return(
        <div className="Validation">
            <p style={style}>{message}</p>
        </div>
    );
}

export default validation;