import React from 'react'

const Content = (props) => {

    return (
        <>
            <ul>
                {props.information.map((part, index) => (
                    <p key={part}>
                        {`Part ${part[0]}: ${part[1]} ${part[2]} exercises`}
                    </p>
                ))}
            </ul>
        </>
    )
}

export default Content