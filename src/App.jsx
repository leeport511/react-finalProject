import About from "./components/About Us/About";
import Header from "./components/Header/Header";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Home from "./components/home/Home";
import ItemDetailContainer from "./components/products/ItemDetailContainer";
import ItemListContainer from "./components/products/ItemListContainer";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";



function App() {

    const params = useParams();
    console.log(params);

    return (
        <>
        <BrowserRouter>
            <div className="flex bg-whiteOrange backgroundSVG">
                <SideNavBar />
                <div className="w-screen relative ">
                    
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home />}/> 
                        <Route path="/products" element={<ItemListContainer grettings={'Products'} />}/>
                        <Route path="/products/:category" element={<ItemListContainer />}/>
                        <Route path="/detail/:id" element={<ItemDetailContainer />}/>
                        <Route path='/About Us' element={<About />}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
        </>
    );
}

export default App;
