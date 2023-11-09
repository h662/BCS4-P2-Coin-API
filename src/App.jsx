import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const getCoinPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-ETH,%20KRW-MATIC"
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoinPrice();
  }, []);

  return <div className="bg-red-100">Hello, React!</div>;
};

export default App;
