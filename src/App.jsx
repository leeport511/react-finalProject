import About from "./components/About Us/About";
import ContactUs from "./components/Contact Us/ContactUs";
import Header from "./components/Header/Header";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Home from "./components/home/Home";
import ItemDetailContainer from "./components/products/ItemDetailContainer";
import ItemListContainer from "./components/products/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import CartContainer from "./components/Cart/CartContainer";



function App() {

   
  

    return (
        <>
        <CartContextProvider>
            <BrowserRouter>
                <div className="flex ">
                    <SideNavBar />
                    <div className="w-screen relative bg-whiteOrange ">
                        
                        <Header/>
                        <Routes>
                            <Route path="/" element={<Home />}/> 
                            <Route path="/products" element={<ItemListContainer grettings={'Products'} />}/>
                            <Route path="/products/:category" element={<ItemListContainer />}/>
                            <Route path="/item/:id" element={<ItemDetailContainer />}/>
                            <Route path='/About Us' element={<About />}/>
                            <Route path='/Contact Us' element={<ContactUs />}/>
                            <Route path='/cart' element={<CartContainer />}/>
                        </Routes>

                    </div>
                </div>
            </BrowserRouter>
        </CartContextProvider>
        </>
    );
}

export default App;
