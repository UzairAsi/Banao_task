import "./App.css";
import Nav from "./Nav";
import Header from "./Header";
import List from "./List";
import Location from "./Location";
import Cards from "./Cards";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <List />
      <Location />
      <Cards
        imgsrc="https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg"
        margins="-425px"
      />
      <Cards
        imgsrc="https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg"
        margins="15px"
      />
      <Cards
        imgsrc="https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg"
        margins="15px"
      />
      <Cards
        imgsrc="https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg"
        margins="15px"
      />
    </>
  );
}

export default App;
