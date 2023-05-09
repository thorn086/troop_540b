import React from "react";
import flowers from "../../../../../img/flowers/flowers.jpeg";
import Header from "../../../../../components/Header/Header";
import Footer from "../../../../../components/footer/footer";
import "./significantevents.styles.css";

function SignificantEvent() {
  return (
    <>
      <Header />
      <div className="eventContainer">
        <h1 className="mothers-day-flowers">Mother's Day Flower Sale</h1>
        <img
          className="mothers-day-flower-img"
          src={flowers}
          alt="mothers days flowers in baskets"
        />
        <br />
        <div className="message-container">
          <p className="m-sale">
            Baskets will be for sale this weekend, May 13th and 14th, 2023.
          </p>
          <p className="m-sale">
            Sizes are available in 12",10" and 5" arrangements.
          </p>
          <h3 className="m-sale">Prices:</h3>
          <p className="m-sale">12" are $38 or 2/$70</p>
          <p className="m-sale">10" are $28 or 2/$50</p>
          <p className="m-sale">5" are $6</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignificantEvent;
