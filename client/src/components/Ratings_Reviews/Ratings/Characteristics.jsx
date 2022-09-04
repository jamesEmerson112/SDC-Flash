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

    console.log('size: ', widthSize, 'width: ', widthWidth, 'comfort: ', widthComfort)
    console.log('quality: ', widthQuality, 'length: ', widthLength, 'fit: ', widthFit)
    return (
      <div>
        {meta.Size && (
          <div>
            <h4>Size</h4>
            <BarContainer>
              <BarFiller />
              <BarFiller />
              <BarFiller />
            </BarContainer>
            <EmojiContainer>
              {widthSize >= 35 || widthSize <= 70 && <Emoji style={{ width: widthSize + "%" }}>&#128525;</Emoji>}
              {widthSize <  35 || widthSize > 70 && <Emoji style={{ width: widthSize + "%" }}>&#128531;</Emoji>}
            </EmojiContainer>
            <Comfort>
              <Quality>Too Small</Quality>
              <Quality>Perfect</Quality>
              <Quality>Too Large</Quality>
            </Comfort>
          </div>
        )}

        {meta.Width && (
          <div>
            <h4>Width</h4>
            <BarContainer>
              <BarFiller />
              <BarFiller />
              <BarFiller />
            </BarContainer>
            <EmojiContainer>
              {widthWidth >= 35 || widthWidth <= 70 && <Emoji style={{ width: widthWidth + "%" }}>&#128525;</Emoji>}
              {widthWidth <  35 || widthWidth > 70 && <Emoji style={{ width: widthWidth + "%" }}>&#128531;</Emoji>}
            </EmojiContainer>
            <Comfort>
              <Quality>Too Narrow</Quality>
              <Quality>Perfect</Quality>
              <Quality>Too Wide</Quality>
            </Comfort>
          </div>
        )}

        {meta.Comfort && (
          <div>
            <h4>Comfort</h4>
            <BarContainer>
              <BarFiller />
              <BarFiller />
              <BarFiller />
            </BarContainer>
            <EmojiContainer>
              {widthComfort >= 70 && <Emoji style={{ width: widthComfort + "%" }}>&#128525;</Emoji>}
              {widthComfort < 70 && <Emoji style={{ width: widthComfort + "%" }}>&#128531;</Emoji>}
            </EmojiContainer>
            <Comfort>
              <Quality>Poor</Quality>
              <Quality>Perfect</Quality>
            </Comfort>
          </div>
        )}

        {meta.Quality && (
          <div>
            <h4>Quality</h4>
            <BarContainer>
              <BarFiller />
              <BarFiller />
              <BarFiller />
            </BarContainer>
            <EmojiContainer>
              {widthQuality >= 70 && <Emoji style={{ width: widthQuality + "%" }}>&#128525;</Emoji>}
              {widthQuality < 70 && <Emoji style={{ width: widthQuality + "%" }}>&#128531;</Emoji>}
            </EmojiContainer>
            <Comfort>
              <Quality>Poor</Quality>
              <Quality>Perfect</Quality>
            </Comfort>
          </div>
        )}

        {meta.Length && (
          <div>
            <h4>Length</h4>
            <BarContainer>
              <BarFiller />
              <BarFiller />
              <BarFiller />
            </BarContainer>
            <EmojiContainer>
              {widthLength >= 35 || widthLength <= 70 && <Emoji style={{ width: widthLength + "%" }}>&#128525;</Emoji>}
              {widthLength <  35 || widthLength > 70 && <Emoji style={{ width: widthLength + "%" }}>&#128531;</Emoji>}
            </EmojiContainer>
            <Comfort>
              <Quality>Too Short</Quality>
              <Quality>Perfect</Quality>
              <Quality>Too Long</Quality>
            </Comfort>
          </div>
        )}

        {meta.Fit && (
          <div>
            <h4>Fit</h4>
            <BarContainer>
              <BarFiller />
              <BarFiller />
              <BarFiller />
            </BarContainer>
            <EmojiContainer>
              {widthFit >= 35 || widthFit <= 70 && <Emoji style={{ width: widthFit + "%" }}>&#128525;</Emoji>}
              {widthFit <  35 || widthFit > 70 && <Emoji style={{ width: widthFit + "%" }}>&#128531;</Emoji>}
            </EmojiContainer>
            <Comfort>
              <Quality>Too Tight</Quality>
              <Quality>Perfect</Quality>
              <Quality>Too Long</Quality>
            </Comfort>
          </div>
        )}
      </div>
    );
  }
};

export default Characteristics;

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
`;

const Comfort = styled.div`
  display: flex;
  justify-content: space-between;
  width: 270px;
`;

const Quality = styled.p`
  position: relative;
`;
