import "./rate.css"
import { useState } from "react"
export default function Rate( {setSubmit, active, setActive}){
    const arr = [1, 2, 3, 4, 5]
 
    return (
      <>
      <div className='main-section'>
        <div className='star-wraper'><img src='/images/icon-star.svg' className='star'/></div>
        <h1>How did we do?</h1>
        <p className="description">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="num-wraper">
        {arr.map((item) => (
          <button
          type="button"
          key={item}
          onClick={() => setActive(item)}
          className="num"
          style={{
            backgroundColor: active === item ? "var(--Medium-Gray, #7C8798)" : ""
          }}
          >
          {item}
          </button>
        ))}
        </div>
        <button type="button" className='submit' onClick={() => active && setSubmit(true)}>SUBMIT</button>
      </div>
      </>
    )
}
