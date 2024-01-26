import React  from 'react'
import Card from './Card';
import Header from './header';
const Main=()=>{
    return(
        <>
          <Header/>
     <div className="container">
 <div className="left-content">
   <Card/>
 
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <div className="btn-group"><button>Previous</button>
    <button>Next</button></div>
 
 </div>
<div className="right-content"></div>
 {/* <Pokeinfo/> */}
     </div>
        
        </>
    )
}
export default Main;