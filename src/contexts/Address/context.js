import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { useAuth } from "../index";
import { addressReducer } from "./reducer";
import { addAddress, DeleteAddress, editAddress } from "./utils";
import { ShowToast } from "../../components";
const AddressContext = createContext(null);
const AddressProvider = ({ children }) => {
  const initialData = {
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    number: "",
  };
  const [showForm, setShowForm] = useState(false);
  const [newAddress, setNewAddress] = useState(initialData);
  const [isEdit, setIsEdit] = useState(false);
  const [addressState, addressDispatch] = useReducer(addressReducer, {
    addresses: [],
  });
  const { loggedIn } = useAuth();
  const token = localStorage.getItem("UserToken");

  const getAddresses = async (addressDispatch) => {
    try {
      const res = await axios.get("/api/user/address", {
        headers: {
          authorization: token,
        },
      });
      if (res.status === 200) {
        addressDispatch({ type: "GET_ADDRESS", payload: res.data.addressList });
      }
    } catch (error) {
      ShowToast("Something Went wrong, Please try again later.", "error");
    }
  };
  useEffect(() => {
    if (loggedIn) {
      getAddresses(addressDispatch);
    }
  }, [loggedIn]);

  return (
    <AddressContext.Provider
      value={{
        showForm,
        setShowForm,
        newAddress,
        isEdit,
        setIsEdit,
        setNewAddress,
        addressState,
        addressDispatch,
        addAddress,
        DeleteAddress,
        editAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { useAddress, AddressProvider };
