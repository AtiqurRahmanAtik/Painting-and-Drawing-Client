
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Update = () => {
    const userUpdate = useLoaderData();
    console.log(userUpdate);
   

    const {_id,Name,ImageURL,Item_name,Subcategory_Name,Short_description,Price,Rating,Customization,StockStatus} = userUpdate;



    const handleUpdate = (e)=>{
        e.preventDefault();

        const form = e.target;
        const Name = form.name.value;
        // const Email = form.email.value;
       
     
        const ImageURL = form.image.value;
        const Item_name = form.item_name.value;
        const Subcategory_Name = form.subcategory_Name.value;
        const Short_description = form.short_description.value;
        const Price = form.price.value;
        const Rating = form.rating.value;
        const Customization = form.customization.value;
        const StockStatus = form.stockStatus.value;

        //all user client
        const Updateuser = {Name,ImageURL,Item_name,Subcategory_Name,Short_description,Price,Rating,Customization,StockStatus};
        console.log(Updateuser);

        // send to server
        fetch(`http://localhost:5000/user/${_id}`,{
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(Updateuser),
        })

        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount >0){
                Swal.fire({
                    title: 'success',
                    text: 'Successfully Update Craft Item',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })

    }

    return (
        <div className="my-7 space-y-4">
            <h1 className="text-3xl font-bold text-center">Update Item: {Name}</h1>


            <div className="bg-red-400 p-5">
            <form onSubmit={handleUpdate}>
        
        <div className="flex gap-3">
        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold"> User Name</span>
          </label>
          <input type="text"  name="name" defaultValue={Name} placeholder=" User Name" className="input input-bordered w-full" required />
        </div>

   
        </div>


        <div className="flex gap-3">

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold"> Image URL</span>
          </label>
          <input type="text" name="image" defaultValue={ImageURL} placeholder=" image url" className="input input-bordered" required />
        </div>

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold"> Item Name</span>
          </label>
          <input type="text" name="item_name" defaultValue={Item_name} placeholder=" item_name" className="input input-bordered w-full" required />
        </div>
        </div>

        {/* 3 */}
        <div className="flex gap-3">

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold"> subcategory_Name</span>
          </label>
          <input type="text" name="subcategory_Name" defaultValue={Subcategory_Name} placeholder=" subcategory_Name" className="input input-bordered" required />
        </div>

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold">  short description</span>
          </label>
          <input type="text" name="short_description" defaultValue={Short_description} placeholder="  short description" className="input input-bordered w-full" required />
        </div>
        </div>



        {/* 4 */}
        <div className="flex gap-3">

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold">  Price</span>
          </label>
          <input type="text" name="price" defaultValue={Price} placeholder="  price" className="input input-bordered" required />
        </div>

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold">   Rating</span>
          </label>
          <input type="text" name="rating" defaultValue={Rating} placeholder="rating" className="input input-bordered w-full" required />
        </div>
        </div>

        {/* 5 */}
        <div className="flex gap-3">

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold"> customization</span>
          </label>
          <input type="text" name="customization" defaultValue={Customization} placeholder=" customization" className="input input-bordered" required />
        </div>

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold">    stockStatus</span>
          </label>
          <input type="text" name="stockStatus" defaultValue={StockStatus} placeholder=" stockStatus" className="input input-bordered w-full" required />
        </div>
        </div>


     
        <div className="form-control mt-6">

           <input  type="submit"  className="btn btn-primary" value="Update Item" />

        </div>

            </form>
        </div>
        </div>
    );
};

export default Update;