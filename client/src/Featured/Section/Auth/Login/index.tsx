import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ApiServices from "../../../../Services/http";
import toast from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

interface LoginValues {
  email: string;
  password: string;
}

const LoginSection = () => {
  const api = new ApiServices("http://localhost:1337/api");
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

 const handleSubmit = async (
  values: LoginValues,
  { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
) => {
  try {
  
    const res = await api.PostData("/auth/local", {
      identifier: values.email.trim(),
      password: values.password,
    });

 
    if (res?.jwt) {
      localStorage.setItem("token", res.jwt);
      toast.success("Login successful!");
      setTimeout(() => navigate({ to: "/" }), 700);
    } else {
      console.log("Full response:", res); 
      toast.error("Login failed!");
    }
  } catch (error: any) {
    toast.error(
      error?.response?.data?.error?.message || "Login failed!"
    );
  } finally {
    setSubmitting(false);
  }
};


  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white relative">
      <div className="relative z-10 bg-white shadow-lg rounded-xl p-10 w-[476px] h-[704px] border border-gray-100 overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/649f27305d1155b565499f0b_sign-up-bg-shape-jobboardly-x-webflow-template.jpg"
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-white/80"></div>

        <div className="relative z-10">
          <div className="flex flex-col  mb-6">
            <img
              className="w-[54px] h-[54px] rounded-md mb-4 border border-gray-200 shadow-2xl"
              src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/649f0819a0f423d754ad6c0b_user-circle-icon-jobboardly-x-webflow-template.png"
              alt=""
            />
            <h2 className="text-[28px] text-start mb-1.5 font-semibold leading-[37px]">
              Welcome back
            </h2>
            <p className="text-[16px] text-gray-500 mb-4">
              Please fill your email and password to sign in.
            </p>
          </div>

          <Formik<LoginValues>
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />

                  <div className="flex justify-between items-center mt-2 text-sm">
                    <label className="flex items-center gap-1">
                      <input type="checkbox" />
                      Remember me
                    </label>
                    <a href="#" className="text-blue-600 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Loading..." : "Sign In"}
                </button>

                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                  <span className="h-px w-1/4 bg-gray-200"></span>
                  OR
                  <span className="h-px w-1/4 bg-gray-200"></span>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="w-full border flex items-center justify-center gap-2 border-slate-200 rounded-md py-3 text-sm bg-white/70 backdrop-blur">
                    <img
                      src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/649f0c2315dc80cd1cd07d89_google-icon-simple-jobboardly-x-webflow-template.svg"
                      alt=""
                    />
                    Sign in with Google
                  </div>
                  <div className="w-full flex border gap-3 items-center justify-center border-slate-200 rounded-md py-3 text-sm bg-white/70 backdrop-blur">
                    <img
                      src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/649f0c1f199b481b53c882a3_facebook-icon-simple-jobboardly-x-webflow-template.svg"
                      alt=""
                    />
                    Sign in with Facebook
                  </div>
                </div>
              </Form>
            )}
          </Formik>

          <p className="text-center text-sm text-gray-500 mt-5">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Sign up today
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
