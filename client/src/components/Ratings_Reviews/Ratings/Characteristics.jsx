import React from 'react';
import styled from "styled-components";
import _ from 'underscore'

const Characteristics = ({meta}) => {
  var char = meta

  if (char && Object.keys(char).length > 0) {
    _.map(char, (value, key) => {
      console.log(value, key)
    })
    const widthComfort = Math.round(meta.Comfort.value / 5 * 100)
    console.log(widthComfort, meta.Comfort.value)
    return (
    <div>
      <BarContainer>
        <BarFiller/><BarFiller/><BarFiller/>
      </BarContainer>
      <EmojiContainer>
        <Emoji style={{width: widthComfort+'%'}}>&#128525;</Emoji>
      </EmojiContainer>
    </div>

    );
  }
}

export default Characteristics;

const BarContainer = styled.div`
position: absolute;
display: flex;
`;

const BarFiller = styled.span`
width: 83px;
height: 15px;
margin: 3px;
border-radius: 7px;
background-color: #ddd;

`;

const EmojiContainer = styled.div`
position: absolute;
display: flex;
justify-content: space-between;
width: 270px;
`;

const Emoji = styled.span`
text-align: right;
font-size: 15px
position: relative;
`;