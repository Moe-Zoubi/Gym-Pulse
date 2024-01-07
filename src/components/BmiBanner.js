import { useState } from "react";



function BmiBanner() {


    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const [bmi, setBmi] = useState("");
    const [weightMessage, setWeightMessage] = useState("");

    let calculateBmi = (e) => {
        e.preventDefault();
        if (weight === 0 || height === 0) {
            alert("Please enter a valid weight and height");
          } else {
            let bmi = weight / ((height * height) / 10000);
            setBmi(bmi.toFixed(1));
      
            if (bmi < 18.5) {
                setWeightMessage("Underweight");
            } else if (bmi < 25) {
                setWeightMessage("Normal");
            } else if(bmi < 30){
                setWeightMessage("Overweight");
            }else{
                setWeightMessage("Obese");
            }
          }
        };

    return(
        <div className="bmi-banner">
            <div className="bmi-text">
                <h2>Let's Calculate Your <span className="red">BMI</span></h2>
                <p>Easily determine your body mass index with our accurate calculation tool.</p>
                <div className="calculate-bmi">
                    <form>
                        <input className="bmi-weight" type="number" placeholder="Weight/kg" required onChange={(e) => setWeight(e.target.value)} />
                        <input className="bmi-height" type="number" placeholder="Height/cm" required onChange={(e) => setHeight(e.target.value)} />
                    </form>
                    <p><span className="bmi">Your BMI is: <span className="red">{bmi}</span></span> <span className="weight">Your weight is:  <span className="red">{weightMessage}</span></span></p>
                    <button type="submit" onClick={calculateBmi}>CALCULATE</button>
                </div>
            </div>  
        </div>
    )
};

export default BmiBanner;