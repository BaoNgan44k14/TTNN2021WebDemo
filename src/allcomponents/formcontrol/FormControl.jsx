import React from 'react'
import './formcontrol.css'
// 
import InputForm from './control/InputForm'
import RadioButtons from './control/RadioButton'
import SelectForm from './control/SelectForm'
import Textarea from './control/Textarea'


function FormControl(props) {
    const { control, ...rest } = props
    switch(control) {
        case 'input': 
            return <InputForm {...rest} />
        case 'textarea': 
            return <Textarea {...rest} />
        case 'select':
            return <SelectForm {...rest} />
        case 'radio':
            return <RadioButtons {...rest} />
        case 'checkbox':
        case 'date':
        default: return null
    }
}

export default FormControl