import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa';
import styled from "styled-components";

const ReviewModal = ({open, close}) => {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(null)
  const [overallRating, setOverallRating] = useState(null)
  const [recc, setRecc] = useState(false)
  const [summary, setSummary] = useState('')
  const [summRemain, setSummRemain] = useState(60)
  const [body, setBody] = useState('')
  const [bodyRemain, setBodyRemain] = useState(50)

  const overallRatings = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great'
  }

  const selectRating = (index) => {
    setRating(index)
    setOverallRating(overallRatings[index.toString()])
  }

  const starRating = [...Array(5)].map((star, index) => {
    index += 1
    return (
      <label key={index}>
        <HideRadio type='radio' onClick={() => selectRating(index)}/>
        <FaStar color={index <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
        onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(null)}/>
      </label>
    )
  })

  const submitReview = (e) => {
    e.preventDefault()
    console.log('Rating value: ', rating)
    console.log('Summary value: ', summary)
    console.log('Body value: ', body)
    console.log('Recc check: ', recc)
    close()
  }

  const summaryText = (e) => {
    setSummary(e.target.value)
    setSummRemain(60 - e.target.value.length)
  }

  const bodyText = (e) => {
    setBody(e.target.value)
    setBodyRemain(50 - e.target.value.length)
  }

  if (!open) return null;

  return (
    <Overlay>
      <ModalForm>
        <button onClick={close}>X</button>
        <form onSubmit={submitReview}>
          {starRating}<label>{overallRating}</label>
          <br/>

          <label>Recommend:
            <label>Yes:</label>
            <input type='radio' name='recc' value='Yes' onChange={() => setRecc(true)}/>
            <label>No:</label>
            <input type='radio' name='recc' value='No' onChange={() => setRecc(false)}/>
          </label>
          <br/>

          <label>Size: NOT FINISHED!</label>
          <br/>

          <label>Summary:
            <input type='text' placeholder='Example: Best purchase ever!' value={summary}
            required maxLength={60} onChange={summaryText}/>
            <p>{summRemain} Characters remaining</p>
          </label>
          <br/>

          <label>Body:
            <input type='text' placeholder='Why did you like this product or not?' value={body} required
            minLength={50} maxLength={1000} onChange={bodyText}/>
            {body.length < 50 ? <p>Minimum required characters left: {bodyRemain}</p> : <p>Minimum reached</p>}
          </label>
          <br/>

          <label>Allow add photos later</label>
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

const HideRadio = styled.input`
display: none;
`;