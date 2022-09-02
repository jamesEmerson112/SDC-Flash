import React from 'react';
import styled from "styled-components";

const Characteristics = ({meta}) => {

  if (meta && Object.keys(meta).length > 0) {

    const widthSize = Math.round(meta.Size?.value / 5 * 100)
    const widthWidth = Math.round(meta.Width?.value / 5 * 100)
    const widthComfort = Math.round(meta.Comfort?.value / 5 * 100)
    const widthQuality = Math.round(meta.Quality?.value / 5 * 100)
    const widthLength = Math.round(meta.Length?.value / 5 * 100)
    const widthFit = Math.round(meta.Fit?.value / 5 * 100)

    console.log(widthComfort, meta.Comfort.value)
    return (
    <div>
      {meta.Size &&
      <div>
        <h4>Size</h4>
        <BarContainer>
          <BarFiller/><BarFiller/><BarFiller/>
        </BarContainer>
        <EmojiContainer>
          <Emoji style={{width: widthSize+'%'}}>&#128525;</Emoji>
        </EmojiContainer>
        <Comfort>
          <Quality>Too Small</Quality>
          <Quality>Perfect</Quality>
          <Quality>Too Large</Quality>
        </Comfort>
      </div>}

      {meta.Width &&
      <div>
        <h4>Width</h4>
        <BarContainer>
          <BarFiller/><BarFiller/><BarFiller/>
        </BarContainer>
        <EmojiContainer>
          <Emoji style={{width: widthWidth+'%'}}>&#128525;</Emoji>
        </EmojiContainer>
        <Comfort>
          <Quality>Too Narrow</Quality>
          <Quality>Perfect</Quality>
          <Quality>Too Wide</Quality>
        </Comfort>
      </div>}

      {meta.Comfort &&
      <div>
        <h4>Comfort</h4>
        <BarContainer>
          <BarFiller/><BarFiller/><BarFiller/>
        </BarContainer>
        <EmojiContainer>
          <Emoji style={{width: widthComfort+'%'}}>&#128525;</Emoji>
        </EmojiContainer>
        <Comfort>
          <Quality>Poor</Quality>
          <Quality>Perfect</Quality>
        </Comfort>
      </div>}

      {meta.Quality &&
      <div>
        <h4>Quality</h4>
        <BarContainer>
          <BarFiller/><BarFiller/><BarFiller/>
        </BarContainer>
        <EmojiContainer>
          <Emoji style={{width: widthQuality+'%'}}>&#128525;</Emoji>
        </EmojiContainer>
        <Comfort>
          <Quality>Poor</Quality>
          <Quality>Perfect</Quality>
        </Comfort>
      </div>}

      {meta.Length &&
      <div>
        <h4>Length</h4>
        <BarContainer>
          <BarFiller/><BarFiller/><BarFiller/>
        </BarContainer>
        <EmojiContainer>
          <Emoji style={{width: widthLength+'%'}}>&#128525;</Emoji>
        </EmojiContainer>
        <Comfort>
          <Quality>Too Short</Quality>
          <Quality>Perfect</Quality>
          <Quality>Too Long</Quality>
        </Comfort>
      </div>}

      {meta.Fit &&
      <div>
        <h4>Fit</h4>
        <BarContainer>
          <BarFiller/><BarFiller/><BarFiller/>
        </BarContainer>
        <EmojiContainer>
          <Emoji style={{width: widthFit+'%'}}>&#128525;</Emoji>
        </EmojiContainer>
        <Comfort>
          <Quality>Too Tight</Quality>
          <Quality>Perfect</Quality>
          <Quality>Too Long</Quality>
        </Comfort>
      </div>}
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

const Comfort = styled.div`
display: flex;
justify-content: space-between;
width: 270px;
`;

const Quality = styled.p`
position: relative
`;