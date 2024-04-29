import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {

    const user = useLoaderData();
    console.log(user);

    return (
        <div>
            <div className="my-11 p-5">
            <h1 className="text-3xl font-bold text-center">User ViewDetails  : {user.Name}</h1>


            <div className="card gap-5 lg:card-side bg-base-100 shadow-xl mt-7">
        
        <div className="flex-1">
                          
  <figure><img className="lg:w-96 lg:h-96 rounded-3xl" src={user.ImageURL} alt="Album"/></figure>
        </div>

  <div className="flex-1 space-y-5">
        
        <div className="space-y-3">
        <h2 className="text-xl font-bold">Name:<span className="text-xl font-normal"> {user.Name}</span></h2>

<h2 className="text-xl font-bold">Email :<span className="text-xl font-normal">{user.Email}</span></h2>

<h2 className="text-xl font-bold">Item_name :<span className="text-xl font-normal">{user.Item_name}</span></h2>

<h2 className="text-xl font-bold">Subcategory_Name :<span className="text-xl font-normal">{user.Subcategory_Name}</span></h2>

<h2 className="text-xl font-bold">Short_description:<span className="text-xl font-normal">{user.Short_description}</span></h2>

<div className="flex gap-7">
<h2 className="text-xl font-bold">Price :<span className="text-xl font-normal">{user.Price}</span></h2>

<h2 className="text-xl font-bold">Rating :<span className="text-xl font-normal">{user.Rating}</span></h2>
</div>

<h2 className="text-xl font-bold">Customization :<span className="text-xl font-normal">{user.Customization}</span></h2>

<h2 className="text-xl font-bold">StockStatus :<span className="text-xl font-normal">{user.StockStatus}</span></h2>

        </div>


    <div className="card-actions ">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default ViewDetails;