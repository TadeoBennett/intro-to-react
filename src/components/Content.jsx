import React from 'react'

const Content = (props) => {

    return (
        <>
            <ul>
                {props.information.map((part, index) => (
                    <p key={index}>
                        {`Part ${index+1}: ${part.name} ${part.exercises} exercises`}
                    </p>
                ))}
            </ul>
        </>
    )
}

export default Content