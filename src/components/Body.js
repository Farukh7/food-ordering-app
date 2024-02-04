import ResturantCard from "./ResturantCard";

// import resList from "../utils/mockData";

const Body = () => {

  // State Variable - Super powerful variable
  



  // Normal JS Variable
  let ListofResturants = [
    {
    info:{
      id: "334475",
      name:"KFC",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burger", "American", "Snacks", "Fast Food"],
      costForTwo: 4000,
      deliveryTime: 36,
      avgRating: "3.9",
    }
    },
    {
  info:{
    id: "334474",
    name:"Dominos",
    cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    cuisines: ["Burger", "American", "Snacks", "Fast Food"],
    costForTwo: 4000,
    deliveryTime: 36,
    avgRating: "4.5",
  },
    },
    {
      info:{
        id: "334471",
        name:"MS",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burger", "American", "Snacks", "Fast Food"],
        costForTwo: 4000,
        deliveryTime: 36,
        avgRating: "4.7",
      },
    },
];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic Here
            ListofResturants = ListofResturants.filter((res) => res.info.avgRating > 4
            );
            console.log(ListofResturants);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {ListofResturants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
