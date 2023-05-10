import "./card.css";
import cat from "./img/cat.png";
import React, { useState } from "react";

const Card = (props) => {
  const disabledText = () => {
    return (
      <p className="card__text_after card__text_after.disabled">
        {props.disabledText}
      </p>
    );
  };

  const initialText = () => {
    if (!props.disabled) {
      return (
        <p className="card__text_after">
          Чего сидишь? Порадуй котэ,{" "}
          <a className={`card__text_after_a ${hover ? "hover" : ""}`} href="/">
            купи.
          </a>
        </p>
      );
    } else {
      return (
        <p className="card__text_after card__text_after_disabled">
          {props.disabledText}
        </p>
      );
    }
  };

  const newText = () => {
    return <p className="card__text_after">{props.text}</p>;
  };

  const [selected, setSelected] = useState(false);
  const [hover, setHover] = useState(false);
  const [text, setText] = useState(initialText);

  const handleHover = () => {
    if (!props.disabled) {
      setHover(!hover);
    }
  };

  const handleClick = () => {
    if (!props.disabled) {
      setSelected(!selected);
    }
    if (!selected && !props.disabled) {
      setText(newText);
    } else {
      setText(initialText);
    }
    if (props.disabled) {
      setText(disabledText);
    }
  };

  return (
    <div className="card">
      <div
        className={`card__border ${selected ? "selected" : ""} ${
          hover && !selected ? "hover" : ""
        } ${selected && hover ? "selected-hover" : ""} ${
          props.disabled ? "disabled" : ""
        } `}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={handleClick}
      >
        <div className={`card__container ${props.disabled ? "disabled" : ""}`}>
          <p className="card__text_grey">Сказочное заморское яство</p>

          <h2 className="card__title">Нямушка</h2>
          <p className="card__title card__title_small">с фуа-гра</p>

          <p className="card__text grey">{props.quantity} порций </p>
          <p className="card__text grey">{props.gift}</p>

          <img src={cat} alt="cat" />
          <div
            className={`card__circle ${selected ? "selected" : ""} ${
              hover && !selected ? "hover" : ""
            } ${selected && hover ? "selected-hover" : ""} ${
              props.disabled ? "disabled" : ""
            }`}
          >
            <p className="card__weight">{props.weight}</p>
            <p className="card__weight_small">кг</p>
          </div>
        </div>
      </div>
      <div>{text}</div>
    </div>
  );
};

export default Card;
