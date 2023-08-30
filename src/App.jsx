import About from "./components/About Us/About";
import Header from "./components/Header/Header";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Home from "./components/home/Home";
import ItemDetailContainer from "./components/products/ItemDetailContainer";
import ItemListContainer from "./components/products/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
    return (
        <>
        <BrowserRouter>
            <div className="flex bg-whiteOrange">
                <SideNavBar />
                <div className="w-screen relative backgroundSVG">
                    
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home />}/> 
                        <Route path="/products" element={<ItemListContainer grettings={'Products'} />}/>
                        <Route path="/detail/:id" element={<ItemDetailContainer />}/>
                        <Route path='/about' element={<About />}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
        </>
    );
}

export default App;
