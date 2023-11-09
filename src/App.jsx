import axios from "axios";
import { useEffect, useState } from "react";
import CoinCard from "./components/CoinCard";

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
            return <CoinCard key={i} coinPrice={v} />;
          })
        ) : (
          <div>로딩중...</div>
        )}
      </ul>
    </main>
  );
};

export default App;
