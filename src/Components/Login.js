import React,{useState} from 'react'
import {Link, Navigate} from 'react-router-dom'
import {auth} from '../Config/Config'
//import {useHistory} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import AddProducts from './AddProducts'



export const Login = () => {


    //const history = useHistory();
    const navigate = useNavigate();

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

  

    const handleLogin=(e)=>{
        console.log('roni')
        if (email==="admin@gmail.com" && password === "admin@gmail.com") {  //jodi admin hoy            
         setSuccessMsg('Admin Login Successfull. You will now automatically get redirected to Home page');
            setEmail('');   //sob gula text field ke 0 kore ibo
            setPassword('');
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
                console.log('ok fine');
                //history.push('/');
                navigate('/');
            },3000)
        
        } 
        
        else {  // jodi admin na hoy
           e.preventDefault();
            auth.signInWithEmailAndPassword(email,password).then(()=>{
            setSuccessMsg('Login Successfull. You will now automatically get redirected to Home page');
            setEmail('');   //sob gula text field ke 0 kore ibo
            setPassword('');
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
                //history.push('/');
                navigate('/');
            },3000)   //3 sec por success message dibo abong redirect hobe
        })
        
        .catch(error=>setErrorMsg(error.message));
        }
    }

    return (
        <div className='container'>
            <br></br>
            <br></br>
            <h1>Login</h1>
            <hr></hr>
            roni@gmail.com <br></br>
            admin@gmail.com
            {successMsg&&<>  
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
            <form className='form-group' autoComplete="off"
            onSubmit={handleLogin}>               
                <label > <h1 className='information pal'>Email</h1></label>
                <input type="email" className='form-control '  required
                onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <br></br>
                <label>Password</label>
                <input type="password" className='form-control' required
                onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <br></br>
                <div className='btn-box'>
                    <span>Don't have an account SignUp
                    <Link to="/signup" className='link'> Here</Link></span>
                    <button type="submit" className='btn btn-success btn-md'>LOGIN</button>
                </div>
            </form>
            {errorMsg&&
            <>   
                <br></br>
                <div className='error-msg'>{errorMsg}</div>                
            </>}
        </div>
    )
}

export default Login;