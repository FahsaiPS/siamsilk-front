import {React, useState } from "react";
import { toast } from "react-toastify";
import '../data/Register.css';
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Register = () => {

    // const history = useHistory();
    
    // const [user, setUser] = useState({
    //     uname: "",
    //     password: "",
    //     fname:"",
    //     email: "",
    //     phone: "",
    //     address: "",
    // })

    // const handleChange = e => {
    //     console.log(e.target)
    //     const {name , value} = e.target
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }

    // const register = () => {
    //     const  { uname, password, fname, email, phone,  address } = user
    //     if( uname && password && fname && email && phone && address){
    //         axios.post("http://localhost:8000/register", user )
    //         .then( res => {
    //             alert(res.data.message)
    //             // history.push("/login")
    //         })
    //     } else {
    //         alert("invlid input")
    //     }
        
    // }
    const history = useNavigate();

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [fullname,setFullname] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [country,setCountry] = useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/register",{
                username,password,fullname,email,phone,address,country
            })
            .then(res=>{
                if(res.data == "exist"){
                toast.error("User Already Exists",{
                position: toast.POSITION.TOP_CENTER,className: "noti"
                });
                }else if(res.data == "not exist"){
                toast.success('Registered Successfully.',{
                 position: toast.POSITION.TOP_CENTER,className: "noti"
                 })
                history("/login")
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
        <div className="RegisterPage">
            <Navbar />
            <div className="text-header">
            <h1>Sign up</h1>
            </div>
            {/* {console.log("User",user)} */}
            <div className="Register-form"> 
                <form className="container" action="POST" >
                    

                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>User Name <span className="errmsg">*</span></label>
                                        <input type="text" name="uname" className="input-control" onChange={(e)=>{ setUsername(e.target.value)}} ></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input  type="password" name="password" className="input-control" onChange={(e)=>{ setPassword(e.target.value)}}></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Full Name <span className="errmsg">*</span></label>
                                        <input type="text" name="fname" className="input-control" onChange={(e)=>{ setFullname(e.target.value)}}></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input type="text" name="email" className="input-control" onChange={(e)=>{ setEmail(e.target.value)}}></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg"></span></label>
                                        <input type="text" name="phone" className="input-control" onChange={(e)=>{ setPhone(e.target.value)}}></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Country <span className="errmsg">*</span></label>
                                        <select onChange={(e)=>{ setCountry(e.target.value)}} className="input-control">
                                            <option value="thailand">Thailand</option>
                                            <option value="australia">Australia</option>
                                            <option value="canada">Canada</option>
                                            <option value="singapore">Singapore</option>
                                            <option value="usa">USA</option>
                                        </select>
                                    </div>
                                </div>

                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea type="text" name="address" className="input-control" onChange={(e)=>{ setAddress(e.target.value)}}></textarea>
                                    </div>
                                </div>

                            </div>

                        </div>
                        
                            <button type="submit" className="btn btn-primary edit" onClick={submit}>Register</button>
                            {/* <Link to={'/login'} className="btn btn-danger edit">Close</Link> */}
                        
                    
                </form>
            </div>
        <footer>
            <Footer />
        </footer>

        </div>
    );
}

export default Register;