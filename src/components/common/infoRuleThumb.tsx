import React from "react";

const InfoRuleThumb = () => {
  const [visible, setVisible] = React.useState(true);
  const onDismiss = () => setVisible(false);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="d-flex flex-row col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10 offset-md-1 offset-lg-1 offset-xl-1 offset-xxl-1 p-2 justify-content-around info-rule-thumb"
      color="light"
    >
      <div className="d-flex flex-column info-rule-title">
        <p className="title-secondary">Speak out. Be heard</p>
        <p className="title-primary">Be counted</p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center info-rule-description">
        Rule of Thumb is a crowd sourced court of public opinio where anyone and
        every one can speak out and speak freely. It's easy: You share your
        opinion we analize and put the data in a public report.
      </div>
      <button className="close">X</button>
    </div>
  );
};

export default InfoRuleThumb;
