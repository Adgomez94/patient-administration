import {Appointment} from "../interfaces/appointment";
import {Dispatch, SetStateAction} from "react";

interface Props {
  patient:Appointment,
  setPatient: Dispatch<SetStateAction<Appointment | undefined>>
  setPatients: Dispatch<SetStateAction<Appointment[]>>
}

const CardPatient = ( { patient,setPatient, setPatients }:Props ) => {

  const { id,name,email,register,description,owner } = patient

  const deleteAppointment = () =>{
    setPatients(appointments => appointments.filter(appointment=> appointment.id !== id) )
  }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Mascota: {""}
        <span className="font-normal normal-case">{ name }</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Propietario: {""}
         <span className="font-normal normal-case">{ owner }</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
       email: {""}
        <span className="font-normal normal-case">{ email }</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Fecha alta: {""}
          <span className="font-normal normal-case">{ register }</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Sintomas: {""}
          <span className="font-normal normal-case">{ description }</span>
      </p>
      <div className="flex justify- justify-between">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={ ()=>setPatient(patient) }
        >
          Editar
         </button>

        <button
            onClick={deleteAppointment}
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default CardPatient
