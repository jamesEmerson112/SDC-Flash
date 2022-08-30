import React, {useState} from 'react';

const Sizes = ({meta}) => {
  const [size, setSize] = useState(0)
  const [width, setWidth] = useState(0)
  const [comfort, setComfort] = useState(0)
  const [quality, setQuality] = useState(0)
  const [leng, setLeng] = useState(0)
  const [fit, setFit] = useState(0)

  const characteristics = {
    Size: ['A size too small', '½ a size too small', 'Perfect','½ a size too big', 'A size too wide'],

    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],

    Comfort: [ 'Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],

    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],

    Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],

    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  }

  const selectSize = characteristics.Size.map((data, index) => {
    return (
      <label key={index}><input type='radio' name='Size' value={index+1}/>{data}</label>)
  })

  const selectWidth = characteristics.Width.map((data, index) => { return (
      <label key={index}><input type='radio' name='Width' value={index+1}/>{data}</label>)
  })

  const selectComfort = characteristics.Comfort.map((data, index) => { return (
    <label key={index}><input type='radio' name='Comfort' value={index+1}/>{data}</label>)
  })

  const selectQuality = characteristics.Quality.map((data, index) => { return (
    <label key={index}><input type='radio' name='Quality' value={index+1}/>{data}</label>)
  })

  const selectLength = characteristics.Length.map((data, index) => { return (
    <label key={index}><input type='radio' name='Length' value={index+1}/>{data}</label>)
  })

  const selectFit = characteristics.Fit.map((data, index) => { return (
    <label key={index}><input type='radio' name='Fit' value={index+1}/>{data}</label>)
  })


  return (
    <div>
      <label>Sizes:</label>
      <div>
        {selectSize}
      </div>

      <label>Width:</label>
      <div>
        {selectWidth}
      </div>

      <label>Comfort:</label>
      <div>
        {selectComfort}
      </div>

      <label>Quality:</label>
      <div>
        {selectQuality}
      </div>

      <label>Length:</label>
      <div>
        {selectLength}
      </div>

      <label>Fit:</label>
      <div>
        {selectFit}
      </div>


    </div>
  );
}

export default Sizes;