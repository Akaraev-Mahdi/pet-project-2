import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from "../http/userApi";
import '../style/auth.css'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const auth = async () => {
    try {
        await login(email, password)
        window.location.reload(navigate('/'))
    } catch (error) {
        alert(error.response.data.message)
    }
  }

  return (
    <div className='auth-column'>
        <div className='regist-text'>ВХОД</div>
        <input value={email} onChange={e => setEmail(e.target.value)} className='input' placeholder='Логин'/>
        <input value={password} onChange={e => setPassword(e.target.value)} className='input' placeholder='Пароль'/>
        <div className='buttons'>
            <a href='/regist' className='login-href'>РЕГИСТ</a>
            <button onClick={() => auth()} className='regist'>ВОЙТИ</button>
        </div>
    </div>
  );
}

export default Login;