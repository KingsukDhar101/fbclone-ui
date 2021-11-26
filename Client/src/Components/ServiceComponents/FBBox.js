import React from 'react'

const FBBox = ({heading, children, className}) => {
    return (
        <div className={"FBBox" + (className ? " "+className : "")}>
            {heading && <h3>{heading}</h3>}
            {children}
        </div>
    )
}

export default FBBox
