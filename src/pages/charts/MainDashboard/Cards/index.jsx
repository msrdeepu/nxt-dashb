import "./cards.css";
import "../../../../app/globals.css";

import Card from "@/components/Card/Card";
//cards-data
import { cardsData } from "@/pages/Data/Data";

const Cards = () => {
  return (
    <div className="cards flex justify-between flex-wrap">
      {cardsData.map((card, id) => {
        return (
          <div className="max-w-full" key={card.id}>
            <Card
              key={card.id}
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
