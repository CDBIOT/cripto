
import Axios from "axios";
import {useEffect, useState} from 'react';

function Quotation(){

const [id, setId] = useState([])
const [name, setName] = useState([])
const [coinid, setCoinId] = useState([])
const [coinname, setCoinName] = useState([])


async function getQuot(){
    let usbBrl;
    let coins;
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
        .then(response=>
         usbBrl = response.data)
        
       setId(usbBrl.id)
       setName(usbBrl.name)
       setCoinId(usbBrl.coins[0].item.coinid)
       setCoinName(usbBrl.coins[0].item.coinname)

        console.log(usbBrl.coins) 
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
            <td>{id}</td>
            <td>{name}</td>
            <td>{coinid}</td>
             <td>{coinname}</td>
        </tr>
        <tr>
           <td>{id}</td>
            <td>{name}</td>
            <td>{coinid}</td>
             <td>{coinname}</td>
        </tr>
    </div>
    } 
    
    </>
    
    )
}
    
export default Quotation
    
    
    