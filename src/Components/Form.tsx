import React,{useState} from 'react';

const Form:React.FC = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [secureCode,setSecureCode] = useState('')
    const [option,setOption] = useState('Secure Questions')

    const submitHandler = (e:any) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="email">Enter Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" name='email' placeholder='Enter Email'/>

            <label htmlFor="password">Enter Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder='Enter Password'/>

            <label htmlFor="securecode">Enter Secure Code </label>
            <input onChange={(e) => setSecureCode(e.target.value)} type="text" name='securecode' placeholder='Enter Secure Code'/>

            <label htmlFor="verify">Enter Secure Code </label>
            <select value={option} onChange={(e) => setOption(e.target.value)} name="verify" id="verify">
                <option value="Via Sms">Via Sms</option>
                <option value="Secure Questions">Secure Questions</option>
                <option value="Request A Call">Request A Call</option>
            </select>

            <button>Log In</button>
        </form>
    );
};

export default Form;
