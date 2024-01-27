import React, { useEffect, useState }  from 'react'
import Card from './Card';
import Header from './header';
import axios from "axios";
import Pokeinfo from './pokeinfo';
const Main=()=>{
   const [pokeData, setPokeData]=useState([]);
   const[loading,setLoading]=useState(true);
   const [url,setUrl]=useState(" https://pokeapi.co/api/v2/pokemon/");
   const [nextUrl,setNextUrl]=useState();
   const [prevUrl,setprevUrl]=useState();
   const [pokeDex,setPokeDex]=useState();

   const pokeFun=async()=>{
    setLoading(true);
    const res=await axios.get(url);
    setNextUrl(res.data.next);
    setprevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
       
   }
 const getPokemon=async(res)=>{
   res.map(async(item)=>{
       const result= await axios.get(item.url)
       setPokeData(state=>{
         state=[...state,result.data]
         state.sort((a,b)=>a.id>b.id?1:-1)
         return state;
       })
   })
 }



 useEffect(()=>{
     pokeFun();
 },[url])

 return(
   <>
   <Header/>
       <div className="container">
           <div className="left-content">
               <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
               
               <div className="btn-group">
                   {  prevUrl && <button onClick={()=>{
                       setPokeData([])
                      setUrl(prevUrl) 
                   }}>Previous</button>}

                   { nextUrl && <button onClick={()=>{
                       setPokeData([])
                       setUrl(nextUrl)
                   }}>Next</button>}

               </div>
           </div>
           <div className="right-content">
              {/* <Pokeinfo data={pokeDex}/> */}
           </div>
       </div>
   </>
)
}
export default Main;