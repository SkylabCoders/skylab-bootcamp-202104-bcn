import React from 'react';
import './index-form.css';

function Form() {
  return (
    <>
      <h1>Form</h1>
      <div>
        <form>
          <label htmlFor="genre">
            genre
            <select name="genre" selected="selected">
              <option disabled selected value> -- select an option -- </option>
              <option value="rock">rock</option>
              <option value="pop">pop</option>
              <option value="classical">classical</option>
              <option value="electronic">electronic</option>
            </select>
          </label>
          <br />
          <br />
          <label htmlFor="energy">
            energy
            <select name="energy">
              <option disabled selected value> -- select an option -- </option>
              <option value="very-slow">very-slow</option>
              <option value="slow">slow</option>
              <option value="medium">medium</option>
              <option value="fast">fast</option>
            </select>
          </label>
          <br />
          <br />
          <label htmlFor="release-date">
            release-date
            <select name="release-date">
              <option disabled selected value> -- select an option -- </option>
              <option value="before 1950">before 1950</option>
              <option value="1950-1975">1950-1975</option>
              <option value="1975-2000">1975-2000</option>
              <option value="2000-2021">2000-2021</option>
            </select>
          </label>
          <br />
          <br />
          <label htmlFor="instrumental">
            instrumental
            <select name="instrumental">
              <option disabled selected value> -- select an option -- </option>
              <option value="guitar">guitar</option>
              <option value="battery">battery</option>
              <option value="voice">voice</option>
              <option value="flute">flute</option>
            </select>
          </label>
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
