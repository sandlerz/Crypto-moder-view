import { useSelector } from 'react-redux'
import { selectBullishCoins } from '../Main/MainSlice'
import Coin from '../../Components/Coin'

export default function BullishCoins() {
  const bullishCoins = useSelector(selectBullishCoins)
  const mapBullishCoins = bullishCoins.map(data => (
    <Coin data={data} key={data.id} />
  ))

  return (
    <main className="simply-page">
      <h1>Bullish Coins</h1>
      <section className="simply-page__container">{mapBullishCoins}</section>
    </main>
  )
}
