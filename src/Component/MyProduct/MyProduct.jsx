import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyProduct = ({item}) => {
    console.log(item);
    const {_id,Name,Email,ImageURL,Item_name,Subcategory_Name,Short_description,Price,Rating,Customization,StockStatus} = item;


    const handleDelete = (id)=>{
        console.log(id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
        

            fetch(`painting-and-drawing-client.vercel.app
/myProduct/${id}`,{
                method: "DELETE"
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data);

                if(data.deletedCount > 0){

                Swal.fire({
                title: "Deleted!",
                text: "Your Product has been deleted.",
                icon: "success"
              });
                }
            })
            }
          });
    }


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
     
   <Link to={`/update/${_id}`}>  <button className="btn bg-orange-500">Update</button></Link>

 <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyProduct;