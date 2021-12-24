import React, {ChangeEvent, useState} from 'react';

import {Appointment} from "../interfaces/appointment";

const initialState: Appointment = {
  name:'',
  owner:'',
  email:'',
  register:'',
  description:''
}

type InputChanged = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export const useForm = () => {
  const [ formValue, setFormValue ] = useState(initialState)

  const handleInputChanged = ( { target:{name,value} }: InputChanged) =>{
    setFormValue({
      ...formValue,
      [name]:value
    })
  }

  const resetForm = () =>{
    setFormValue(initialState)
  }

  const changeTextFields = (inputsValue:Appointment) =>{
    setFormValue(inputsValue)
  }

  return { formValue, handleInputChanged, resetForm, changeTextFields }
}

