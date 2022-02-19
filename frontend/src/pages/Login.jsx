import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const { email, password } = formData
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please login</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text"
              className='form-control'
              name="email"
              id="email"
              value={email}
              placeholder='Please enter your email'
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input type="text"
              className='form-control'
              name="password"
              id="password"
              value={password}
              placeholder='Please enter your password'
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type='submit' className="btn btn-block">Start setting goals</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login