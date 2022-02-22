import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
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

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password
      }
      dispatch(register(userData))
    }
  }

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())

  }, [user, isSuccess, message, isError, navigate, dispatch]

  )
  if (isLoading) {
    return Spinner
  }

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