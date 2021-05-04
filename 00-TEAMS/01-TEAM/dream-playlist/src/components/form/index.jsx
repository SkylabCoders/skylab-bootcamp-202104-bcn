import React from 'react';
import './index-form.css';
import Dropdown from './dropdown';
import DROPDOWNDATA from '../../assets/dropdown.mock';

function Form() {
  return (
    <>
      <h1>Form</h1>
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
    </>
  );
}

export default Form;
