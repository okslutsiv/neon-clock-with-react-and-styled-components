import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../styles/theme";

const { muteColor, glowColor } = theme.palette;
const fontShadow = `0 0 1px ${glowColor}`;

const TimeReadout = ({ phrases, highligts }) => {
  return (
    <Phrases>
      {phrases.map((word, index) => (
        <Phrase key={index} className={highligts[index] ? "glow" : ""}>
          {word}
        </Phrase>
      ))}
    </Phrases>
  );
};
TimeReadout.propTypes = {
  phrases: PropTypes.array.isRequired,
  highligts: PropTypes.array.isRequired,
};
const Phrases = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  word-spacing: 6px;
  max-width: 500px;
  line-height: 2;
`;
const Phrase = styled.span`
  display: inline-block;
  margin-left: 24px;
  color: ${muteColor};
  opacity: 0.6;
  &.glow {
    color: ${glowColor};
    text-shadow: ${fontShadow};
    opacity: 1;
  }
`;
export default TimeReadout;
