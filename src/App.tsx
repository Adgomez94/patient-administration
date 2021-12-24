import { useState, useEffect} from "react";

import Header from "./components/Header"
import Form from "./components/Form";
import ListPatient from "./components/ListPatient";

import { Appointment } from "./interfaces/appointment";

function App() {
  const [ patients, setPatients ] = useState<Appointment[]>([])
  const [ patient, setPatient ]   = useState<Appointment>()

  useEffect(()=>{
    const localPatient = localStorage.getItem("patients") ?? []
    if(!Array.isArray(localPatient)){
      setPatients( JSON.parse(localPatient) )
    }
   },[])

  useEffect(()=>{
    localStorage.setItem("patients",JSON.stringify(patients))
  },[patients])

  return (
      <div className="container mx-auto mt-10">
        <Header />
        <div className="mt-12 md:flex">
          <Form
            setPatients = { setPatients }
            patient = { patient }
            setPatient = { setPatient }
          />
          <ListPatient
              setPatients = {setPatients}
              setPatient = { setPatient }
              patients = {patients} />
        </div>
      </div>
  )
}

export default App
