import UserSidebar from "../components/navigation/UserSidebar.jsx";
import washingMachineImg from "../assets/lp.png";

const items = [
  { id: 1, name: "Washing Machine", price: 1000, image: washingMachineImg },
  { id: 2, name: "Washing Machine", price: 1000, image: washingMachineImg },
  { id: 3, name: "Washing Machine", price: 1000, image: washingMachineImg },
  { id: 4, name: "Washing Machine", price: 1000, image: washingMachineImg },
];

const Store = () => {
  return (
    <div className="flex">
      <UserSidebar />

      <main className="ml-60 w-full bg-bgColor min-h-screen p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-headingText text-2xl font-bold font-nunito flex items-center space-x-2">
            <i className="fa-solid fa-cart-shopping text-primary"></i>
            <span>Store</span>
          </h1>
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all flex items-center space-x-2">
            <i className="fa-solid fa-flag-checkered"></i>
            <span>Join Activities</span>
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="font-semibold text-headingText flex items-center space-x-2 mb-2">
            <i className="fa-solid fa-coins text-primary"></i>
            <span>Current Lingkod Points: 2000</span>
          </h2>
          <p className="text-subHeadingText text-sm">
            You can exchange your Lingkod Points for something valuable. Treat this as a reward for yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
              <div className="p-4 flex flex-col space-y-2">
                <h3 className="text-headingText font-semibold">{item.name}</h3>
                <button className="bg-primary text-white py-2 rounded-lg font-semibold flex items-center justify-center space-x-2">
                  <i className="fa-solid fa-coins"></i>
                  <span>Purchase for {item.price}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Store; 