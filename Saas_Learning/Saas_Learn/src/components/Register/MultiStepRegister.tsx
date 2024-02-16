import React from 'react'
import { Button, Input } from 'reactstrap'

export default function MultiStepRegister() {
  return (
    <div className='w-80 h-auto bg-white'>
      <h1>MultiStepRegister</h1>
        <div className='my-10'>
          <Input type='text' placeholder='Mobile' className='p-9'/>
        </div>
        <div>
          <Button color='primary'>Submit</Button>
        </div>
    </div>
  )
}
