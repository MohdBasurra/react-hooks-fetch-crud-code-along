import Header from "./Header";
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";


function App() {




  const [isDarkMode, setIsDarkMode] = useState(false);
  




  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }








  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList />
    </div>
  );
}
export default App;