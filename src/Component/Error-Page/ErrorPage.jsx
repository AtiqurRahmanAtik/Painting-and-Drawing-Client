import { useRouteError } from "react-router-dom";
import photo from "../../assets/Image/404.gif";

const ErrorPage = () => {

    const error = useRouteError();


    return (
        <div className="text-center my-11">
            
            <div className="space-y-2">
            <h1 className="text-3xl font-bold text-red-500">Oops!</h1>
      <p className="text-2xl font-bold">Sorry, an unexpected error has occurred.</p>
      <p className="text-2xl font-bold">
        <i>{error.statusText || error.message}</i>
      </p>
            </div>

            <div >
                <img className="mx-auto" src={photo} alt="error" />
            </div>

    </div>
        
    );
};

export default ErrorPage;