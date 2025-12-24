import React from 'react'
import { Button } from './Button'

export const Keypad = ({onCalculate, onInput, onClear}) => {
    const buttons = ['7','8','9','/','4','5','6','*','1','2','3','-','0','.','+']
  return (
    <div className='grid grid-cols-4 gap-3'>
        {buttons.map((btn)=>(
            <Button key={btn} label={btn} onClick={onInput} />
        ))}
        <button onClick={onCalculate} className='btn bg-green-500 row-span-2'>=</button>
        <button onClick={onClear} className='btn bg-red-500 col-span-2'>C</button>
        <button onClick={onInput} className='btn'>%</button>
    </div>
  )
}
