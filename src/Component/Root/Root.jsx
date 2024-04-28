import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div >

            <div className="container mx-auto mb-11">
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
          </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;