import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    })
      .then((res) => res.json())
      .then((res) => {
        alert("success");
        console.log(res);
        auth.handleLogin(res.token);
        navigate("/espanol");
      })
      .catch((err) => {});
  }
  return (
    <div>
      <form
        style={{
          marginTop: "100px"
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <input
            style={{ marginBottom: "20px", width: "20%", height: "30px" }}
            value={formState.email}
            onChange={handleChange}
            placeholder="Enter Email....."
            name="email"
          />
        </div>
        <div>
          <input
            style={{ marginBottom: "20px", width: "20%", height: "30px" }}
            value={formState.password}
            onChange={handleChange}
            placeholder="Enter Password...."
            name="password"
            type="password"
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Login;
