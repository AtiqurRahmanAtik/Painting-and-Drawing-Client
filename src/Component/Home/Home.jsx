import { useLoaderData } from "react-router-dom";
import CarftItem from "../CarftItem/CarftItem";
import Banner from "../Banner/Banner";


const Home = () => {
    const data = useLoaderData();
    // console.log(data);

    return (

        <div className="my-11 space-y-9">

        <div>
            <Banner></Banner>
        </div>

            <div>

                
            <h1 className="text-3xl font-bold text-center">Craft Items Section:: {data.length}</h1>

<div className="grid grid-rows-1 lg:grid-cols-2 gap-7">
    {
        data.map((user)=> <CarftItem user={user} key={user._id}></CarftItem>)
    }
</div>
            </div>
        </div>
    );
};

export default Home;