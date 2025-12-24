import Header from "./Component/Header";
import "./App.css";
import Slider from "./Component/Slider";
import Productionhouse from "./Component/Productionhouse";
import GenreListbymovie from "./Component/GenreListbymovie";

function App() {
  return (
    <>
      <Header />
      <Slider/>
      <Productionhouse/>
      <GenreListbymovie/>
    </>
  );
}

export default App;
