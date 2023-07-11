import React from "react";
import './colorize-text.css'

const TextStyle = ({children, color}) => {
return (
    <div className="text-style" style={{color: color}}>
        {children}
    </div>
)
}

TextStyle.defaultProps = {
    color: 'blue'
}

export default TextStyle