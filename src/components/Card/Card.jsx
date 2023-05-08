import "./card.css";
import cat from "./img/cat.png";

function Card(props) {
  return (
    <div className="card">
      <div className="card__border">
        <div className="card__container">
          <p className="card__text_grey">Сказочное заморское яство</p>

          <h2 className="card__title">Нямушка</h2>
          <p className="card__title card__title_small">с фуа-гра</p>

          <p className="card__text grey">{props.quantity} порций </p>
          <p className="card__text grey">{props.gift}</p>

          <img src={cat} alt="cat" />
          <div className="card__circle">
            <p className="card__weight">{props.weight}</p>
            <p className="card__weight_small">кг</p>
          </div>
        </div>
      </div>
      <p className="card__text_after">
        Чего сидишь? Порадуй котэ, <a href="/">купи.</a>
      </p>
    </div>
  );
}

export default Card;