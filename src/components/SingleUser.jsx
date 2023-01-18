import React from 'react'


const SingleUser = (props) => {

    return (
        <div>
            <br />
            <hr />
            <p>
                <strong>Name:</strong> {props.user.name}
            </p>
            <p>
                <strong>Website:</strong> {props.user.website}
            </p>
            <p>
                <strong>Email:</strong> {props.user.email}
            </p>
            <p>
                <strong>Phone:</strong> {props.user.phone}
            </p>
        </div>
    )
}

export default SingleUser
