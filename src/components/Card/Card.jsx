import "./card.css";
import cat from "./img/cat.png";

function Card() {
  return (
    <div className="card">
      <div className="card__border">
        <div className="card__container">
          <p className="card__text_grey">Сказочное заморское яство</p>

          <h2 className="card__text">Нямушка</h2>
          <p className="card__text card__text_small">с фуа-гра</p>

          <p className="card__text grey">
            10 порций <br />
            мышь в подарок
          </p>

          <img src={cat} alt="cat" />
          <div className="card__circle">
            <p className="card__weight">0,5</p>
            <p className="card__weight_small">кг</p>
          </div>
        </div>
      </div>
      <p className="card__text_after">Чего сидишь? Порадуй котэ, <a href="/">купи.</a></p>
    </div>
  );
}

export default Card;
