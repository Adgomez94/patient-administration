import CardPatient from "./CardPatient";

import {Appointment} from "../interfaces/appointment";
import {Dispatch, SetStateAction} from "react";

interface Props {
  patients:Appointment[],
  setPatient: Dispatch<SetStateAction<Appointment | undefined>>,
  setPatients:Dispatch<SetStateAction<Appointment[]>>
}

interface TextTtitle {
  title:string
  paragraph:string
  span: string
}

const ListPatient = ( { patients, setPatient, setPatients }:Props ) => {

  const TextPacient = ( {title,paragraph,span}:TextTtitle ) =>(
      <>
        <h2 className="font-black text-3xl text-center">{ title }</h2>
        <p className=" text-xl mt-5 mb-10 text-center">
          { paragraph } {''}
          <span className="text-indigo-600 font-bold">{ span }</span>
        </p>
      </>
  )

  return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        {
          (patients && patients.length) ? (
              <>
                <TextPacient
                    title = "Listado de Pacientes"
                    paragraph = "Administra tus"
                    span = "Pacientes y Citas"
                />
                {
                  patients.map(patient =>(
                      <CardPatient
                          key={patient.id}
                          patient = { patient }
                          setPatient = { setPatient }
                          setPatients = { setPatients }
                      />))
                }
              </>
          ) : (
              <TextPacient
                  title = "Noy hay Pacientes"
                  paragraph = "Comienza agregando pacientes"
                  span = "y aparecerán en este lugar"
              />
          )
        }


      </div>
  );
};


export default ListPatient;
