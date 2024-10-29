import React from "react";

import IsraelRD, { IsraelRDProps } from "../israelrd";

function Example(props: IsraelRDProps) {
  return (
    <IsraelRD
      checked={props.checked}
      onChange={props.onChange}
    />
  );
}

export default Example;