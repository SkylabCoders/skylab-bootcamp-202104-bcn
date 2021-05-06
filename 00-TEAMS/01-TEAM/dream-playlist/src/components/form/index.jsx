import React from 'react';
import './index-form.css';
import Dropdown from './Dropdown';
import DROPDOWNDATA from '../../assets/dropdown.mock';

function Form() {
  return (
    <>
      <header>
        <h1>Dreamlist Questions</h1>
      </header>
      <div className="formContainer">
        <form>
          {DROPDOWNDATA.map(({ category, options, defaultOption }) => (
            <>
              <Dropdown category={category} defaultOption={defaultOption} options={options} />
              <br />
              <br />
            </>
          ))}
          <div className="continueSubmit">
            <input type="submit" value="CONTINUE" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
