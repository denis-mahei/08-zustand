import { BeatLoader } from "react-spinners";
import { useState } from "react";
import type { CSSProperties } from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#212121",
};

const Loader = () => {
  const [color] = useState("#ffffff");
  return (
    <>
      <BeatLoader
        color={color}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Loader;
