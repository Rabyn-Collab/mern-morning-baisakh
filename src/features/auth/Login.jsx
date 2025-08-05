import { Button, Input, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import * as Yup from 'yup';

const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(5).required()
});

export default function Login() {
  const [show, setShow] = useState(false);
  const nav = useNavigate();
  return (
    <div className="p-5 max-w-[400px]">

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(val) => {

        }}
        validationSchema={loginSchema}
      >
        {({ handleChange, handleSubmit, values, touched, errors }) => (
          <form onSubmit={handleSubmit} className=" space-y-5">
            <div>
              <Input
                type="email"
                onChange={handleChange}
                name="email" label="Email" />
              {errors.email && touched.email && <span className="text-red-500">{errors.email}</span>}
            </div>

            <div>
              <div className="relative flex ">
                <Input
                  onChange={handleChange}
                  name="password"
                  type={show ? 'text' : 'password'}
                  label="Password"
                  className="pr-20"
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
                <Button
                  onClick={() => setShow((prev) => !prev)}
                  size="sm"
                  variant="text"
                  className="!absolute right-1 top-1 rounded"
                >
                  <i className={`fas ${show ? 'fa-unlock' : 'fa-lock'} fa-lg`} />
                </Button>
              </div>
              {errors.password && touched.password && <span className="text-red-500">{errors.password}</span>}

            </div>


            <Button type="submit">Submit</Button>

          </form>
        )}
      </Formik>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Don't have an account ?
        <Button onClick={() => nav('/register')} variant="text" size="sm" >
          Sign Up
        </Button>
      </Typography>

    </div>
  )
}
