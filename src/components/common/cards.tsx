import React, { useState } from "react";
import { votes } from "../../data.json";
import Thumb from "./thumbs";

const Cards = () => {
  const [poll, setPoll] = React.useState(votes);
  const handleVote = (value: string, item: number) => {
    const newData: any = [...poll];
    newData[item].votes[value] = newData[item].votes[value] + 1;
    setPoll(newData);
  };
  return (
    <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10 offset-md-1 offset-lg-1 offset-xl-1 offset-xxl-1 mt-4 cards">
      <div className="col-12">
        <p className="title-primary mb-2">Votes</p>
      </div>
      <div className="d-flex flex-wrap justify-content-between col-12">
        {poll &&
          poll.length &&
          poll.map((item, index) => (
            <Card item={index} onClick={handleVote} {...item} />
          ))}
      </div>
    </div>
  );
};

const Card = (props: ICard) => {
  const result = (value: number, total: number) =>
    Math.round((value * 100) / total);
  const total = props.votes.favor + props.votes.against;
  const [selected, setSelected] = useState(props.votes.selected || "");
  const [preSelected, setPreSelected] = useState(props.votes.selected || "");
  const [confirmSelection, setConfirmSelection] = useState(
    !!props.votes.selected
  );
  const textBtnVote = confirmSelection ? "Vote again" : "Vote now";
  const thumbIcon = preSelected === "favor" ? "up" : "down";
  const handleVote = () => {
    if (preSelected) {
      props.onClick(preSelected, props.item);
      setSelected(preSelected);
      setConfirmSelection(!confirmSelection);
    }
  };
  const handleVoteAgain = () => {
    setConfirmSelection(!confirmSelection);
    setPreSelected("");
    setSelected("");
  };

  const handleClick = confirmSelection ? handleVoteAgain : handleVote;

  return (
    <div
      key={props.name}
      className={`col-sm-12 col-md-5 card ${
        props.item % 2 > 0 ? "offset-md-1" : ""
      }`}
    >
      <img className="card-image" src={props.image} alt={props.name} />
      <div className="d-flex flex-column justify-content-end card-img-overlay">
        <div className="info">
          <div
            className={`info-title ${
              !preSelected ? "no-icon" : "d-flex flex-row"
            }`}
          >
            {preSelected && (
              <Thumb className="mr-2" thumbOrientation={thumbIcon} />
            )}
            <span>{props.name}</span>
          </div>
          <div className="info-time">
            <span className="info-release">{props.release}</span>
            {` ago in ${props.section}`}
          </div>
          <div className="info-description">{props.description}</div>
          <div className="d-flex flex-row buttons">
            {!selected && (
              <>
                <Thumb
                  className={preSelected === "favor" ? "selected" : ""}
                  thumbOrientation="up"
                  onClick={() => setPreSelected("favor")}
                />
                <Thumb
                  className={preSelected === "against" ? "selected" : ""}
                  thumbOrientation="down"
                  onClick={() => setPreSelected("against")}
                />
              </>
            )}
            <button className="vote-now" onClick={handleClick}>
              {textBtnVote}
            </button>
          </div>
        </div>
        <div className="d-flex flex-row results">
          <Result value={result(props.votes.favor, total)} type="favor" />
          <Result value={result(props.votes.against, total)} type="against" />
        </div>
      </div>
    </div>
  );
};

const Result = ({ value = 0, type = "" }) => {
  const thumb = type === "favor" ? "up" : "down";
  const size = value < 10 ? 10 : value > 90 ? 90 : value;
  return (
    <div className={`result ${type} wi-${size}`}>
      <span className={`icon rot rot-thumbs-${thumb}`} />
      <span className="value">{`${value}%`}</span>
    </div>
  );
};

interface ICard {
  name: string;
  release: string;
  section: string;
  description: string;
  image: string;
  votes: IVotes;
  onClick: (value: string, index: number) => void;
  item: number;
}

interface IVotes {
  favor: number;
  against: number;
  selected?: string;
}

export default Cards;
