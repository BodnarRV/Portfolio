import React from "react";
import './SkillForm.scss'

function SkillForm({title, skills}) {
    return (
        <div className="formContainer">
            <h3 className="formContainer__title">{title}</h3>
            <p className="formContainer__text">{skills}</p>
        </div>
    )
}

export default SkillForm