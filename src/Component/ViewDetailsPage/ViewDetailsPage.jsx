import { useLoaderData } from "react-router-dom";


const ViewDetailsPage = () => {
    const singleUser = useLoaderData();
    
    // {Name,Email,ImageURL,Item_name,Subcategory_Name,Short_description,Price,Rating,Customization,StockStatus};
    
    return (
        <div className="my-11 p-5">
            <h1 className="text-3xl font-bold text-center">ViewDetailsPage : {singleUser.Name}</h1>


            <div className="card gap-5 lg:card-side bg-base-100 shadow-xl mt-7">
        
        <div className="flex-1">
                          
  <figure><img className="lg:w-96 lg:h-96 rounded-3xl" src={singleUser.ImageURL} alt="Album"/></figure>
        </div>

  <div className="flex-1 space-y-5">
        
        <div className="space-y-3">
        <h2 className="text-xl font-bold">Name:<span className="text-xl font-normal"> {singleUser.Name}</span></h2>

<h2 className="text-xl font-bold">Email :<span className="text-xl font-normal">{singleUser.Email}</span></h2>

<h2 className="text-xl font-bold">Item_name :<span className="text-xl font-normal">{singleUser.Item_name}</span></h2>

<h2 className="text-xl font-bold">Subcategory_Name :<span className="text-xl font-normal">{singleUser.Subcategory_Name}</span></h2>

<h2 className="text-xl font-bold">Short_description:<span className="text-xl font-normal">{singleUser.Short_description}</span></h2>

<div className="flex gap-7">
<h2 className="text-xl font-bold">Price :<span className="text-xl font-normal">{singleUser.Price}</span></h2>

<h2 className="text-xl font-bold">Rating :<span className="text-xl font-normal">{singleUser.Rating}</span></h2>
</div>

<h2 className="text-xl font-bold">Customization :<span className="text-xl font-normal">{singleUser.Customization}</span></h2>

<h2 className="text-xl font-bold">StockStatus :<span className="text-xl font-normal">{singleUser.StockStatus}</span></h2>

        </div>


    <div className="card-actions ">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ViewDetailsPage;