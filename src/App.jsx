import './App.css'
import React, { useState } from 'react';


function App() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const clear=()=>{
    setWeight('')
    setHeight('')
    setBmi(null)
    setMessage('')
  }

  const calculateBmi = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBmi);
      let bmiMessage = '';

      if (calculatedBmi < 18.5) {
        bmiMessage = 'Underweight';
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        bmiMessage = 'Normal weight';
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        bmiMessage = 'Overweight';
      } else {
        bmiMessage = 'Obesity';
      }
      setMessage(bmiMessage);
    } else {
      alert('Please enter valid height and weight');
    }
  };


  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6 mt-5'>
              <h2 className='p-2 text-center'>BMI CALCULATOR</h2>
              <p className=' text-center'>"Discover your healthy weight range with our BMI calculator"</p> <br /><br />

<div className='d-flex align-items-center justify-content-center'>
                <img  src="https://webstockreview.net/images/class-clipart-training-schedule-19.png" alt="" style={{height:'200px', width:'250px'}}  />
  
</div>

              <div>
                <label className='gender text-center ms-5 p-3'>Gender:</label>
                <input className=' ms-3' type="radio" name='gnd'/>
                <label className=' ms-3' type="radio" name='gnd'>Male</label>
                <input className=' ms-3' type="radio" name='gnd'/>Female


              </div>

            <div>
              <label className='weight text-center ms-5 p-3 '>weight:</label> 
              <input className='text-center p-2 border rounded  ms-2' type="number" placeholder='enter your weight in kg' value={weight}
          onChange={(e) => setWeight(e.target.value)}
 /> <br /><br />

              <label className='weight text-center ms-5 p-3  '>height:</label> 
              <input className='text-center  border rounded p-2 ms-2  ' type="number" placeholder='enter your height in cm' value={height}
          onChange={(e) => setHeight(e.target.value)}
 />

            <div className='button'>
            <button onClick={calculateBmi} type="button" class="btn btn-outline-secondary ms-5 mt-4">calculate</button>  
            <button onClick={clear} type="button" class="btn btn-outline-secondary ms-5 mt-4">clear</button>  

            </div> 
           </div>



           {bmi && (
        <div className='border rounded mt-3'>
          <h2 className='text-center'>Your BMI is: {bmi}</h2>
          <h3 className='text-center'>{message}</h3>
        </div>
      )}

            </div>

          </div>
          <div className='col-md-3'></div>

        </div>

    </>
  )
}

export default App;
