import React from 'react';
import './index-form.css';
import Dropdown from './dropdown';
import DROPDOWNDATA from '../../assets/dropdown.mock';

function Form() {
  return (
    <>
      <h1>Form</h1>
      <div>
        <form>
          <Dropdown filter={DROPDOWNDATA[0]} />
          <br />
          <br />
          <Dropdown filter={DROPDOWNDATA[1]} />
          <br />
          <br />
          <Dropdown filter={DROPDOWNDATA[2]} />
          <br />
          <br />
          <Dropdown filter={DROPDOWNDATA[3]} />
          <br />
          <br />
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
