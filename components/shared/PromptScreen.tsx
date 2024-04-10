'use client'

import { creditFee } from '@/constants'
import React from 'react'
import { InsufficientCreditsModal } from './InsufficiantCreditsModel'
import { updateCredits } from '@/lib/actions/user.actions'

const PromptScreen = ({ creditBalance, userId }: TransformationFormProps) => {
    console.log("credit balance",creditBalance)
  const handleSubmit = async (event:any) => {
    event.preventDefault(); // Prevent the default form submission behavior
    await updateCredits(userId, creditFee);
  }

  return (
    <form onSubmit={handleSubmit} className='w-5/6 h-8 flex flex-row'>
      {creditBalance < Math.abs(creditFee) && <InsufficientCreditsModal />}
      <div>
        
      </div>
      <input placeholder='message' className='h-8 w-full border-t-2 shadow-md rounded-lg' />
      <button type='submit' className='px-2 ml-2 bg-orange-400 rounded-lg text-white hover:bg-orange-500'>Send</button>
    </form>
  )
}

export default PromptScreen
