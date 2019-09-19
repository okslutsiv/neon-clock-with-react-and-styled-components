import React, { useState } from "react";
import useClock from "./utils/useClock";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { phrases, getHighlights, getReadoutConfig } from "./utils/configs";
import NeonClock from "./components/NeonClock";
import TimeReadout from "./components/TimeReadout";
import Speaker from "./components/Speaker";

function App() {
  const [activeSpeaker, setActiveSpeaker] = useState(true);
  const time = useClock();
  const config = getReadoutConfig(time);
  const highligts = getHighlights(config);
  const timeText = phrases
    .filter((w, index) => highligts[index] === true)
    .join(" ");
  const switchSpeaker = () => {
    setActiveSpeaker(!activeSpeaker);
  };
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Application>
        <Speaker
          switchSpeaker={switchSpeaker}
          activeSpeaker={activeSpeaker}
          time={time}
          timeText={timeText}
        ></Speaker>
        <NeonClock time={time}></NeonClock>
        <TimeReadout highligts={highligts} phrases={phrases}></TimeReadout>
      </Application>
    </>
  );
}
const Application = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
`;
export default App;
