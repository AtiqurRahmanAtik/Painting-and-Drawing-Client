import { Link } from "react-router-dom";


const MyProduct = ({item}) => {
    console.log(item);
    const {_id,Name,Email,ImageURL,Item_name,Subcategory_Name,Short_description,Price,Rating,Customization,StockStatus} = item;


    return (
        <div>
            
            <div className="card card-side bg-base-100 shadow-xl">
        
        <div className="p-4">
        <figure><img className="lg:w-64 lg:h-72" src={ImageURL} alt="Movie"/></figure>
        </div>

  <div className="card-body flex-1 ">
    
    <div className="space-y-3">
    <h2 className="card-title">Item_name : <span className="text-xl font-normal">{Item_name}</span></h2>


    
        <h2 className="text-xl font-bold">Price :<span className="text-xl font-normal">{Price}</span></h2>
    
        <h2 className="text-xl font-bold">Rating : <span className="text-xl font-normal">{Rating}</span></h2>

        
        <h2 className="text-xl font-bold">Customization : <span className="text-xl font-normal">{Customization}</span></h2>

        <h2 className="text-xl font-bold"> StockStatus : <span className="text-xl font-normal">{StockStatus}</span></h2>

    </div>

    <div className="card-actions lg:mt-11">
     
   <Link >  <button className="btn bg-orange-500">Update</button></Link>

   <Link >  <button className="btn btn-primary">Delete</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyProduct;