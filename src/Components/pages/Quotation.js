
import Axios from "axios";
import {useEffect, useState} from 'react';

function Quotation(){

const [code, setCode] = useState([])
const [bid, setBid] = useState([])
const [high, setHigh] = useState([])
const [low, setLow] = useState([])


async function getQuot(){
    let usbBrl;
    const options = { 
        'Access-Control-Allow-Origin':'*',
        method: 'GET',	
        mode: 'cors',
        cache: 'default',
        'Content-Type': 'application/json'}

await Axios.get(`//economia.awesomeapi.com.br/last/USD-BRL`,options)
        .then(response=>
         usbBrl = response.data.USDBRL)
        
       setCode(usbBrl.code)
       setBid(usbBrl.bid)
       setHigh(usbBrl.high)
       setLow(usbBrl.low)

      console.log(usbBrl) 
    }


useEffect(() => {
    getQuot();
}, [])


return (
    <>
    <h1>Quotation</h1>
     {
        <div>
         <table>
            <tbody>
                <tr>
                    <td>CODE</td>
                    <td>BID</td>
                    <td>HIGH</td>
                    <td>LOW</td>
                </tr>
            </tbody>
        </table>
              
        <tr>
            <td>{code}</td>
            <td>{bid}</td>
            <td>{high}</td>
             <td>{low}</td>
        </tr>
    </div>
    } 
    
    </>
    
    )
}
    
export default Quotation
    
    
    