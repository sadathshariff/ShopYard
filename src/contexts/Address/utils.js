import axios from "axios";
import { ShowToast } from "../../components";
export const DeleteAddress = async (address, addressDispatch) => {
  try {
    const res = await axios.delete(`/api/user/address/${address._id}`, {
      headers: { authorization: localStorage.getItem("UserToken") },
    });
    if (res.status === 200) {
      ShowToast("Address deleted  successfully!", "success");
      addressDispatch({
        type: "DELETE_ADDRESS",
        payload: res.data.addressList,
      });
    }
  } catch (error) {
    ShowToast("Failed to delete Address,Please try again later.", "error");
  }
};

export const addAddress = async (address, token, addressDispatch) => {
  try {
    const res = await axios.post(
      "/api/user/address/",
      { address },
      { headers: { authorization: token } }
    );

    if (res.status === 201) {
      addressDispatch({ type: "SET_ADDRESS", payload: res.data.addressList });
      ShowToast("Added New Address successfully.", "success");
    }
  } catch (error) {
    ShowToast("Failed to add address, Please try again later.", "error");
  }
};

export const editAddress = async (address, token, addressDispatch) => {
  try {
    const res = await axios.post(
      `/api/user/address/${address._id}`,
      { address },
      { headers: { authorization: token } }
    );
    if (res.status === 200) {
      addressDispatch({
        type: "UPDATE_ADDRESS",
        payload: res.data.addressList,
      });
      ShowToast("Address updated successfully.", "success");
    }
  } catch (error) {
    ShowToast("Failed to update address, Please try again later.", "error");
  }
};
