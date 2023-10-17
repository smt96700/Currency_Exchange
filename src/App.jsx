import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseCurrencyInfo from './hooks/useCurrencyinfo'
import {InputBox } from './components'
function App() {
  const [amount, setAmount]= useState(0);
  const [from, setFrom]= useState('usd');
  const [to, setTo]= useState('inr');
  const [convertedAmount, setConvertedAmount ]= useState(0);
  
  const currencyInfo= UseCurrencyInfo(from);
  const options= Object.keys(currencyInfo);
  const swap= ()=>{
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    // const convert= ()=>{
    //      setConvertedAmount(amount* currencyInfo[to]);
    // }
  }
  return (
    
      <div className='items-center w-full h-screen bg-blue-800   flex flexwrap justify-center'>
        <div className='items-center fixed w-full text-white flex flexwrap justify-center'> 
         <div className='  flex flex-col  bg-blue-400 p-5 rounded-lg font-semibold justify-center'> 
           <div className='flex flex-col relative '>
           <InputBox label="From" amount={amount} currOptions={options} 
           onCurrencyChange={(currency)=> setFrom(currency)} selectCurrency={from} onAmountChange={(amount)=> setAmount(amount)}/>
           <div className='bg-blue-600 absolute top-1/3 p-1 mt-3 rounded-lg  left-1/3 translate-x-1/2  m-0 flex flexwrap justify-center'>
            <button className='h-8 w-full' onClick={()=> swap()}>Swap</button>
           </div>
           <InputBox label="To" amount={convertedAmount} 
           onAmountChange={(convertedAmount)=> setConvertedAmount(convertedAmount)} onCurrencyChange={(currency)=> setTo(currency)} selectCurrency={to} currOptions={options} amountDisable />
           </div>
           <div className='bg-blue-600 rounded-lg m-2 h-16 items-center flex '>
           <button className='w-full h-full' onClick={()=> setConvertedAmount(amount* currencyInfo[to])}>Convert {from.toUpperCase()} To {to.toUpperCase()}</button>
           </div>
         </div>

        </div>

      </div>
    
  )
}

export default App
