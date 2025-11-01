import { BeatLoader } from "react-spinners";

import type { CSSProperties } from "react";

const override: CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 9999,
  display: "block",
};

const Loading = () => {
  return (
    <BeatLoader
      color="#212121"
      cssOverride={override}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loading;
