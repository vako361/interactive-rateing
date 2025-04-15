import "./result.css";
export default function Result({ active }){
    return(
        
        <div className="result-section">
         <img src="/images/online-payment_two-Color(1- 2.svg" alt="logo" className="result-logo"/>
         <div className="rate">You selected {active} out of 5</div>
         <h2>Thank you!</h2>
         <p className="result-decription">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>

        </div>
    
    )
}