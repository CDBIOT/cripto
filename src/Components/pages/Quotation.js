
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
    let i;
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
        
       setId(usbBrl.coins[0].item)
       setName(usbBrl.name)
       setCoinId(usbBrl.coins)
       setCoinName(usbBrl.coins[0].item.coinname)

//for (i=0;i==14;i++){
    console.log(usbBrl)//}
    console.log(usbBrl.coins)
    //}
    }


useEffect(() => {
    getQuot();
}, [])


return (
    <>
    <h1>Quotation</h1>
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
              
     {
   coinid.length>0 ? (
    coinid.map((c,index)=>(  
        <tr key = {index}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.coinid}</td>
             <td>{c.coinname}</td>
        </tr>
     )
    )):(
        coinid.map((c,i)=>
        <tr key = {i}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.coinid}</td>
            <td>{c.coinname}</td>

        </tr>
        
        )

     )
    } 
    </>
    
    )

}
    
export default Quotation
    
    
    