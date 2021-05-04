import React from 'react';
import './index-form.css';
import Dropdown from './dropdown';
import DROPDOWNDATA from '../../assets/dropdown.mock';

function Form() {
  return (
    <>
      <header>
        <h1>Form</h1>
      </header>
      <div className="formContainer">
        <form>
          {DROPDOWNDATA.map(({ category, options }) => (
            <>
              <Dropdown category={category} options={options} />
              <br />
              <br />
            </>
          ))}
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default Form;
