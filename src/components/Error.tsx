
interface Props {
  title: string
}

const Error = ({ title }:Props) => {
  return (
      <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-5 rounded">
        <p>{title}</p>
      </div>
  )
}


export default Error;
