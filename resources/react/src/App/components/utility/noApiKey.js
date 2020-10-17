import React from "react";
import HelperText from "./styles/NoApiKey.style";


export default ({ width = "100%", height = "40vh" }) => (
  <HelperText className="isoHelperText" style={{ width, height }}>
    <img alt="#" src={'/image/NoAPIKey.svg'} />
    <h3>Please Enter Your API Key in the `src/settings/index.js`</h3>
  </HelperText>
);
