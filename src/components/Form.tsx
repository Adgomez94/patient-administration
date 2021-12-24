import {Dispatch, FormEvent, SetStateAction, useEffect} from "react";
//components
import Error from "./Error";
// hook
import { useForm } from '../hooks/useForm'
import { useToggle } from "../hooks/useToggle";
// interfaces
import { Appointment } from "../interfaces/appointment";
//utils
import {generateId} from "../utils/utils";

interface Props {
  setPatients: Dispatch<SetStateAction<Appointment[]>>
  patient:Appointment | undefined,
  setPatient: Dispatch<SetStateAction<Appointment | undefined>>
}

const Form = ( { setPatients, patient, setPatient }:Props ) => {
  const { formValue, handleInputChanged, resetForm, changeTextFields } = useForm()
  const [ error, setError ] = useToggle()

  useEffect(()=>{
    if(patient) changeTextFields(patient)
  },[patient])

  const { name,description,email,owner,register }:Appointment = formValue

  const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if( [name,description,email,owner,register].includes('') ) return setError(true)
    setError(false)
    setPatients( appointment=>modifyPatientList(appointment))
    setPatient(undefined)
    resetForm()
  }

  const modifyPatientList = (listAppointments:Appointment[]):(Appointment)[] =>{
    if( patient )
      return listAppointments.map((appointment =>{
      if(appointment.id === patient.id) return {...appointment, ...formValue}
      else return appointment
    }))
    else return [...listAppointments, {...formValue, id:generateId()}]
  }


  return (
      <div className="md:w-1/2 lg:w/5">
        <h2 className="font-black text-3xl text-center">Seguimientos Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-5">
          Añade Pacientes y {''}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form onSubmit={ handleSubmit } className="bg-white shadow-md rounded-lg py-10 px-5">
          {
            error && <Error title="Todos los compos obligatorios" />
          }
          <div className="mb-5">
            <label htmlFor="name" className="block font-bold uppercase">Nombre Mascota</label>
            <input
              name="name"
              id="name"
              onChange={handleInputChanged}
              value={name}
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="text"
              placeholder="Nombre mascota"/>
          </div>
          <div className="mb-5">
            <label htmlFor="owner" className="block font-bold uppercase">Nombre Propietario</label>
            <input
              name="owner"
              onChange={handleInputChanged}
              id="owner"
              value={owner}
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="text"
              placeholder="Nombre del propietario"/>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block font-bold uppercase">Email de Contacto</label>
            <input
              name="email"
              id="email"
              value={email}
              onChange={handleInputChanged}
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="email"
              placeholder="Email contacto"/>
          </div>
          <div className="mb-5">
            <label htmlFor="register" className="block font-bold uppercase">Fecha de Alta</label>
            <input
              name="register"
              value={register}
              onChange={handleInputChanged}
              id="register"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="date"
              />
          </div>
          <div className="mb-5">
            <label htmlFor="description" className="block font-bold uppercase">Descripcion de los sintomas</label>
            <textarea value={description} onChange={handleInputChanged} name="description" id="description" cols={70} rows={6} placeholder="Descripcion de los sintomas"/>
          </div>
          <input className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" type="submit" value={patient ? "Editar Paciente" : "Agregar Paciente"} />
        </form>
      </div>
  );
};



export default Form;
