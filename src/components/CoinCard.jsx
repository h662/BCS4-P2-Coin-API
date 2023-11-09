const CoinCard = ({ coinPrice }) => {
  return (
    <li className="flex items-center">
      <img
        className="w-6 inline-block"
        src={`./images/${coinPrice.market.substring(4)}.png`}
        alt={coinPrice.market.substring(4)}
      />
      <span className="ml-2">{coinPrice.market.substring(4)}</span>
      <span className="ml-2">{coinPrice.trade_price}</span>
    </li>
  );
};

export default CoinCard;
