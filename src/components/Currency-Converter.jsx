// import  { useEffect, useState } from 'react'

// const CurrencyConverter = () => {
//     const [currencies, setCurrencies]=useState([])
//     const [amount,setAmount]=useState(0)
//     const [fromcurrency,setFromCurrency]=useState('usd')
//     const [tocurrency,setTocurrency]= useState('inr')
//     const [rates,setRates]=useState({})
//     const [result,setResult]=useState(0)
//     console.log(currencies)
//     const apiforcurrencyconverter=async()=>{
//         const responsedata=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromcurrency}.json`)
//         const jsondata= await responsedata.json()
       
//         setCurrencies(Object.keys(jsondata[fromcurrency]))
        
//         setRates(jsondata[fromcurrency])
//         console.log(jsondata)
//     }

//     useEffect(()=>{
//         apiforcurrencyconverter()

//     },[fromcurrency])

//    useEffect(() => {
//   if (rates[tocurrency]) {
//     const converted = amount * rates[tocurrency]
//     setResult(converted)
//   }
// }, [amount, tocurrency, rates])
//     function swap()
//     {

       
//        setFromCurrency(tocurrency)
//        setTocurrency(fromcurrency)
//     }
//   return (
//     <div>
//       <form action="">
//         <div>
            
//             <input style={{background:"pink"}}type="number" placeholder='Enter the Value' onChange={(e)=>setAmount(Number(e.target.value))}  />
//              <label  htmlFor="country">Choose Country Code: </label>
//             <select style={{background:"limegreen",color:"black"}} name='currency' id="country1" 
//             value={fromcurrency}
//             onChange={(e)=>setFromCurrency(e.target.value)}> 
//             {
//                 currencies.map(Code=>(
//                     <option  key={Code} value={Code}> {Code}</option>
//                 ))
//             }
//          </select>
//         </div>
//         <div className='input2'>
//          <input style={{background:"pink",color:"black"}} value={amount ? result.toFixed(2) : ""} readOnly type="number" placeholder='Enter the Value'  />
//          <label  htmlFor="country">Choose Country Code: </label>
//             <select  style={{background:"limegreen",color:"black"}} name='currency' id="country2" 
//             value={tocurrency}
//             onChange={(e)=>setTocurrency(e.target.value)}> 
//             {
//                 currencies.map(code=>(
//                     <option key={code} value={code}>{code}</option>
//                 ))
//             }
//          </select>
        
//          </div>
//          <button style={{marginLeft: "200px" , marginTop:'50px', background:"red",color:"white"}} type='button' onClick={swap}>Swap</button>
//       </form>
//     </div>
//   )
// }

// export default CurrencyConverter