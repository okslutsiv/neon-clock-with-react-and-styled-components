import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../styles/theme";
const { bgColor, muteColor, glowColor } = theme.palette;
const glowShadow = `0 0 20px ${glowColor}40, inset 0 0 20px ${glowColor}40`;

const NeonClock = ({ time }) => {
  const clockMarks = [
    "XII",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
  ];

  const secondAngle = time.seconds * 6;
  const minuteAngle = time.minutes * 6 + time.seconds * 0.1;
  const hourAngle = (time.hours % 12) * 30 + time.minutes * 0.5;

  return (
    <Display>
      <div>
        {clockMarks.map((mark, index) => (
          <Mark key={index} style={{ transform: `rotate(${index * 30}deg)` }}>
            {mark}
          </Mark>
        ))}
      </div>
      <InnerCircle>
        {Array(60)
          .fill(1)
          .map((tick, index) => (
            <Tick
              key={index}
              style={{ transform: `rotate(${index * 6}deg)` }}
            ></Tick>
          ))}
      </InnerCircle>

      <InnerCircleSm>
        {Array(12)
          .fill(1)
          .map((m, index) => (
            <InnerMark
              style={{ transform: `rotate(${index * 30}deg)` }}
              key={index}
            ></InnerMark>
          ))}
      </InnerCircleSm>
      <SecondHand
        style={{ transform: `rotate(${secondAngle}deg)` }}
      ></SecondHand>
      <MinuteHand
        style={{ transform: `rotate(${minuteAngle}deg)` }}
      ></MinuteHand>
      <HourHand style={{ transform: `rotate(${hourAngle}deg)` }}></HourHand>

      <Center></Center>
    </Display>
  );
};

NeonClock.propTypes = {
  time: PropTypes.object.isRequired,
};
const Display = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: 6px ${glowColor} double;
  position: relative;
  box-shadow: ${glowShadow};
  margin-bottom: 40px;
  &:before {
    content: "";
    position: absolute;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    top: -14px;
    left: -14px;
    border: 4px dotted ${muteColor};
  }
`;

const InnerCircle = styled.div`
  border-radius: 50%;
  border: 1px solid ${glowColor};
  position: absolute;
  width: 200px;
  height: 200px;
  left: 50px;
  top: 50px;
  box-shadow: ${glowShadow};
`;

const InnerCircleSm = styled(InnerCircle)`
  width: 182px;
  height: 182px;
  top: 59px;
  left: 59px;
`;
const Center = styled(InnerCircle)`
  width: 20px;
  height: 20px;
  top: 140px;
  left: 139px;
  z-index: 10;
  background: ${glowColor};
  box-shadow: 0 0 10px ${bgColor};
`;
const Mark = styled.span`
  position: absolute;
  display: inline-block;
  top: 10px;
  left: 125px;
  width: 50px;
  height: 30px;
  font-size: 30px;
  text-align: center;
  transform-origin: 25px 140px;
  color: ${glowColor};
`;
const Tick = styled.span`
  position: absolute;
  display: inline-block;
  top: 1px;
  left: 100px;
  width: 0px;
  outline: 1px ${glowColor} solid;
  height: 8px;
  background: green;
  transform-origin: 0px 100px;
`;
const InnerMark = styled.span`
  position: absolute;
  display: inline-block;
  top: 0px;
  left: 91px;
  width: 0px;
  outline: 1px ${glowColor} solid;
  height: 8px;
  background: green;
  transform-origin: 0px 92px;
`;
const SecondHand = styled.div`
  width: 2px;
  height: 150px;
  position: absolute;
  top: 30px;
  left: 149px;
  background-color: ${glowColor};
  transform-origin: 1px 120px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 0 3px black;
`;

const MinuteHand = styled(SecondHand)`
  width: 4px;
  height: 80px;
  top: 70px;
  left: 148px;
  transform-origin: 2px 80px;
  box-shadow: 0 0 3px black;
`;
const HourHand = styled(SecondHand)`
  width: 10px;
  height: 50px;
  top: 100px;
  left: 145px;
  transform-origin: 6px 52px;
  box-shadow: 0 0 3px black;
`;

export default NeonClock;
