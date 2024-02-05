  
const RestaurentCard = (Proprops) => {
    const{name,avgRatings} = props;

  return (
    <div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg/1200px-Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg" />
  <p>{name}</p>
  <p>{avgRatings}</p>
  </div>
  
  
  );
};

export default RestaurentCard;