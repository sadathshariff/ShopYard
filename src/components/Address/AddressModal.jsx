import "./AddressModal.css";
import { useAddress } from "../../contexts";
import { useState } from "react";
import { ShowToast } from "../../components";
export const AddressModal = () => {
  const initialData = {
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    number: "",
  };
  const {
    showForm,
    setShowForm,
    addAddress,
    addressDispatch,
    newAddress,
    setNewAddress,
    isEdit,
    setIsEdit,
    editAddress,
  } = useAddress();
  const token = localStorage.getItem("UserToken");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewAddress({ ...newAddress, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      editAddress(newAddress, token, addressDispatch);
    } else {
      addAddress(newAddress, token, addressDispatch);
    }
    setIsEdit(false);
    setNewAddress(initialData);
    setShowForm(false);
  };
  const handleCancel = () => {
    setNewAddress(initialData);
    setShowForm(false);
  };

  return (
    <div className="addressmodal-container">
      <button
        className="btn btn-primary"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Hide Form" : "Add Address"}
      </button>

      <div style={{ display: showForm ? "block" : "none" }}>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newAddress.name}
              onChange={(e) => handleChange(e)}
              required
              className="input-text"
            />
          </div>
          <div className="input">
            <label htmlFor="Number">Number*</label>
            <input
              type="number"
              id="Number"
              className="input-text"
              name="number"
              required
              value={newAddress.number}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input">
            <label htmlFor="Address">Street*</label>
            <input
              type="text"
              id="street"
              className="input-text"
              name="street"
              value={newAddress.street}
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input">
            <label htmlFor="City">City*</label>
            <input
              type="text"
              id="City"
              className="input-text"
              value={newAddress.city}
              name="city"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input">
            <label htmlFor="State">State*</label>
            <input
              type="text"
              id="State"
              className="input-text"
              value={newAddress.state}
              required
              name="state"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="input">
            <label htmlFor="country">Country*</label>
            <input
              type="text"
              id="country"
              className="input-text"
              value={newAddress.country}
              required
              name="country"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="input">
            <label htmlFor="Pincode">Pincode*</label>
            <input
              type="number"
              id="Pincode"
              className="input-text"
              required
              value={newAddress.pincode}
              name="pincode"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="input">
            <div className="grid grid-col-2">
              <button
                type="reset"
                className="btn btn-danger"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-outline-primary">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
