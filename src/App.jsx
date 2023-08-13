import Header from "./components/Header/Header";
import SideNavBar from "./components/SideNavBar/SideNavBar";

function App() {
    return (
        <>
            <div className="flex bg-whiteOrange">
                <SideNavBar />
                <div className="w-screen">
                    <Header />
                    {/* main */}

                </div>
            </div>
        </>
    );
}

export default App;
