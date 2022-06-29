import React, { useEffect, useState } from "react";
import "../../style/midcontent.css";
import { BannerName } from "./BannerName";
import { DishContainer } from "./dish-container/DishContainer";
import { RightMenu } from "./dish-container/RightMenu";

export const MiddleContentCont = () => {
  return (
    <main>
      <div className="main-container">
        <div className="banner">
          <BannerName name={"hamas"} discount={"20"} link={"#"} />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
            alt="delivery"
            className="delivery-pic"
          />
        </div>
        <DishContainer />
      </div>
      <RightMenu />
    </main>
  );
};
