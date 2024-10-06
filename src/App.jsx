import { useState } from 'react';
import { calculateLoanPayment } from './utils/loan';

import './App.css';
import CompletedResults from './components/CompletedResults';
import EmptyResults from './components/EmptyResults';
import Form from './components/Form';


function App() {

  const [isMortgageCalculated, setIsMortgageCalculated] = useState(false);

  const [mortgage, setMortgage] = useState({
    monthlyPayment: 0, 
    totalRepayment: 0,
  })

  function calculateMortgage(amount, term, rate){
    setMortgage(calculateLoanPayment(amount, term, rate));
    setIsMortgageCalculated(true);
  }

  function resetValues(){
    setIsMortgageCalculated(false);
  }



  return (
    <>
      <Form onCalculateMortgage={calculateMortgage} onReset={resetValues}  /> 
      {isMortgageCalculated ? (
        <CompletedResults mortgage={mortgage} />
      ) : (
        <EmptyResults />
      )}
    </>
  );
}

export default App;
