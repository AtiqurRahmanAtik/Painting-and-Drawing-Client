import { Link, useLoaderData } from "react-router-dom";


const AllArtCraft = () => {

    const userData = useLoaderData();
    console.log(userData);

    return (
        <div className="my-11">
            <h1 className="text-3xl font-bold text-center">allArtCraft</h1>


            <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead className="text-2xl font-bold text-black">
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Item Name</th>
        <th>StockStatus</th> 
        <th> Price</th> 
        <th>Details</th> 
       
      </tr>
    </thead> 
    <tbody>
     
        
        {
            userData.map((user)=>    <tr key={user._id}>
                
            <td>{user.Name}</td> 
            <td>{user.Item_name}</td>
            <td>{user.StockStatus}</td> 
            <td>{user.Price}</td> 
            <td><Link to={`/view/${user._id}`}><button className="btn btn-link no-underline">View Details</button></Link></td>
            </tr> 
            )
        }
        
     
     
   
    </tbody> 
 
  </table>
</div>
        </div>
    );
};

export default AllArtCraft;