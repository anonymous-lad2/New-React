import React from 'react'

export const IncomeExpenses = () => {
  return (
    <div className='flex bg-white shadow-lg h-20 w-72 justify-evenly items-center'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-transform: uppercase text-sm'>Income</p>
            <p className='text-green-500 text-lg'>$500.00</p>
        </div>
        <div className='h-10 w-[1px] bg-gray-300'></div>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-transform: uppercase text-sm'>Expense</p>
            <p className='text-red-500 text-lg'>$240.00</p>
        </div>
    </div>
  )
}
