export const metadata = {
  title: "Sign In - Simple",
  description: "Page description",
};

import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <div className="w-full p-2 flex">
        <div className="card m-4 p-4 h-100 border-2 bg-white w-full max-w-md">
          <div className="p-3 text-muted"></div>
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold">Sign in to your account</h1>
          </div>
          {/* Form */}
          <form>
            <div className="space-y-4 text-right ">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  className="form-input w-full py-2"
                  type="email"
                  placeholder="corybarker@email.com"
                  required
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  className="form-input w-full py-2"
                  type="password"
                  autoComplete="on"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <button className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]">
                Sign In
              </button>
            </div>
          </form>
          {/* Bottom link */}
          <div className="mt-6 text-right">
            <Link
              className="text-sm text-gray-700 underline hover:no-underline"
              href="/reset-password"
            >
              Forgot password
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
