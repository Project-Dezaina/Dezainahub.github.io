import React from "react";
import "./CompletedOrderCard.css";
const CompletedOrderCard = () => {
  const cards = [
    {
      // Image: Fotu,
      title: "Restaurant Posters",
      Price: "500/-",
      text: "24/12/2023",
    },
    {
      // Image: Fotu,
      title: "Restaurant Posters",
      Price: "500/-",
      text: "24/12/2023",
    },
    {
      // Image: Fotu,
      title: "Restaurant Posters",
      Price: "500/-",
      text: "24/12/2023",
    },
  ];

  return (
    // <div className="OrderContent">
    <div className="OrderCard1">
      {cards.map((card, i) => (
        <div key={i} className="OrderCardInner">
          <div className="OrderCard-Inner-Inner">
            <div className="Order-Content1">
              <div className="Order-ContentInner">
                <svg
                  className="Bullet-Icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12.0002V9.33017C6 6.02017 8.35 4.66017 11.22 6.32017L13.53 7.66017L15.84 9.00017C18.71 10.6602 18.71 13.3702 15.84 15.0302L13.53 16.3702L11.22 17.7102C8.35 19.3402 6 17.9902 6 14.6702V12.0002Z"
                    fill="#2F455C"
                    stroke="#2F455C"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h4>{card.title}</h4>
              </div>
              <p>{card.Price}</p>
            </div>
            <div className="Order-Content2">
              <h6>{card.text}</h6>
              <svg
                className="Nxt-Icon"
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.34082 7.46979L5.78582 5.02479C6.07457 4.73604 6.07457 4.26354 5.78582 3.97479L3.34082 1.52979"
                  stroke="#B6B6B6"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>

    //   </div>
  );
};

export default CompletedOrderCard;
