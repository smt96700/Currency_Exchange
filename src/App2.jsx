// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import UseCurrencyInfo from './hooks/useCurrencyinfo'
// import {InputBox } from './components'
// function App() {
//   const [amount, setAmount]= useState(0);
//   const [from, setFrom]= useState('usd');
//   const [to, setTo]= useState('inr');
//   const [convertedAmount, setConvertedAmount ]= useState(0);
  
//   const currencyInfo= UseCurrencyInfo(from);
//   const options= Object.keys(currencyInfo);
//   const swap= ()=>{
//     setFrom(to);
//     setTo(from);
//     setAmount(convertedAmount);
//     setConvertedAmount(amount);
//     const convert= ()=>{
//          setConvertedAmount(amount* currencyInfo[to]);
//     }
//   }
//   return (
    
//       <div className='items-center w-full h-screen bg-blue-800   flex flexwrap justify-center'>
//         <div className='items-center fixed w-full text-white flex flexwrap justify-center'> 
//          <div className='  flex flex-col  bg-blue-400 p-5 rounded-lg font-semibold justify-center'> 
//            <div className='flex flex-col relative '>
//            <div className='bg-white w-80 p-2 m-2  text-black  flex flexwrap rounded-lg justify-between'> 
//              <div className=' bg-white p-2  flex flex-col'>
//               <label htmlFor="From"> From</label>
//               <input type="text" defaultValue={0} className='w-8 outline-none'/>
//              </div>
//              <div className='relative bg-white p-2 '>
//               <label htmlFor="From"><p>Currency Type</p> </label>
//              <select name="" id="" className='w-16  outline-none rounded-lg p-1 float-right'>
//               <option value="usd">USD</option>
//              </select>
//              </div>
//            </div>
//            <div className='bg-blue-600 absolute top-1/3 p-1 mt-3 rounded-lg  left-1/3 translate-x-1/2  m-0 flex flexwrap justify-center'>
//             <button className='h-8 w-full'>Swap</button>
//            </div>
//            <div className='bg-white w-80 p-2 text-black m-2  flex flexwrap rounded-lg justify-between'> 
//              <div className=' bg-white p-2 flex flex-col'>
//               <label htmlFor="From"> From</label>
//               <input type="text" defaultValue={0} className='w-8 outline-none'/>
//              </div>
//              <div className=' bg-white  p-2 relative'>
//               <label htmlFor="From"> <p>Currency Type</p></label>
//               <select name="" id=""  className='w-16 float-right'>
//                 <option value="inr">INR</option>
//               </select>
//              </div>
//            </div>
//            </div>
//            <div className='bg-blue-600 rounded-lg m-2 h-16 items-center flex '>
//            <button className='w-full h-full' onClick={()=> convert()}>Convert {from} To {to}</button>
//            </div>
//          </div>

//         </div>

//       </div>
    
//   )
// }

// export default App
