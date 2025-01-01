import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const ResetTransaction = () => {

    const { setTransaction} = useContext(AppContext)
    
    function resetHandler(){
        setTransaction([])
    }

  return (
    <div>
        <button onClick={resetHandler}
        className="w-full bg-purple-500 p-2 rounded-md shadow-lg text-white font-bold text-lg hover:scale-105 transition duration-100">
            Reset Transactions
        </button>
    </div>
  )
}
