import Header from "./components/Header/Header";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import ItemListContainer from "./components/products/ItemListContainer";

function App() {
    return (
        <>
            <div className="flex bg-whiteOrange">
                <SideNavBar />
                <div className="w-screen relative backgroundSVG">
                    
                    <Header/>
                    
                    <ItemListContainer grettings={'Contenedor de productos'}/>

                </div>
            </div>
        </>
    );
}

export default App;
