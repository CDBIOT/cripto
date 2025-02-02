
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

//await Axios.get(`//economia.awesomeapi.com.br/last/USD-BRL/`,options)
//https://api.coingecko.com/api/v3/coins/{id}/market_chart
//https://api.coingecko.com/api/v3/search/trending
//await Axios.get(`https://api.coingecko.com/api/v3/coins/{id}`,options)

await Axios.get('https://api.coingecko.com/api/v3/search/trending',options)
https
        .then(response=>
         //usbBrl = response.data.USDBRL)
         usbBrl = response.data)
        
       setCode(usbBrl.code)
       setBid(usbBrl.bid)
       setHigh(usbBrl.high)
       setLow(usbBrl.low)

        console.log(usbBrl) 
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
    
    
    