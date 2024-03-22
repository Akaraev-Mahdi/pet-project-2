import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registration } from "../http/userApi";
import '../style/auth.css'

function Regist() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const auth = async () => {
    try {
        await registration(email, password)
        window.location.reload(navigate('/'))
    } catch (error) {
        alert(error.response.data.message)
    }
  }

  return (
    <div className='auth-column'>
        <div className='regist-text'>РЕГИСТРАЦИЯ</div>
        <input value={email} onChange={e => setEmail(e.target.value)} className='input' placeholder='Логин'/>
        <input value={password} onChange={e => setPassword(e.target.value)} className='input' placeholder='Пароль'/>
        <div className='buttons'>
            <a href='/login' className='login-href'>ВОЙТИ</a>
            <button onClick={() => auth()} className='regist'>РЕГИСТ</button>
        </div>
    </div>
  );
}

export default Regist;