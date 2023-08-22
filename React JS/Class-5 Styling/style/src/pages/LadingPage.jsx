import React from "react";
import { css } from "@emotion/react";
const LadingPage = () => {
  const heading2 = css`
    color: green;
  `;
  //   const styles = css`
  //   background-color: blue;
  //   color: white;
  // `;
  return (
    <div>
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsam
        assumenda ipsum labore quae maxime et cum veniam repellendus corrupti
        consectetur, doloribus nulla odio mollitia? Fuga aliquid porro nisi
        sunt!
      </p>
      <h1>hello world</h1>
      <h2 css={heading2}>Heading 2</h2>
    </div>
  );
};

export default LadingPage;
