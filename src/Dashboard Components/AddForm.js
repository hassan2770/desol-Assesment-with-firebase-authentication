import React, { useState } from "react";
import { useDash } from "../contexts/Dashboardcontext";
import { auth } from "../firebase";
const AddForm = () => {
  const [name, setName] = useState("");
  const [carmodel, setCarModel] = useState("");
  const [amount, setAmount] = useState();
  const [phone, setPhone] = useState("");
  const [images, setImages] = useState("");
  const [uploadedImage, setUploadedImage] = useState();
  const [error, setError] = useState("");
  
  
  var date = new Date().toLocaleString();

  const { Addtasks } = useDash();
  const userId = auth.currentUser.uid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      setError("Please enter a valid amount");
      setTimeout(() => setError(""), 2000);
      return;
    }
    Addtasks({ name, carmodel, amount, userId, date, phone,images,uploadedImage });
    setName("");
    setCarModel("");
    setAmount("");
    setPhone("");
    setImages("");
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      {error && <div className="error-msg">{error}</div>}
      <div className="form-control">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter Full Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Car Model</label>
        <input
          type="text"
          placeholder="Car Model"
          required
          value={carmodel}
          minLength={3}
          onChange={(e) => setCarModel(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Price</label>
        <input
          type="number"
          placeholder="Enter Amount"
          required
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        ></input>
      </div>
      <div className="form-control">
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="XXXXXXXXXX"
          required
          value={phone}
          maxLength={11}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
      </div>
      <div >
        <label>Number of Images</label>
        <div className="radio">
        <input
          type="radio"
          value="1"
          name="image"
          required
          onChange={(e) => setImages(e.target.value)}
        ></input>1
        <input
          type="radio"
          value="2"
          name="image"
          required
          onChange={(e) => setImages(e.target.value)}
        ></input>2
        <input
          type="radio"
          value="3"
          name="image"
          required
          onChange={(e) => setImages(e.target.value)}
        ></input>3
        <input
          type="radio"
          value="4"
          name="image"
          required
          onChange={(e) => setImages(e.target.value)}
        ></input>4
        <input
          type="radio"
          value="5"
          name="image"
          required
          onChange={(e) => setImages(e.target.value)}
        ></input>5
        <input
          type="radio"
          value="6"
          name="image"
          required
          onChange={(e) => setImages(e.target.value)}
        ></input>6
        <input
          type="radio"
          value="7"
          name="image"
          required
          onChange={(e) => setImages(e.target.value)}
        ></input>7
        <input
          type="radio"
          value="8"
          name="image"
          required
          onChange={(e) => setImages(e.target.value)}
        ></input>8
        <input
          type="radio"
          value="9"
          name="image"
          required
          onChange={(e) => setImages(e.target.value)}
        ></input>9
        <input
          type="radio"
          value="10"
          name="image"
          required
          onChange={(e) => setImages(e.target.value)}
        ></input>10
        </div>
      </div>
      <div className="form-control">
        <label>Upload Image</label>
        <input
          type="file"
          required
          accept="image/*"
          id="image"
          value={uploadedImage}
          onChange={(e) => setUploadedImage(e.target.value)}
        ></input>
      </div>


      <input className="btn btn-block" type="submit" value="Save"></input>
    </form>
  );
};

export default AddForm;
