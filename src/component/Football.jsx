import React from 'react'

let foot = (a) => {
    alert(a);

}
export default function Football() {
  return (
      <>
          <button onClick={foot("goal!!")}>Take the shot!</button>

      </>
  )
}
