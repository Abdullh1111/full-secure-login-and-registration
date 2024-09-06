import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserDataQuery } from "../service/userApi";
import { useAppDispatch } from "../hooks/redux";
import { userData } from "../features/user/userSlice";

const PrivateRoute = ({
  // redirect,
  children,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}) => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetUserDataQuery();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isLoading) {
      if (error) {
        navigate("login");
      }
      if (data) {
        dispatch(userData(data.data));
        return navigate("/");
      }
      if (!data) {
        return navigate(`/login`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, isLoading]);
  return <div>{isLoading && "loading" }</div>;
};

export default PrivateRoute;
