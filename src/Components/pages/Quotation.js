
import Axios from "axios";
import {useEffect, useState} from 'react';

function Quotation(){
const [coins, setCoins] = useState([])
const [id, setId] = useState([])
const [name, setName] = useState([])
const [coinid, setCoinId] = useState([])
const [price, setPrice] = useState([])


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
    
    setCoins(usbBrl.coins)
    setCoinId(usbBrl.coins[1].item.coin_id)
    setId(usbBrl.coins[1].item.id)
    setName(usbBrl.coins[1].item.name)
    setPrice(usbBrl.coins[1].item.data.price)

    console.log(usbBrl.coins)
    console.log(usbBrl.coins[0].item.name)
    console.log(usbBrl.coins[1].item.name)
    console.log(usbBrl.coins[1].item.coin_id)
    console.log(usbBrl.coins[1].item.data.price)
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
                    <td width="20%">CODE</td>
                    <td width="20%">NAME</td>
                    <td width="20%">PRICE</td>
                </tr>
            </tbody>
        </table>
              
     {
   coins.length>0 ? (
    coins.map((c,{id})=>(  
    
        <tr key = {id}>
            <img src={c.item.thumb} alt={c.item.name} className="w-10 h-10 mx-auto" />
            <td width="20%">{c.item.coin_id}</td>
            <td width="20%">{c.item.name}</td>
            <td width="20%">{c.item.coinid}</td>
            <td width="20%">{c.item.data.price.toFixed(3)}</td>
          
        </tr>
     )
    )):(
        coinid.map((c,i)=>
        <tr key = {i}>
            <img src={c.item.thumb} alt={c.item.name} className="w-10 h-10 mx-auto" />
            <td>{c.item.id}</td>
            <td>{c.item.name}</td>
            <td>{c.item.coinid}</td>
            <td>{c.item.data.price.toFixed(3)}</td>
            

        </tr>
        
        )

     )
    } 
    </>
    
    )

}
    
export default Quotation
    
    
    