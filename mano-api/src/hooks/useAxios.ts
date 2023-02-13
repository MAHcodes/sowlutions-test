import axios from "axios";
import { useEffect, useState } from "react";
const headerParams = {
  StoreID: process.env.NEXT_PUBLIC_STORE_ID,
  Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION,
  UserAddressID: process.env.NEXT_PUBLIC_USER_ADDRESS_ID,
}

const useFetch = (endpoint: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (endpoint: string) => {
      setLoading(true);

      try {
        const response = await axios.get(endpoint, {
          cancelToken: source.token,
          headers: headerParams,
          method: 'GET',
        });
        if (isMounted) {
          setData(response?.data);
          setError("");
        }
      } catch (e: any) {
        if (isMounted) {
          setError(e.message);
          setData(null);
        }
      } finally {
        isMounted && setLoading(false);
      }
    };

    fetchData(endpoint);

    return () => {
      isMounted = false;
      source.cancel();
    };
  }, [endpoint]);

  return { data, error, loading };
};

export default useFetch;
