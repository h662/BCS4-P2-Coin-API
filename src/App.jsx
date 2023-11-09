import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [coinPrices, setCoinPrices] = useState();

  const getCoinPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-ETH,%20KRW-MATIC"
      );

      setCoinPrices(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoinPrice();
  }, []);

  return (
    <main className="min-h-screen flex justify-center items-center">
      <ul className="flex flex-col gap-8">
        {coinPrices ? (
          coinPrices.map((v, i) => {
            return (
              <li key={i} className="flex items-center">
                <img
                  className="w-6 inline-block"
                  src={`./images/${v.market.substring(4)}.png`}
                  alt={v.market.substring(4)}
                />
                <span className="ml-2">{v.market.substring(4)}</span>
                <span className="ml-2">{v.trade_price}</span>
              </li>
            );
          })
        ) : (
          <div>로딩중...</div>
        )}
      </ul>
    </main>
  );
};

export default App;
