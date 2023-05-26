import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../data/Login.css';
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const Login = () => {
 
//   const [user, setUser] = useState({
//     uname: "",
//     password: ""
// })

// const handleChange = e => {
//     console.log(e.target)
//     const {name , value} = e.target
//     setUser({
//         ...user,
//         [name]: value
//     })
// }

// const login = () => {
//   axios.post("http://localhost:8000/login", user)
//   .then(res => {
//       alert(res.data.message)
//       setLoginUser(res.data.user)
//       // history.push("/")
//   })
// }
const history = useNavigate();

const [username,setUsername] = useState('')
const [password,setPassword] = useState('')

async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:8000/login",{
            username,password
        })
        .then(res=>{
          if(res.data == "exist"){
            toast.success("Login Successfully",{
            position: toast.POSITION.TOP_CENTER,className: "noti"
          });
            history("/homelogin")
          }else if(res.data == "not exist"){
            toast.error("User Have Not Signup",{
              position: toast.POSITION.TOP_CENTER,className: "noti"
            });
          }
        })
        .catch(e=>{
          toast.error("Wrong Detail",{
            position: toast.POSITION.TOP_CENTER,className: "noti"
          });
          console.log(e);
        })

    }
    catch(e){
        console.log(e);
    }
}

  return (

    <div className="LoginPage">
      <div className="text-header">
        <h1>Sign in</h1>
      </div>
      
      <div className="Login-form">
      <Navbar />
        <form className="container">
          <div className="card border-0 center">
            <div className="card-body">
              <div className="form-group">
                <input type="text" name="uname" onChange={(e)=>{ setUsername(e.target.value)}} className="input-control " placeholder="Your Username"></input>
              </div>
              <div className="form-group">
                <input type="password" name="password" onChange={(e)=>{ setPassword(e.target.value)}}className="input-control " placeholder="Password"
                ></input>
              </div>
            </div>
            <div className="checked-box">
                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                <label className="label-agree-term"><span><span></span></span>Remember me</label>
            </div>

            <div className="card-footer border-0">
              <button type="submit" className="btn btn-primary edit" onClick={submit}>
                Login
              </button>{" "}

            </div>
          </div>
        </form>
            <div className="Regis-text">
            Don't have an account? <Link to={"/register"} ><b className="text-link">Sign up</b></Link>
            </div>
        
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
    
  );
};

export default Login;
