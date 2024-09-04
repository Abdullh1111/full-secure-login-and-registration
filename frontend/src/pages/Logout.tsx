import { useEffect } from "react";
import { handleFetchError, handleSuccess } from "../hooks/Toast";
import { useLazyLogOutQuery } from "../service/userApi";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const [trigger, { data, error, isLoading }] = useLazyLogOutQuery();
  useEffect(() => {
    if (data) {
      handleSuccess(data.message);
    }
    if (error) {
      handleFetchError(error);
    }
  }, [data, error]);
  const handleLogOut = () => {
    trigger();
    navigate("/login");
  };
  return (
    <div>
      <button onClick={handleLogOut} className="btn btn-primary mt-5">
        {isLoading ? "Loading..." : "Logout"}
      </button>
    </div>
  );
};

export default Logout;
