import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/slices/userSlices";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onHandleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const payload = {
        username,
        password,
      };
      dispatch(userLogin(payload))
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          setError(err);
        });
    },
    [username, password]
  );
  return (
    <div className="login-page flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={onHandleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">UserName</label>
            <input
              type="text"
              name="name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default memo(Login);
