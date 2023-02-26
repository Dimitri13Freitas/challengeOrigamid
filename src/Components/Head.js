import React from "react";

export const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title ? "Ranek | " + props.title : "Ranek";
  }, [props]);
  return <></>;
};
