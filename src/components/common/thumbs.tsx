import React from "react";

interface IThumb {
  className?: string;
  thumbOrientation: string;
  opacity?: boolean;
  onClick?: () => void;
}

const Thumb = (props: IThumb) => {
  const { className = "", thumbOrientation = "up", opacity = false } = props;
  const handleClick = () => {
    props.onClick && props.onClick();
  };
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center thumb thumb-${thumbOrientation} ${
        opacity && "opacity"
      } ${className}`}
      role="button"
      onClick={handleClick}
    >
      <span className={`rot rot-thumbs-${thumbOrientation}`} />
    </div>
  );
};

export default Thumb;
