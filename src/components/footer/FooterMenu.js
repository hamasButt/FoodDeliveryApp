import React, { useEffect } from "react";
import { MenuContainer } from "./MenuContainer";
import "../../style/footer-menu.css";
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";

export const FooterMenu = () => {
  useEffect(() => {
    const menuList = document.querySelectorAll("#menu > li");

    const setClasses = (active) => {
      menuList.forEach((n) => n.classList.remove("active"));
      active.classList.add("active");
    };

    menuList.forEach((n) => n.addEventListener("click", () => setClasses(n)));
  });

  return (
    <>
      <div className="bottom-menu">
        <ul id="menu">
          <MenuContainer link="#" icon={<HomeRounded />} isHomeActive />
          <MenuContainer link="#" icon={<Chat />} />
          <MenuContainer link="#" icon={<AccountBalanceWalletRounded />} />
          <MenuContainer link="#" icon={<Favorite />} />
          <MenuContainer link="#" icon={<SummarizeRounded />} />
          <MenuContainer link="#" icon={<Settings />} />
          <div className="indicator"></div>
        </ul>
      </div>
    </>
  );
};
