
import Axios from "axios";
import {useEffect, useState} from 'react';

function BotPress(){

const [people, setPeople] = useState([])


useEffect(() => {
 
}, [])


return (
    <>
    <h1>BotPress</h1>
     
    <div>

        <input type= "text" placeholder="Nome de usuario" ></input>
        <button> Entrar </button>
        <br></br>
        <br></br>
        <br></br>
        <input type= "text" placeholder="Mensagem" ></input>
        <button>Enviar </button>
</div>

     {
    
    people.lenght >0 ? (
     people.map((user,index)=>(  
    <div>

    <table >
        <tbody>
 	        <tr key ={index}>
            <td>{user.id}</td>
            <td>{user.nome}</td>
            <td>{user.email}</td>
            </tr>
        </tbody>
    </table> 
    </div>
     )
     )) :( 
      
        people.map((user, index) => 
        <tr key ={index}>
        <td>{user.id}</td>
        <td>{user.nome}</td>
        <td>{user.email}</td>
        </tr> 
        
        ) 
      ) 
    } 
   
    </>
    
    )
}
    
export default BotPress
    
    
    