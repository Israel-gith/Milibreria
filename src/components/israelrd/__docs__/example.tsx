import React from "react";
import IsraelRD, { IsraelRDProps } from "../israelrd";

function Example(props: IsraelRDProps) {
  return (
    <IsraelRD
      avatar={props.avatar}
      altAvatar={props.altAvatar}
      title={props.title}
      date={props.date}
      image={props.image}
      altImage={props.altImage}
      description={props.description}
      likes={props.likes}
    />
  );
}

export default Example;