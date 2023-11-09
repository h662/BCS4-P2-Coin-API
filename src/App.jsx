import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
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
    <main className="min-h-screen flex flex-col justify-center items-center">
      <ul className="w-60 flex flex-col justify-center">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2000}
          arrows={false}
        >
          {coinPrices ? (
            coinPrices.map((v, i) => {
              return <CoinCard key={i} coinPrice={v} />;
            })
          ) : (
            <div>로딩중...</div>
          )}
        </Slider>
      </ul>
    </main>
  );
};

export default App;
