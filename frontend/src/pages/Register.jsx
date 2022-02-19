import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
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

  const { name, email, password, password2 } = formData
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register Here
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text"
              className='form-control'
              name="name"
              id="name"
              value={name}
              placeholder='Please enter your name'
              onChange={onChange}
            />
          </div>
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
            <input type="text"
              className='form-control'
              name="password2"
              id="password2"
              value={password2}
              placeholder='Please confirm your password'
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type='submit' className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register