import React, { useState } from "react";
import scss from "./menu.module.scss";
import { Link } from "react-router-dom";
import img1 from "../../media/tkani.jpg";
import img2 from "../../media/home.jpg";
import img3 from "../../media/furnitura.jpg";
import img4 from "../../media/gatovi.jpg";
import img5 from "../../media/new.jpg";
import img6 from "../../media/zakaz.jpg";
import img7 from "../../media/dostavka.jpg";
import img8 from "../../media/info.jpg";
import img9 from "../../media/all.jpg";
import { AiOutlineHome, AiOutlineSkin } from "react-icons/ai";
import { GiExplosiveMaterials } from "react-icons/gi";
import { RxScissors } from "react-icons/rx";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";
import { RiLuggageCartLine, RiTruckLine } from "react-icons/ri";
import { IoBarChartOutline } from "react-icons/io5";
import { FaBuffer, FaOpencart } from "react-icons/fa";

const Menu = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const logosData = [
    {
      img: <GiExplosiveMaterials />,
      link: "/",
      title: "ТКАНИ ДЛЯ ПЛАТЬЯ",
      r_icon: <i className="fa-solid fa-angle-right"></i>,
      categories: [
        {
          title: "Lorem ipsum dolor",
          id: "djfob1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
        {
          title: "Lorem ipsum dolor",
          id: "djfbsfob1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
        {
          title: "Lorem ipsum dolor",
          id: "djefob1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
        {
          title: "Lorem ipsum dolor",
          id: "djfdfob1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
        {
          title: "Lorem ipsum dolor",
          id: "djfhnob1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
        {
          title: "Lorem ipsum dolor",
          id: "djfhnohjb1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
        {
          title: "Lorem ipsum dolor",
          id: "djfhnobghjb1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
      ],
    },
    {
      img: <AiOutlineHome />,
      link: "/",
      title: "ТКАНИ ДЛЯ ДОМА",
      r_icon: <i className="fa-solid fa-angle-right"></i>,
      categories: [
        {
          title: "Lorem ipsum dolor",
          id: "djfob1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
        {
          title: "Lorem ipsum dolor",
          id: "djfo43b1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
        {
          title: "Lorem ipsum dolor",
          id: "djfytob1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
      ],
    },
    {
      img: <RxScissors />,
      link: "/",
      title: "ФУРНИТУРА",
      r_icon: <i className="fa-solid fa-angle-right"></i>,
      categories: [
        {
          title: "Lorem ipsum dolor",
          id: "djfob1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
        {
          title: "Lorem ipsum dolor",
          id: "djfo43b1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
        {
          title: "Lorem ipsum dolor",
          id: "djfytob1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },

        {
          title: "Lorem ipsum dolor",
          id: "djfdsytob1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
      ],
    },
    {
      img: <AiOutlineSkin />,
      link: "/",
      title: "ГОТОВЫЕ ФАСОНЫ",
      r_icon: <i className="fa-solid fa-angle-right"></i>,
      categories: [
        {
          title: "Lorem ipsum dolor",
          id: "djfob1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
        {
          title: "Lorem ipsum dolor",
          id: "djfo43b1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
        {
          title: "Lorem ipsum dolor",
          id: "djfytob1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
      ],
    },
    {
      img: <SlBadge />,
      link: "/",
      title: "НОВИНКИ",
      r_icon: <i className="fa-solid fa-angle-right"></i>,
      categories: [
        {
          title: "Lorem ipsum dolor",
          id: "djfob1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
        {
          title: "Lorem ipsum dolor",
          id: "djfo43b1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
        {
          title: "Lorem ipsum dolor",
          id: "djfytob1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
      ],
    },
    {
      img: <FaOpencart />,
      link: "/",
      title: "ЗАКАЗАТЬ",
    },
    {
      img: <BsTruck />,
      link: "/",
      title: "ДОСТАВКА ПО ВСЕМУ МИРУ",
    },
    {
      img: <IoBarChartOutline />,
      link: "/",
      title: "БОЛЬШЕ ИНФОРМАЦИИ",
    },
    {
      img: <FaBuffer />,
      link: "/",
      title: "ВСЕ ТОВАРЫ",
      r_icon: <i className="fa-solid fa-angle-right"></i>,
      categories: [
        {
          title: "Lorem ipsum dolor",
          id: "djfob1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
        {
          title: "Lorem ipsum dolor",
          id: "djfo43b1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
        {
          title: "Lorem ipsum dolor",
          id: "djfytob1",
          subtitles: [
            { title: "Материнские платы", id: "1" },
            { title: "Материнские платы", id: "2" },
            { title: "Материнские платы", Id: "3" },
            { title: "Материнские платы", id: "4" },
            { title: "Материнские платы", id: "5" },
          ],
        },
      ],
    },
  ];
  const displayModalHandler = (categories) => {
    if (categories) {
      setShowModal(true);
      setModalContent(categories);
    } else {
      setShowModal(false);
    }
  };
  console.log("render");
  return (
    <div
      onMouseLeave={() => {
        setShowModal(false);
      }}
      className={scss.menu}
    >
      {logosData?.map((item, index) => (
        <Link
          onMouseOver={() => {
            displayModalHandler(item.categories);
          }}
          to={item.link}
          key={index}
          className={scss.menu__link}
        >
          {/* <img
						className={scss.menu__link_img}
						src={item.img}
						alt="logos image"
					/>{" "} */}
          <h2>{item.img}</h2>
          <h4> {item.title} </h4>
          <p>{item.r_icon}</p>
        </Link>
      ))}

      {showModal && (
        <div className={scss.modal}>
          {modalContent.map((category) => {
            return (
              <div className={scss.category} key={category.id}>
                <h2 className={scss.categoryTitle}>{category.title}</h2>
                {category.subtitles.map((item) => (
                  <Link
                    className={scss.categoryLink}
                    key={item.id}
                    to={item.id}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Menu;
