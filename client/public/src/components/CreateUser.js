import React, {useRef} from 'react'

function CreateUser({updateUserList}) {
    const input_reference = useRef()

    const buttonClickHandler = () => {
        updateUserList(input_reference.current.value)
    }

    return (
        <div>
            <input type="text" ref={input_reference}></input>
            <button onClick={buttonClickHandler}>submit</button>
        </div>
    )
}

export default CreateUser
