import React, { useState } from 'react'
import Stepper from '../components/Stepper'
import { formFields } from '../components';
import FormInput from '../components/Form';

export default function MultiStep() {
    const [activeStep, setActiveStep] = useState(1);
    const stepperData = [{
        name: 'Personal',
    }, {
        name: 'Account',

    },
  {
    name: 'Profile',
  }]
  return (
    <div>
      {/* <h1>Multi-step</h1> */}
      <Stepper activeStep={activeStep} stepperData={stepperData}/>
      {/* <div className="grid gap-6 mb-6 md:grid-cols-2"> 
        {formFields.map(field => (
          <FormInput
                key={field.id}
                id={field.id}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required} pattern={''}          
                />
        ))}
        */}
    </div>
    // </div>
  )
}
