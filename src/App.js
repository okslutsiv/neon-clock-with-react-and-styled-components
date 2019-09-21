import React, { useState } from "react";
import useClock from "./utils/useClock";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { phrases, getHighlights, getReadoutConfig } from "./utils/configs";
import NeonClock from "./components/NeonClock";
import TimeReadout from "./components/TimeReadout";
import Speaker from "./components/Speaker";
import Github from "./components/Github";

function App() {
  const [activeSpeaker, setActiveSpeaker] = useState(false);
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
        {"speechSynthesis" in window ? (
          <Speaker
            switchSpeaker={switchSpeaker}
            activeSpeaker={activeSpeaker}
            time={time}
            timeText={timeText}
          ></Speaker>
        ) : null}

        <NeonClock time={time}></NeonClock>
        <TimeReadout highligts={highligts} phrases={phrases}></TimeReadout>
        <Github></Github>
      </Application>
    </>
  );
}
const Application = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  min-height: calc(100vh - 32px);
  padding-top: 32px;
`;
export default App;
