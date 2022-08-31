import React, {useState} from 'react';
import Ratings from './Ratings.jsx'
import Sizes from './Sizes.jsx'
import Upload from './Upload.jsx'
import styled from "styled-components";

const ReviewModal = ({meta, open, close}) => {
  const [missingReq, setMissingReq] = useState(false)
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(null)

  const [recc, setRecc] = useState(null)

  const [characteristics, setCharacteristics] = useState({
    Size: null,
    Width: null,
    Comfort: null,
    Quality: null,
    Length: null,
    Fit: null
  })

  const [size, setSize] = useState(false)
  const [width, setWidth] = useState(false)
  const [comfort, setComfort] = useState(false)
  const [quality, setQuality] = useState(false)
  const [length, setLength] = useState(false)
  const [fit, setFit] = useState(false)

  const selectCharacteristic = (char, value) => {
    if (char === 'Size') {
      setCharacteristics({...characteristics, Size: value})
      setSize(true)

    } else if (char === 'Width') {
      setCharacteristics({...characteristics, Width: value})
      setWidth(true)

    } else if (char === 'Comfort') {
      setCharacteristics({...characteristics, Comfort: value})
      setComfort(true)

    } else if (char === 'Quality') {
      setCharacteristics({...characteristics, Quality: value})
      setQuality(true)

    } else if (char === 'Length') {
      setCharacteristics({...characteristics, Length: value})
      setLength(true)

    } else if (char === 'Fit') {
      setCharacteristics({...characteristics, Fit: value})
      setFit(true)
    }
  }

  const [summary, setSummary] = useState('')
  const [summRemain, setSummRemain] = useState(60)
  const [body, setBody] = useState('')
  const [bodyRemain, setBodyRemain] = useState(50)

  const [photos, setPhotos] = useState([])

  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')

  const summaryText = (e) => {
    setSummary(e.target.value)
    setSummRemain(60 - e.target.value.length)
  }

  const bodyText = (e) => {
    setBody(e.target.value)
    setBodyRemain(50 - e.target.value.length)
  }

  const nicknameText = (e) => {
    setNickname(e.target.value)
  }

  const emailText = (e) => {
    setEmail(e.target.value)
  }

  const checkForm = (e) => {
    e.preventDefault()
    if (rating === 0 || recc === null || email.indexOf('@') < 0 || email.indexOf('.com') < 0) {
      console.log('MISSING DEETS')
      return setMissingReq(true)

    } else if (size === true && characteristics.Size === null || width === true && characteristics.Width === null ||
      comfort === true && characteristics.Comfort === null || quality === true && characteristics.Quality === null ||
      length === true && characteristics.Length === null || fit === true && characteristics.Fit === null) {
      console.log('MISSING DEETS')
      return setMissingReq(true)

    } else {
      console.log('Rating value: ', rating)
      console.log('Recc check: ', recc)
      console.log('Characteristics values: ', characteristics)
      console.log('CHARS: ', size, width, comfort, quality, length, fit)
      console.log('Summary value: ', summary)
      console.log('Body value: ', body)
      console.log('Photos urls: ', photos)
      console.log('Nickname value: ', nickname)
      console.log('Email value: ', email)
      postData()
    }
  }

  const postData = () => {
    const data = {}
    console.log('INSIDE POST: ', data)
    setMissingReq(false)
    setRating(0)
    setRecc(null)
    setCharacteristics({
      Size: null,
      Width: null,
      Comfort: null,
      Quality: null,
      Length: null,
      Fit: null
    })
    setSize(false)
    setWidth(false)
    setComfort(false)
    setQuality(false)
    setLength(false)
    setFit(false)
    setSummary('')
    setBody('')
    setPhotos([])
    setNickname('')
    setEmail('')
    close()
  }

  if (!open) return null;

  return (
    <Overlay>
      <ModalForm>
        {missingReq && <Missing>Areas marked with * are potentially filled out incorrectly or need to be filled out!</Missing>}
        <button onClick={close}>X</button>
        <form onSubmit={checkForm}>
          <Ratings rating={rating} hover={hover} setHover={setHover} setRating={setRating} missing={missingReq}/>


          <label>Recommend: {missingReq && <Missing>* Required</Missing>}
            <label><input type='radio' name='recc' value='Yes' onChange={() => setRecc(true)}/>Yes:</label>
            <label><input type='radio' name='recc' value='No' onChange={() => setRecc(false)}/>No:</label>
          </label>

          <Sizes meta={meta} setChar={selectCharacteristic} missing={missingReq}/>

          <label>Summary:
            <input type='text' placeholder='Example: Best purchase ever!' value={summary} required
            maxLength={60} onChange={summaryText}/>
            <p>{summRemain} Characters remaining</p>
          </label>

          <label>Body:
            <input type='text' placeholder='Why did you like this product or not?' value={body} required
            minLength={10} maxLength={1000} onChange={bodyText}/>
            {body.length < 50 ? <p>Minimum required characters left: {bodyRemain}</p> : <p>Minimum reached</p>}
          </label>

          <label>Upload Image: </label>
          <Upload upload={setPhotos}/>
          <br/>

          <label>Set Nickname:
            <input type='text' placeholder='Example: jackson11!' value={nickname} required maxLength={60} onChange={nicknameText}/>
          </label>
          <p>For authentication reasons you will not be emailed</p>

          <label>Set Email: {missingReq && <Missing>* Invalid email format</Missing>}
            <input type='text' placeholder='jackson11@email.com' value={email} required maxLength={60}  onChange={emailText}/>
          </label>
          <br/>
          <input type='submit' value='Post Review'/>
        </form>
      </ModalForm>
    </Overlay>
  );
}

export default ReviewModal;

const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(128, 128, 128, .7);
z-index: 1000;
`;

const ModalForm = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #F4F0DB;
padding: 50px;
`;

const Missing = styled.span`
color: red;
`;

