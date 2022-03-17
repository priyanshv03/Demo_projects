import React from 'react'
import "./Netflix.css"
import show1 from "./img/netflix/silent_sea.jpg"

let Card =(props)=>{
   return ( <div className="card">
    <img src={show1} alt="" />
    <div className="card_info">
       <div className="details">
           <span className='Adjective '>{props.Adjective}</span>
           <h3 className="card_title">{props.Title}</h3>
        <a href="/">
            <button >Watch Now!</button>
        </a>
        </div>
    </div>
</div>
)
}

export default function Netflix() {
  return (
 <>
 <h1 className='heading'>Netflix</h1>

 <div className="cards">
     <Card Title = "The Snake"
           Adjective ="Netflix Premium Show"
     />
   <Card Title = "The Snake"
           Adjective ="Netflix Premium Show"
     />
     <Card Title = "The Snake"
     Adjective ="Netflix Premium Show"
     />
    <Card Title = "The Snake"
           Adjective ="Netflix Premium Show"
     />
     <Card Title = "The Snake"
     Adjective ="Netflix Premium Show"
     />
     <Card Title = "The Snake"
           Adjective ="Netflix Premium Show"
     /> <Card Title = "The Snake"
           Adjective ="Netflix Premium Show"
     />
      <Card Title = "The Snake"
           Adjective ="Netflix Premium Show"
     />
      <Card Title = "The Snake"
           Adjective ="Netflix Premium Show"
     />
      <Card Title = "The Snake"
           Adjective ="Netflix Premium Show"
     />
           
 </div>
 
 </>
  )
}
