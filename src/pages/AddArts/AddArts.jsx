import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

function AddArts() {
  const { user, displayName } = useContext(AuthContext);
  const handleAddArts = (event) => {
    event.preventDefault();

    toast.success("Arts added successfully");

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
    <div
      className="bg-cover bg-center min-h-screen max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/vH9tWSk/stacked-waves-haikei.png')",
      }}
    >
      <div className="px-20 py-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black pb-10">
          Add Arts & Crafts
        </h2>
        <form onSubmit={handleAddArts}>
          <div className="form-control w-full mb-6">
            <label className="label ">
              <span className="label-text text-white">Photo URL</span>
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
                <span className="label-text text-white">Item Name</span>
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
                <span className="label-text text-white">Subcategory Name</span>
              </label>
              <label className="select">
                <select name="subcategory_name">
                  <option>Select Subcategory</option>
                  <option>Landscape Painting</option>
                  <option>Portrait Drawing</option>
                  <option>Watercolour Painting</option>
                  <option>Oil Painting</option>
                  <option>Charcoal Sketching</option>
                  <option>Cartoon Drawing</option>
                </select>
              </label>
            </div>
          </div>
          {/*form row for short description and price*/}
          <div className="md:flex gap-4 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Short Description</span>
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
                <span className="label-text text-white">Price</span>
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
                <span className="label-text text-white">Rating</span>
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
                <span className="label-text text-white">Customization</span>
              </label>
              <label className="select">
                <select name="customization">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </label>
            </div>
          </div>
          {/*form row for Processing Time and StockStatus*/}
          <div className="md:flex gap-4 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Processing Time</span>
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
                <span className="label-text text-white">Stock Status</span>
              </label>
              <label className="select">
                <select name="stockStatus">
                  <option>In Stock</option>
                  <option>Made to Order</option>
                </select>
              </label>
            </div>
          </div>
          {/*form row for UserName and UserEmail*/}
          <div className="md:flex gap-4 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white">User Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  value={user?.email ?? ""}
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white">User Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  value={user?.displayName ?? ""}
                  // placeholder="User Name"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Arts"
            className="bg-green-500 text-black btn btn-block"
          />
        </form>
      </div>
    </div>
  );
}

export default AddArts;
