import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sellerProduct } from "../redux/action/ProductListAction";
import { Modal } from "react-bootstrap";

function SellForm() {
  //LOCAL STATE FOR ADDING PRODUCT
  const initialProductDetails = {
    name: "",
    price: "",
    location: "",
    description: "",
    image: "",
  };
  const [productDetails, setProductDetails] = useState(initialProductDetails);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  //FUNCTION FOR SELLING PRODUCT
  const onSubmit = () => {
    dispatch(sellerProduct(productDetails));
  };
  const [showModal, setShowModal] = useState(true);
  const handleClose = (e) => {
    console.log(e.target);
    if(e.target==null||e.target==undefined||!(e.target)){
      setShowModal(false)
    }
  };
  return (
    <Modal show={showModal}>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title mb-4">Sell Product</h3>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                required
                name="name"
                value={productDetails.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Product Location
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                placeholder="Enter product location"
                value={productDetails.location}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Product Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                placeholder="Enter product description"
                value={productDetails.description}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Product Photo
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                value={productDetails.image}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Selling Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                placeholder="Enter reserve price"
                value={productDetails.price}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="form-text mt-3">
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a to="#">privacy policy.</a>
              </p>
            </div>
            <div className="d-grid mt-3 submitbtn">
              <button type="button" className="btn" onClick={onSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default SellForm;
