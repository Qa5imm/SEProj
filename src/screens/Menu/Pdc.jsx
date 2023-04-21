import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../Route/Route";
import MenuItems from "../../components/MenuItems/MenuItems";
import "./Menu.css";
import Menu from "./Menu";

const Pdc = () => {
  const eateryId = window.location.pathname.split(":")[1];
  const [menuItems, setMenuItems] = useState([]);
  const fetchMenuItems = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/pdcmenu`);
      const data = res.data;
      const newMenuItems = data.map((item) => ({
        ...item,
        eatery: "pdc",
        eateryId: eateryId,
      }));
      setMenuItems(newMenuItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  return <Menu name={"PDC"} menuItems={menuItems} />;
};

export default Pdc;
