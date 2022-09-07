import React from "react";
import styled from "styled-components";

const Characteristics = ({ meta }) => {

  if (meta && Object.keys(meta).length > 0) {
    const widthSize = Math.round((meta.Size?.value / 5) * 100);
    const widthWidth = Math.round((meta.Width?.value / 5) * 100);
    const widthComfort = Math.round((meta.Comfort?.value / 5) * 100);
    const widthQuality = Math.round((meta.Quality?.value / 5) * 100);
    const widthLength = Math.round((meta.Length?.value / 5) * 100);
    const widthFit = Math.round((meta.Fit?.value / 5) * 100);

    return (
      <Container>
        {meta.Size && meta.Size.value !== null && (
          <div>
            <Char>Size</Char>
            <BarContainer>
              <BarFiller />
              <BarFiller />
              <BarFiller />
            </BarContainer>
            <EmojiContainer>
              {widthSize >= 35 && widthSize <= 70 ? <Emoji style={{ width: widthSize + "%" }}>&#128525;</Emoji>
              : <Emoji style={{ width: widthSize + "%" }}>&#128531;</Emoji>}
            </EmojiContainer>
            <Comfort>
              <Quality>Too Small</Quality>
              <Quality>Perfect</Quality>
              <Quality>Too Large</Quality>
            </Comfort>
          </div>
        )}

        {meta.Width && meta.Width.value !== null && (
          <div>
            <Char>Width</Char>
            <BarContainer>
              <BarFiller />
              <BarFiller />
              <BarFiller />
            </BarContainer>
            <EmojiContainer>
              {widthWidth >= 35 && widthWidth <= 70 ? <Emoji style={{ width: widthWidth + "%" }}>&#128525;</Emoji>
              : <Emoji style={{ width: widthWidth + "%" }}>&#128531;</Emoji>}
            </EmojiContainer>
            <Comfort>
              <Quality>Too Narrow</Quality>
              <Quality>Perfect</Quality>
              <Quality>Too Wide</Quality>
            </Comfort>
          </div>
        )}

        {meta.Comfort && meta.Comfort.value !== null && (
          <div>
            <Char>Comfort</Char>
            <BarContainer>
              <BarFiller />
              <BarFiller />
              <BarFiller />
            </BarContainer>
            <EmojiContainer>
              {widthComfort >= 60 ? <Emoji style={{ width: widthComfort + "%" }}>&#128525;</Emoji>
              : <Emoji style={{ width: widthComfort + "%" }}>&#128531;</Emoji>}
            </EmojiContainer>
            <Comfort>
              <Quality>Poor</Quality>
              <Quality>Perfect</Quality>
            </Comfort>
          </div>
        )}

        {meta.Quality && meta.Quality.value !== null && (
          <div>
            <Char>Quality</Char>
            <BarContainer>
              <BarFiller />
              <BarFiller />
              <BarFiller />
            </BarContainer>
            <EmojiContainer>
              {widthQuality >= 60 ? <Emoji style={{ width: widthQuality + "%" }}>&#128525;</Emoji>
              : <Emoji style={{ width: widthQuality + "%" }}>&#128531;</Emoji>}
            </EmojiContainer>
            <Comfort>
              <Quality>Poor</Quality>
              <Quality>Perfect</Quality>
            </Comfort>
          </div>
        )}

        {meta.Length && meta.Length.value !== null && (
          <div>
            <Char>Length</Char>
            <BarContainer>
              <BarFiller />
              <BarFiller />
              <BarFiller />
            </BarContainer>
            <EmojiContainer>
              {widthLength>= 35 && widthLength<= 70 ? <Emoji style={{ width: widthLength+ "%" }}>&#128525;</Emoji>
              : <Emoji style={{ width: widthLength+ "%" }}>&#128531;</Emoji>}
            </EmojiContainer>
            <Comfort>
              <Quality>Too Short</Quality>
              <Quality>Perfect</Quality>
              <Quality>Too Long</Quality>
            </Comfort>
          </div>
        )}

        {meta.Fit && meta.Fit.value !== null && (
          <div>
            <Char>Fit</Char>
            <BarContainer>
              <BarFiller />
              <BarFiller />
              <BarFiller />
            </BarContainer>
            <EmojiContainer>
              {widthFit >= 35 && widthFit <= 70 ? <Emoji style={{ width: widthFit + "%" }}>&#128525;</Emoji>
              : <Emoji style={{ width: widthFit + "%" }}>&#128531;</Emoji>}
            </EmojiContainer>
            <Comfort>
              <Quality>Too Tight</Quality>
              <Quality>Perfect</Quality>
              <Quality>Too Long</Quality>
            </Comfort>
          </div>
        )}
      </Container>
    );
  }
};

export default Characteristics;

const Container = styled.div`
margin: 10px 0px 5px 0px;
`

const Char = styled.h4`
margin: 0px;
font-style: italic;
`

const BarContainer = styled.div`
position: absolute;
display: flex;
`;

const BarFiller = styled.span`
width: 80px;
height: 15px;
margin: 3px;
margin-left: 0;
border-radius: 7px;
background-color: #ddd;
`;

const EmojiContainer = styled.div`
position: absolute;
display: flex;
width: 255px;
`;

const Emoji = styled.span`
text-align: right;
font-size: 15px
position: relative;
transform: translateY(-4px);
`;

// translate 0 for some screens

const Comfort = styled.div`
display: flex;
justify-content: space-between;
width: 270px;
margin-top: 8px;
& p:last-child {
  margin-right: 25px;
}
`;

const Quality = styled.p`
position: relative;
font-size: 14px;
font-style: italic;
`;
