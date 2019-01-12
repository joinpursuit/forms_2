import React from 'react';
import './form.css';
const data = require ('./country.json');

class MarsForm extends React.Component{
  constructor(){
    super();
    this.state = {
      firstname: '',
      lastname: '',
      dob: '',
      countries: data, 
      country: '',
      dietary: '',
      reason: '',
      formCompleted: false,
      formSubmitted: false,
      breathe: '',
      marital: '',
      stress_handling: '',
      claustrophobic: '',
      educations: {
        high_school: false,
        associate: false,
        bachelor: false,
        master: false,
        PhD: false
      },
      educationValues: {
        high_school: '',
        associate: '',
        bachelor: '',
        master: '',
        PhD: ''
      },
      otherEdu: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleComplete = (event) => {
    event.preventDefault();
    this.setState({
      formCompleted: true
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      formSubmitted: true
    })
  }
  
  handleRadioChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleCheckboxChange = (event) => {
    const {educations, educationValues} = this.state;
    let newEducations = {...educations};
    newEducations[event.target.id] = !newEducations[event.target.id];
    let newEducationValues = {...educationValues};
    newEducationValues[event.target.id] = newEducations[event.target.id] ? event.target.id : '';

    this.setState({
      educations: newEducations,
      educationValues: newEducationValues 
    })
  }

  radioQuestions () {
    return (
      <div id='radios' onChange={this.handleRadioChange}>

        <div id='breathe'>
          <p><b>Can you breathe underwater longer than 1 minute?</b></p>

          <label>
            <input 
              type='radio' 
              name='breathe' 
              value='yes' 
              checked={this.state.breathe === 'yes'} id='yes' /> Yes
          </label><br />

          <label>
            <input 
              type='radio' 
              name='breathe' 
              value='no' 
              checked={this.state.breathe === 'no'} id='no' /> No
          </label><br />

          <label>
            <input 
              type='radio' 
              name='breathe' 
              value='unknown' 
              checked={this.state.breathe === 'unknown'} id='unknown' /> I do not know
          </label><br />

        </div>

        <div id='marital'>
          <p><b>What is your marital status?</b></p>

          <label>
            <input 
              type='radio' 
              name='marital' 
              value='married' 
              checked={this.state.marital === 'married'} /> Married
          </label><br />

          <label>
            <input 
              type='radio' 
              name='marital' 
              value='unmarried' 
              checked={this.state.marital === 'unmarried'} /> Unmarried
          </label><br />

        </div>

        <div id='stress_handling'>

          <p><b>When you are in a stressful or difficult situation, how do you most frequently react?</b></p>

          <label>
            <input 
              type='radio' 
              name='stress_handling' 
              value='determination' 
              checked={this.state.stress_handling === 'determination'} id='determination' /> Determination: I continue to confront the situation.
          </label><br/>

          <label>
            <input 
              type='radio' 
              name='stress_handling' 
              value='defeat' 
              checked={this.state.stress_handling === 'defeat'} /> Defeat: I stop confronting the situation.
          </label><br/>

          <label>
            <input 
              type='radio' 
              name='stress_handling' 
              value='anger' 
              checked={this.state.stress_handling === 'anger'} /> Anger: I become upset at the situation.
          </label><br/>

          <label>
            <input 
              type='radio' 
              name='stress_handling' 
              value='resourcefulness' 
              checked={this.state.stress_handling === 'resourcefulness'} /> Resourcefulness: I seek help to confront the situation.
          </label>

        </div>

        <div id='claustrophobic'>

          <p><b>Are you claustrophobic?</b></p>

          <label>
            <input 
              type='radio' 
              name='claustrophobic' 
              value='yes' 
              checked={this.state.claustrophobic === 'yes'} /> Yes
          </label><br />

          <label>
            <input 
              type='radio' 
              name='claustrophobic' 
              value='no' 
              checked={this.state.claustrophobic === 'no'} /> No
          </label><br />

          <label>
            <input 
              type='radio' 
              name='claustrophobic' 
              value='unknown' 
              checked={this.state.claustrophobic === 'unknown'} /> I do not know.
          </label><br />

        </div>

      </div>
    )
  }

  checkboxQuestions () {
    const {educations, educationValues, otherEdu} = this.state;

    return (
      <>
        <p><b>Check all educational credentials you have received:</b></p>

        <label>
          <input 
            onChange={this.handleCheckboxChange} 
            type='checkbox' 
            checked={educations.id} 
            value={educationValues.id} 
            id='high_school'/> High school diploma or GED equivalent
        </label><br />

        <label>
          <input 
            onChange={this.handleCheckboxChange} 
            type='checkbox' 
            checked={educations.id}
            value={educationValues.id} 
            id='associate'/> Associate Degree
        </label><br />
    
        <label >
          <input 
            onChange={this.handleCheckboxChange} 
            type='checkbox' 
            checked={educations.id}
            value={educationValues.id} 
            id='bachelor'/> Bachelor Degree
        </label><br />

        <label >
          <input 
            onChange={this.handleCheckboxChange} 
            type='checkbox' 
            checked={educations.id} 
            value={educationValues.id} 
            id='master'/> Master Degree
        </label><br />
      
        <label>
          <input 
            onChange={this.handleCheckboxChange} 
            type='checkbox' 
            checked={educations.id} 
            value={educationValues.id} 
            id='PhD'/> PhD
        </label><br /><br />

        <label> Other<br />
          <input 
            type='text' 
            name='otherEdu' 
            value={otherEdu} id='otherEdu' 
            placeholder='Please typein'/>
        </label><br />
      </>
    )
  }
    
  render() {
    console.log(this.state);

    const {firstname, lastname, dob, countries, country, dietary, reason, formCompleted, formSubmitted, breathe, marital, stress_handling, claustrophobic, educations, educationValues, otherEdu} = this.state;
    
    let options = countries.map(country => {
      return <option>{country.name}</option>
    });
      
    if(!formCompleted) {

      return(
        <>
          <div id='beforeComplete'>
          
            <h1 id='header'>Mission to Mars Registration Form</h1><br/>

            <form onChange={this.handleChange}>

              <label htmlFor='firstname'><b>First Name</b></label><br/>
              <input type='text' name='firstname' value={firstname} placeholder='First Name' /><br/><br/>

              <label htmlFor='lastname'><b>Last Name</b></label><br/>
              <input type='text' name='lastname' value={lastname} placeholder='Last Name'/><br/><br/>
              
              <label htmlFor='dob'><b>Date of Birth</b></label><br/>
              <input type='date' id='start' name='dob' value={dob} min='1900-01-01' max='2019-01-07'/><br/><br/>

              <select name='country' value={country}>
                <option>--Please choose your country of origin--</option>
                {options}
              </select><br/><br/>

              <select name='dietary' value={dietary}>
                <option>--Please choose your dietary preference--</option>
                <option>Omnivore</option>
                <option>Vegetarian</option>
                <option>Vegan</option>
              </select><br/><br/>

              {this.radioQuestions()}
              {this.checkboxQuestions()}<br/><br/>

              <label htmlFor='reason'><b>Why do you want to be a Mars explorer?</b></label>
              <br/><br/>
              <textarea id='why' type='text' name='reason' value={reason}></textarea>
              <br/>

            </form><br/>

            <button 
              className='submit'
              disabled={
                !(firstname && lastname && dob && country && dietary && reason && breathe && marital && stress_handling && claustrophobic && (educations.high_school || educations.associate || educations.bachelor || educations.master || educations.PhD || otherEdu))
              }
              onClick={this.handleComplete}>Submit
            </button>
          </div>
        </>
      )

    } else if (!formSubmitted) {
      
        return(
          <>
            <div id='afterComplete'>
              <p> Here is your application details:<br/><br/>
                <li>Name:  {firstname} {lastname}</li>
                <li>Date of Birth:  {dob}</li>
                <li>Country of Origin:  {country}</li>
                <li>Dietary Preference:  {dietary}</li>
                <li>Reason to apply:  {reason}</li>
                <li>Breathe underwater for 1 minute:  {breathe}</li>
                <li>Marital status:  {marital}</li>
                <li>Stress_handling: {stress_handling}</li>
                <li>Is claustrophobic: {claustrophobic}</li>
                <li>Eduction: {educationValues.high_school} {educationValues.associate} {educationValues.bachelor} {educationValues.master} {educationValues.PhD} {otherEdu}</li>
              </p><br/>
              
              <p>Please check if all information are correct!</p><br/>

              <button className='confirm' onClick={this.handleSubmit}>Confirm</button>
            </div>
          </>
        )
    } else {
        return(<p id='afterSubmit'>Thank you for your application!</p>)
    }
  }
}

export default MarsForm;