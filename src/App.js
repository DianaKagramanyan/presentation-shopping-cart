import Navbar from "./components/Navbar";
import Amazon from "./components/Amazon";
import {useState} from "react";
import Cart from "./components/Cart";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item])
  }
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  }
  // useEffect(() => {
  //   console.log("cart change")
  // }, [cart])

  return (
    <div className="App">
      <Navbar setShow={setShow} size={cart.length}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
      />
      {
        show ? (
          <Amazon handleClick={handleClick} searchInput={searchInput}/>
        ) : (
          <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>)
      }
    </div>
  );
}

export default App;
