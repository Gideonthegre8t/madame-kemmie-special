import React from "react";
import resturantService from "../assets/images/resturant-services.png";
import bulkOrder from "../assets/images/bulk-order.png";
import mealBowl from "../assets/images/meal-in-bowl.png";
import dailyCatering from "../assets/images/daily-office-catering.png";


const services2Items = [
  {
    img: resturantService,
    name: "Resturant services",
  },
  {
    img: bulkOrder,
    name: "Bulk order",
  },
  {
    img: mealBowl,
    name: "Meals in bowl",
  },
  {
    img: dailyCatering,
    name: "Daily office catering ",
  },
];

function Services2() {
  return (
    <section className="services2-container">
      <h3>Other Services</h3>
      <div className="services2-wrapper">
        {services2Items.map((item, index) => (
          <div className="services2-card" key={index}>
             <img className="service2-image" src={item.img} alt={item.name} />
              <p className="service2-name">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services2;
