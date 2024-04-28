
const AddCarft = () => {

    const handleForm = (e)=>{
        e.preventDefault();

        const form = e.target;
        const Name = form.name.value;
        const Email = form.email.value;
        const ImageURL = form.image.value;
        const Item_name = form.item_name.value;
        const Subcategory_Name = form.subcategory_Name.value;
        const Short_description = form.short_description.value;
        const Price = form.price.value;
        const Rating = form.rating.value;
        const Customization = form.customization.value;
        const StockStatus = form.stockStatus.value;

        //all user client
        const user = {Name,Email,ImageURL,Item_name,Subcategory_Name,Short_description,Price,Rating,Customization,StockStatus};
        console.log(user);

        // send to server
        fetch('http://localhost:5000/user',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
        })

        .then(res=> res.json())
        .then(data=>{
            console.log(data);
        })

    }

    return (
       
            
            <div className="lg:w-2/3 bg-base-200 mx-auto">
  <div className=" flex-col lg:flex-row-reverse space-y-10">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
      
    </div>

        
        <div className="bg-orange-400 p-5">
            <form onSubmit={handleForm}>
        
        <div className="flex gap-3">
        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold"> User Name</span>
          </label>
          <input type="text"  name="name" placeholder=" User Name" className="input input-bordered w-full" required />
        </div>

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold"> User Email</span>
          </label>
          <input type="email" name="email" placeholder=" User Email" className="input input-bordered w-full" required />
        </div>
        </div>


        <div className="flex gap-3">

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold"> Image URL</span>
          </label>
          <input type="text" name="image" placeholder=" image url" className="input input-bordered" required />
        </div>

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold"> Item Name</span>
          </label>
          <input type="text" name="item_name" placeholder=" item_name" className="input input-bordered w-full" required />
        </div>
        </div>

        {/* 3 */}
        <div className="flex gap-3">

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold"> subcategory_Name</span>
          </label>
          <input type="text" name="subcategory_Name" placeholder=" subcategory_Name" className="input input-bordered" required />
        </div>

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold">  short description</span>
          </label>
          <input type="text" name="short_description" placeholder="  short description" className="input input-bordered w-full" required />
        </div>
        </div>



        {/* 4 */}
        <div className="flex gap-3">

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold">  Price</span>
          </label>
          <input type="text" name="price" placeholder="  price" className="input input-bordered" required />
        </div>

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold">   Rating</span>
          </label>
          <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" required />
        </div>
        </div>

        {/* 5 */}
        <div className="flex gap-3">

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold"> customization</span>
          </label>
          <input type="text" name="customization" placeholder=" customization" className="input input-bordered" required />
        </div>

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text text-2xl font-bold">    stockStatus-</span>
          </label>
          <input type="text" name="stockStatus" placeholder=" stockStatus" className="input input-bordered w-full" required />
        </div>
        </div>


     
        <div className="form-control mt-6">

           <input  type="submit"  className="btn btn-primary" value="Add" />

        </div>

            </form>
        </div>
  </div>
</div>
        
    );
};

export default AddCarft;