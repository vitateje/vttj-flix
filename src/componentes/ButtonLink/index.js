import React from 'react';

// componente é uma função:
// todo componente CamelCase


function ButtonLink(props) {
    // props => { }

    return (
        // className (children)
        <a href={props.href} className={props.className}> 
            {props.children}
        </a>
    );
}

export default ButtonLink; //