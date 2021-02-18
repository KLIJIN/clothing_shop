import React from "react"
import "./forminput.scss"



const FormInput = ({ handleChange, label, ...state }) => {
    return (
        <div className="group" >
            <input className="form-input" onChange={handleChange}  {...state} />

            {label && <label className={`${state.value.length ? "shrink" : ""} form-input-label`}  >
                {label}
            </label>
            }

        </div>)
}

export default FormInput;