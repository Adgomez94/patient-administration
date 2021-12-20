
const CardPatient = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Propietario: {""}
         <span className="font-normal normal-case">Adrian</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
       email: {""}
        <span className="font-normal normal-case">Hook@gmail.com</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Fecha alta: {""}
          <span className="font-normal normal-case">10 de Diciembre de 2022</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Sintomas: {""}
          <span className="font-normal normal-case">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nesciunt a eveniet iure rem excepturi facere nostrum magni reiciendis harum qui obcaecati doloremque dolore tenetur provident laudantium, quod vel fugiat.</span>
      </p>
    </div>
  )
}

export default CardPatient
