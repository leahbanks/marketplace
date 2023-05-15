import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ItemList from "./components/ItemList";
import CreateUser from "./components/CreateUser";
import Users from "./components/Users";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListItem from "./components/ListItem";
import { UserContext } from "./contexts/UserContext";
import {useState} from 'react';
import Basket from './components/Basket'

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
    <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<ItemList />}></Route>
          <Route path="/list-item" element={<ListItem />}></Route>
          <Route path="/create-user" element={<CreateUser />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path={"/users/:username/basket"} element={<Basket />}></Route>
        </Routes>
    </div>
    </UserContext.Provider>
  );
}

export default App;
