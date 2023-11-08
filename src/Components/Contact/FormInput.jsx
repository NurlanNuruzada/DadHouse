import React from 'react'
import './FormInput.scss'

const FormInput = (props) => {
    return (
        <>
            <div class="input-container">
                <input placeholder={props.value} class="input-field" type="text" />
                    <label for="input-field" class="input-label">{props.value}</label>
                    <span class="input-highlight"></span>
            </div>

        </>
    )
}

export default FormInput