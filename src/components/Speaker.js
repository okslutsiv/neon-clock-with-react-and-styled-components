import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme } from "../styles/theme";

const { muteColor, glowColor } = theme.palette;
const glowShadow = `0 0 10px ${glowColor}40, inset 0 0 10px ${glowColor}40`;

const Speaker = ({ switchSpeaker, activeSpeaker, time, timeText }) => {
  const shouldSpeak =
    activeSpeaker && time.seconds === 0 && time.minutes % 15 === 0;
  const talk = text => {
    const synth = window.speechSynthesis;
    const rate = 1.1;
    const pitch = 0.8;
    const voice = synth.getVoices().filter(v => v.lang === "en-GB")[0];
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.pitch = pitch;
    utterance.rate = rate;
    synth.speak(utterance);
  };
  useEffect(() => {
    shouldSpeak && talk(timeText);
  }, [shouldSpeak, timeText]);

  return (
    <Switcher>
      <SvgIcon viewBox="0 0 60 60">
        <g>
          <path
            d="M26.894,7.358c-0.551,0-1.097,0.153-1.579,0.444c-0.046,0.027-0.09,0.059-0.13,0.093L11.634,19.358H1c-0.553,0-1,0.447-1,1
		v19c0,0.266,0.105,0.52,0.293,0.707S0.734,40.358,1,40.358l10.61-0.005l13.543,12.44c0.05,0.046,0.104,0.086,0.161,0.12
		c0.482,0.291,1.028,0.444,1.579,0.444c1.713,0,3.106-1.416,3.106-3.156V10.514C30,8.774,28.606,7.358,26.894,7.358z M13,38.358
		c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4c0-0.553,0.447-1,1-1s1,0.447,1,1V38.358z M13,25.358c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4
		c0-0.553,0.447-1,1-1s1,0.447,1,1V25.358z"
          />
          <path
            d="M52.026,29.858c0-8.347-5.316-15.76-13.229-18.447c-0.522-0.177-1.091,0.103-1.269,0.626
		c-0.177,0.522,0.103,1.091,0.626,1.269c7.101,2.411,11.872,9.063,11.872,16.553c0,7.483-4.762,14.136-11.849,16.554
		c-0.522,0.178-0.802,0.746-0.623,1.27c0.142,0.415,0.53,0.677,0.946,0.677c0.107,0,0.216-0.017,0.323-0.054
		C46.721,45.611,52.026,38.198,52.026,29.858z"
          />
          <path
            d="M44.453,6.374c-0.508-0.213-1.095,0.021-1.312,0.53C42.926,7.413,43.163,8,43.672,8.216C52.376,11.909,58,20.405,58,29.858
		c0,9.777-5.894,18.38-15.015,21.914c-0.515,0.2-0.771,0.779-0.571,1.294c0.153,0.396,0.532,0.639,0.933,0.639
		c0.12,0,0.242-0.021,0.361-0.067C53.605,49.801,60,40.467,60,29.858C60,19.6,53.897,10.382,44.453,6.374z"
          />
          <path
            d="M43.026,29.858c0-5.972-4.009-11.302-9.749-12.962c-0.53-0.151-1.084,0.152-1.238,0.684
		c-0.153,0.53,0.152,1.085,0.684,1.238c4.889,1.413,8.304,5.953,8.304,11.04s-3.415,9.627-8.304,11.04
		c-0.531,0.153-0.837,0.708-0.684,1.238c0.127,0.438,0.526,0.723,0.961,0.723c0.092,0,0.185-0.013,0.277-0.039
		C39.018,41.159,43.026,35.829,43.026,29.858z"
          />
        </g>
      </SvgIcon>
      <Btn
        onClick={switchSpeaker}
        className={activeSpeaker ? "active" : ""}
        title={
          activeSpeaker ? "mute speaker" : "tell me the time every 15 minutes"
        }
      >
        <div style={{ right: activeSpeaker ? "-2px" : "22px" }}></div>
      </Btn>
    </Switcher>
  );
};

Speaker.propTypes = {
  activeSpeaker: PropTypes.bool.isRequired,
  switchSpeaker: PropTypes.func.isRequired,
};

const SvgIcon = styled.svg`
  height: 24px;
  width: 24px;
  fill: ${glowColor};
  margin-right: 16px;
  filter: drop-shadow(0 0 2px ${glowColor});
`;

const Switcher = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    top: 16px;
    right: 16px;
  }
`;

const Btn = styled.button`
  width: 50px;
  height: 26px;
  border: 2px solid ${glowColor}aa;
  border-radius: 15px;
  background: transparent;
  outline: none;
  cursor: pointer;
  color: ${muteColor};
  box-shadow: ${glowShadow};
  transition: all 0.3s;
  &.active {
    color: ${glowColor};
  }

  & div {
    width: 28px;
    height: 28px;
    position: absolute;
    bottom: -1px;
    border-radius: 15px;
    background-color: currentColor;
    box-shadow: 0 0 3px black;
  }
`;

export default Speaker;
