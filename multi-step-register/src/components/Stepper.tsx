import React from "react";

interface IStepperProps {
  activeStep: number;
  stepperData: {
    name: string;
  }[];
}

export default function Stepper({ activeStep, stepperData }: IStepperProps) {
  return (
    <div>
      <h1>Multi-step</h1>
      <div className="my-10">
        {/* Stepper starts here */}
        {/* desktop View */}
        <ol className="hidden md:flex items-center justify-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
          {Array.isArray(stepperData) &&
            stepperData.map((_, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <hr
                    className={`hidden sm:block rounded-3xl h-1 w-36 mx-5 text-gray-600 ${
                      index < activeStep - 1 ? "bg-black" : "bg-gray-400"
                    }`}
                  />
                )}
                <li className={`flex items-center text-lg`}>
                  <span
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      index < activeStep
                        ? "bg-black ring-black text-white"
                        : "bg-gray-400 ring-gray-400"
                    }`}
                  >
                    {index + 1}
                  </span>
                </li>
              </React.Fragment>
            ))}
        </ol>

        {/* mobile View */}
        <div className="visible md:hidden">
          <ol className="flex items-center justify-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            {Array.isArray(stepperData) &&
              stepperData.map((item, index) => (
                <li key={index} className="flex flex-col mx-4 items-center">
                  <span
                    className={`flex items-center w-28 sm:w-36 justify-center h-1 ${
                      index < activeStep ? "bg-black" : "bg-gray-400"
                    } text-lg text-white`}
                  ></span>
                  <span
                    className={`mt-1 whitespace-nowrap ${
                      index < activeStep ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
