import {useState} from "react";

import Header from "./components/Header"
import Form from "./components/Form";
import ListPatient from "./components/ListPatient";
import {Appointment} from "./interfaces/appointment";


function App() {
  const [ patients, setPatients ] = useState<Appointment[]>([])

  const handleChangedPatients = (appointment:Appointment) => setPatients([ ...patients, appointment ])
  return (
      <div className="container mx-auto mt-10">
        <Header />
        <div className="mt-12 md:flex">
          <Form
            setPatients = { handleChangedPatients }
          />
          <ListPatient />
        </div>
      </div>
  )
}

export default App
