import "./analisis.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import imge from "../../../img/mejor.jpeg"


export default function Analisis() {

  const data = [
    {
      name: 'Ene',
      "Active User": 1500,
    }, {
      name: 'Fer',
      "Active User": 2000,
    }, {
      name: 'Mar',
      "Active User": 2500,
    }, {
      name: 'Abr',
      "Active User": 1100,
    }, {
      name: 'May',
      "Active User": 3400,
    }, {
      name: 'Jun',
      "Active User": 2000,
    }, {
      name: 'Jul',
      "Active User": 3700,
    },
    {
      name: 'Ago',
      "Active User": 1600,
    }, {
      name: 'Sep',
      "Active User": 2200,
    }, {
      name: 'Oct',
      "Active User": 4000,
    }, {
      name: 'Nom',
      "Active User": 3500,
    }, {
      name: 'Dic',
      "Active User": 4000,
    },
  ];

  return (
  <div className="anll">
    <div className='Analisis'>
      <h3 className="til">Analisis de usuarios</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
      <LineChart data={data}>
        <XAxis dataKey='name' stroke="#5550bd"/>
        <Line type='monotone' dataKey='Active User' stroke="#5550bd"/>
        <Tooltip/>
        <CartesianGrid stroke="#5550bd36" strokeDasharray="5  5"/>
      </LineChart>
      </ResponsiveContainer>
      </div>
      <div>
     <h3 className="prro">producto mas vendido
     <h2 className="mn">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
     <h3 className="www"> este fue el producto mas comprado por nuestros usuarios</h3>
     </h3>
     </div>
    </div>
  )
}