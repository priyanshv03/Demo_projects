import React from 'react'

let Today = new Date(); 

export default function Thapa1() {
  return (<>
    <div className="thapa1">
    <h1>My name is Priyansh </h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem labore
      beatae modi fugiat doloremque tempore ut nulla nostrum quas vel
      voluptatibus natus corrupti nam molestias, magnam saepe eligendi veniam
      iste aliqu
      maiores ex facilis nemo, esse quibusdam ducimus dolor, voluptas explicabo,
      distinctio obcaecati. Dolorum laboriosam, veritatis repellendus atque
      ipsam aperiam vel porro. Voluptas dolor dicta esse soluta inventore enim
      eveniet modi?
    </p>
<ol>Movies:
  <li>Shershah</li>
  <li>Thapa</li> 
  <li>Podu</li>
  <li>Harry</li>
   <li>Priyansh</li>
</ol>

<span>Today is : {Today.getDay()+"/"+Today.getMonth()+"/"+Today.getFullYear()}</span>
<br />
<span>Time: {Today.getHours()+":"+Today.getMinutes()+":"+Today.getSeconds()}</span>
</div>
</>
  )
}
