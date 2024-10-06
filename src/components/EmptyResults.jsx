import React from 'react'
import illustrationEmpty from '../images/illustration-empty.svg';

const EmptyResults = () => {
  return (
    <article className='results empty'>
      <img src={illustrationEmpty} alt="illustration empty results" />
      <h1>Results shown here</h1>
      <p>
        Complete the form and click "calculate repayments" to see what your 
        monthly repayments will be. 
      </p>
    </article>
  );
}

export default EmptyResults