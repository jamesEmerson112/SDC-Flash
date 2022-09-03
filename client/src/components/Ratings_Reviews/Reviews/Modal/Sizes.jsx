import React from 'react';
import styled from "styled-components";

const Sizes = ({meta, setChar}) => {

  const characteristics = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],

    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],

    Comfort: [ 'Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],

    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],

    Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],

    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  }

  const charChange = (e) => {
    if (e.target.getAttribute('name') === 'Size') {
      const id = meta.Size.id
      const value = Number(e.target.value)
      setChar(id, value)

    } else if ((e.target.getAttribute('name') === 'Width')) {
      const id = meta.Width.id
      const value = Number(e.target.value)
      setChar(id, value)

    } else if ((e.target.getAttribute('name') === 'Comfort')) {
      const id = meta.Comfort.id
      const value = Number(e.target.value)
      setChar(id, value)

    } else if ((e.target.getAttribute('name') === 'Quality')) {
      const id = meta.Quality.id
      const value = Number(e.target.value)
      setChar(id, value)

    } else if ((e.target.getAttribute('name') === 'Length')) {
      const id = meta.Length.id
      const value = Number(e.target.value)
      setChar(id, value)

    } else if ((e.target.getAttribute('name') === 'Fit')) {
      const id = meta.Fit.id
      const value = Number(e.target.value)
      setChar(id, value)
    }
  }

  const selectSize = characteristics.Size.map((data, index) => {
    return (
      <label key={index}><input type='radio' name='Size' value={index+1} onChange={charChange}/>{data}</label>)
  })

  const selectWidth = characteristics.Width.map((data, index) => { return (
      <label key={index}><input type='radio' name='Width' value={index+1} onChange={charChange}/>{data}</label>)
  })

  const selectComfort = characteristics.Comfort.map((data, index) => { return (
    <label key={index}><input type='radio' name='Comfort' value={index+1} onChange={charChange}/>{data}</label>)
  })

  const selectQuality = characteristics.Quality.map((data, index) => { return (
    <label key={index}><input type='radio' name='Quality' value={index+1} onChange={charChange}/>{data}</label>)
  })

  const selectLength = characteristics.Length.map((data, index) => { return (
    <label key={index}><input type='radio' name='Length' value={index+1} onChange={charChange}/>{data}</label>)
  })

  const selectFit = characteristics.Fit.map((data, index) => { return (
    <label key={index}><input type='radio' name='Fit' value={index+1} onChange={charChange}/>{data}</label>)
  })


  return (
    <div>
      {meta.Size &&
        <div>
          <label>Sizes: </label>
          {selectSize}
        </div>}

      {meta.Width &&
        <div>
          <label>Width: </label>
          {selectWidth}
        </div>}


      {meta.Comfort &&
        <div>
          <label>Comfort: </label>
          {selectComfort}
        </div>}

      {meta.Quality &&
        <div>
          <label>Quality: </label>
          {selectQuality}
        </div>}

      {meta.Length &&
        <div>
          <label>Length: </label>
          {selectLength}
        </div>}

      {meta.Fit &&
        <div>
          <label>Fit: </label>
          {selectFit}
        </div>}
    </div>
  );
}

export default Sizes;

const Missing = styled.span`
color: red;
`;

