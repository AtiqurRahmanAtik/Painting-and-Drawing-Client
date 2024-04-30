import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyProduct from "../MyProduct/MyProduct";





const MyArtCraft = () => {


    // const myCraft = useLoaderData();
    // console.log(myCraft);


    const {user} = useContext(AuthContext);
    // console.log(user);

    const [item,setItem]=useState([]);
    console.log(item);

    useEffect(()=>{

        fetch(`https://painting-and-drawing-server-42bm7bj92.vercel.app/myProduct/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setItem(data);
        })

    },[user]);


    return (
        <div className="my-11">
            <h1 className="text-3xl font-bold text-center">My Art&Craft</h1>

            <div className="grid lg:grid-cols-2 gap-7">
                {
                    item.map((item) => <MyProduct key={item._id} item={item}></MyProduct>)
                }
            </div>
        </div>
    );
};

export default MyArtCraft;