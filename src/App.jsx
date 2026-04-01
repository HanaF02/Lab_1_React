import apple from "./assets/apple.jpg";
import banana from "./assets/banana.jpg";
import carrot from "./assets/carrot.jpg";
import orange from "./assets/orange.jpg";
import strawberry from "./assets/strawberry.jpg";
import cocktail from "./assets/cocktail.jpg";
import Card from "./components/card";

const App = () => {
  let products = [
    { title: "Apple Juice", price: 15, image: apple },
    { title: "Banana Juice", price: 20, image: banana },
    { title: "Carrot Juice", price: 10, image: carrot },
    { title: "Orange Juice", price: 15, image: orange },
    { title: "Strawberry Juice", price: 25, image: strawberry },
    { title: "Cocktail Juice", price: 30, image: cocktail },
  ];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-5">Product List: Juices</h1>
      <div className="flex flex-wrap">
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
