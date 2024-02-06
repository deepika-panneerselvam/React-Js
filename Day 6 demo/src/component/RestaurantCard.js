import{CDN_URL}from '../Utils/contants'
const RestaurentCard = (props) => {
    const{resData} = props;
    const {info}=resData;
  return (
    <div>
    <img src={`${CDN_URL}${info?.cloudinaryImageId}`} alt="BurgerKing" />
  <p>{info.name?? 0}</p>
  <p>{info?.avgRatings}</p>
  </div>
  
  
  );
};


export default RestaurentCard;