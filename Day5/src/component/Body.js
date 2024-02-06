import RestaurentCard from "./RestaurantCard";

import{restList} from "../Utils/contants";


const Body = () => {
    return (
      <div className="body">
        <div className="search">search</div>
        <div className="res-container">          
        {restList.map((res)=>(
        
            <RestaurentCard resCard={res} />  
        ))}
        {/* <RestaurentCard
          name="Buger king "
          avgRatings="4.3" 
          />
          < RestaurentCard name="Burger king 2" avgRatings="4.3"/>
          < RestaurentCard name="Burger king 2" avgRatings="4.3"/>
    < RestaurentCard name="Burger king 2" avgRatings="4.3"/>*/}
        
        </div>
      </div>
    );
  };
     

  export default Body;