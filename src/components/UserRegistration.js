import { useFormik } from "formik";

const UserRegistration = () => {

  useFormik({
    initialValues: initialValues,
    onSubmit: (values)
  })

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input className="" name="email" id="email" autoComplete="off" type="email" value={email} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" autoComplete="off" value={password} />
        </div>
      </form>
    </div>
  )
}

export default UserRegistration;