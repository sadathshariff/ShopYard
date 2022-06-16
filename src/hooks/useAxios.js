import axios from "axios";
import { useState, useEffect } from "react";
export const UseAxios = (apiUrl) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(apiUrl);
      setResponse(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, [apiUrl]);
  return { response, loading, error };
};
