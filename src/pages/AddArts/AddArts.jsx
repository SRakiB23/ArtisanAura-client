function AddArts() {
    const handleAddArts = (event) => {
      event.preventDefault();
  
      const form = event.target;
      const name = form.name.value;
      const item_name = form.item_name.value;
      const subcategory_name = form.subcategory_name.value;
      const short_description = form.short_description.value;
      const price = form.price.value;
      const rating = form.rating.value;
      const photo = form.photo.value;
      const customization = form.customization.value;
      const processing_time = form.processing_time.value;
      const stockStatus = form.stockStatus.value;
      const email = form.email.value;
  
      const newArts = {
        name,
        item_name,
        subcategory_name,
        short_description,
        price,
        rating,
        photo,
        customization,
        processing_time,
        stockStatus,
        email,
      };
      console.log(newArts);
  
      //send data to server
  
      fetch("http://localhost:3000/arts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newArts),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insetedID) {
            alert("Successfully Added!");
          }
        });
    };
    return (
      <div className="bg-[#F4F3F0] px-20 py-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center pb-10">Add Arts & Crafts</h2>
        <form onSubmit={handleAddArts}>
        <div className="form-control w-full mb-6">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="PhotoURL"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
          {/*form row for name and subcategory*/}
          <div className="md:flex gap-4 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="item_name"
                  placeholder="Item Name"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Subcategory Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="subcategory_name"
                  placeholder="Subcategory Name"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>
          {/*form row for short description and price*/}
          <div className="md:flex gap-4 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="short_description"
                  placeholder="Short Description"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>
          {/*form row for Rating and Customization*/}
          <div className="md:flex gap-4 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="customization"
                  placeholder="Details"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>
          {/*form row for Processing Time and StockStatus*/}
          <div className="md:flex gap-4 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="processing_time"
                  placeholder="Processing Time"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Stock Status</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="stockStatus"
                  placeholder="Stock Status"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>
          {/*form row for UserName and UserEmail*/}
          <div className="md:flex gap-4 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  placeholder="User Email"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="User Name"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>
          
          <input
            type="submit"
            value="Add Arts"
            className="bg-gray-800 btn btn-block text-white"
          />
        </form>
      </div>
    );
  }
  
  export default AddArts;