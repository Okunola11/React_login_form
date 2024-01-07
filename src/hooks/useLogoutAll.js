import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogoutAll = () => {
  const { setAuth } = useAuth();

  const logoutAll = async () => {
    setAuth({});

    try {
      const response = await axios.get("/logoutAll", { withCredentials: true });
    } catch (err) {
      console.error(err);
    }
  };
  return logoutAll;
};

export default useLogoutAll;
