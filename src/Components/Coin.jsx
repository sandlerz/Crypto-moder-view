import { arrow } from '../Assets/Images/Util/index'

export default function Coin({ data }) {
  const { name, symbol, icon, price, priceChange1d, priceChange1w } = data
  return (
    <div className="coin">
      <div className="coin__top">
        <div className="coin__top__img">
          <img src={icon} alt="" />
        </div>
        <div className="coin__top__title">
          <span className="coin__top__title__name">
            {name} <span>({symbol})</span>
          </span>
          <span>$ {price.toLocaleString()}</span>
        </div>
        <div className="coin__top__save"></div>
      </div>
      <div className="coin__bottom">
        <span>24h %</span>
        <div className="coin__bottom__priceChange">
          <div className="coin__bottom__priceChange__img green__img">
            <img src={arrow} alt="" />
          </div>
          <span className="green">{priceChange1d} %</span>
        </div>
        <span>7d %</span>
        <div className="coin__bottom__priceChange">
          <div className="coin__bottom__priceChange__img red__img">
            <img src={arrow} alt="" />
          </div>
          <span className="red">{priceChange1w} %</span>
        </div>
      </div>
    </div>
  )
}