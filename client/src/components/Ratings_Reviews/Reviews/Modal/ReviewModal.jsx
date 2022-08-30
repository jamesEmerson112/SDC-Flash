import React, {useState} from 'react';
import Ratings from './Ratings.jsx'
import Sizes from './Sizes.jsx'
import Upload from './Upload.jsx'
import styled from "styled-components";

const ReviewModal = ({meta, open, close}) => {
console.log(meta)

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(null)

  const [recc, setRecc] = useState(false)

  const [characteristics, setCharacteristics] = useState({
    Size: '',
    Width: '',
    Comfort: '',
    Quality: '',
    Length: '',
    Fit: ''
  })

  const [summary, setSummary] = useState('')
  const [summRemain, setSummRemain] = useState(60)
  const [body, setBody] = useState('')
  const [bodyRemain, setBodyRemain] = useState(50)

  const [photos, setPhotos] = useState([])
  console.log('THIS IS PHOTOS: ', photos)

  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')


  const selectRating = (index) => {
    setRating(index)
  }

  const selectCharacteristic = (char, value) => {
    if (char === 'Size') {
      setCharacteristics({...characteristics, Size: value})
    } else if (char === 'Width') {
      setCharacteristics({...characteristics, Width: value})
    } else if (char === 'Comfort') {
      setCharacteristics({...characteristics, Comfort: value})
    } else if (char === 'Quality') {
      setCharacteristics({...characteristics, Quality: value})
    } else if (char === 'Length') {
      setCharacteristics({...characteristics, Length: value})
    } else if (char === 'Fit') {
      setCharacteristics({...characteristics, Fit: value})
    }
  }

  const summaryText = (e) => {
    setSummary(e.target.value)
    setSummRemain(60 - e.target.value.length)
  }

  const bodyText = (e) => {
    setBody(e.target.value)
    setBodyRemain(50 - e.target.value.length)
  }

  const uploadPhoto = (urls) => {
    setPhotos(urls)
  }

  const nicknameText = (e) => {
    setNickname(e.target.value)
  }

  const emailText = (e) => {
    setEmail(e.target.value)
  }

  const submitReview = (e) => {
    e.preventDefault()
    console.log('Rating value: ', rating)
    console.log('Summary value: ', summary)
    console.log('Body value: ', body)
    console.log('Recc check: ', recc)
    close()
  }

  if (!open) return null;

  return (
    <Overlay>
      <ModalForm>
        <button onClick={close}>X</button>
        <form onSubmit={submitReview}>
          <Ratings rating={rating} hover={hover} setHover={setHover} selectRating={selectRating}/>

          <label>Recommend:
            <label><input type='radio' name='recc' value='Yes' onChange={() => setRecc(true)}/>Yes:</label>
            <label><input type='radio' name='recc' value='No' onChange={() => setRecc(false)}/>No:</label>
          </label>

          <Sizes meta={meta} setChar={selectCharacteristic}/>

          <label>Summary:
            <input type='text' placeholder='Example: Best purchase ever!' value={summary}
            required maxLength={60} onChange={summaryText}/>
            <p>{summRemain} Characters remaining</p>
          </label>

          <label>Body:
            <input type='text' placeholder='Why did you like this product or not?' value={body} required
            minLength={50} maxLength={1000} onChange={bodyText}/>
            {body.length < 50 ? <p>Minimum required characters left: {bodyRemain}</p> : <p>Minimum reached</p>}
          </label>

          <label>Upload Image: </label>
          {<Upload upload={uploadPhoto}/>}
          <br/>

          <label>Set Nickname:
            <input type='text' placeholder='Example: jackson11!' required maxLength={60} value={nickname} onChange={nicknameText}/>
          </label>
          <p>For authentication reasons you will not be emailed</p>

          <label>Set Email:
            <input type='text' placeholder='jackson11@email.com' required maxLength={60} value={email} onChange={emailText}/>
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
z-index: 3;
`;

