import React, { useState } from "react";
import classes from "./Menu.css";
import text from "./MenuLanguagePack.json";
import Dropdown from "../dropdown/Dropdown";

const Menu = () => {
  const languageList: { desc: string; val: string }[] = Object.keys(text).map(
    (lang) => {
      return {
        desc: text[lang].language,
        val: text[lang].languageCode,
      };
    }
  );

  const [menuItems, setMenuItems] = useState(text.pl.menuItems);

  const setLanguageHandler = (selectedValue: string | number) => {
    setMenuItems(text[selectedValue].menuItems);
  };
  return (
    <div>
      <nav>
        {menuItems.map((menuItem) => (
          <a key={menuItem.text}>{menuItem.text}</a>
        ))}
      </nav>
      <Dropdown
        name="lang"
        items={languageList}
        onSelectedValue={setLanguageHandler}
      />
    </div>
  );
};

export default Menu;
