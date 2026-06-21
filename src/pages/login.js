import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">

      <button
        onClick={() => signIn("github")}
        className="bg-black text-white px-5 py-3 rounded"
      >
        Login With GitHub
      </button>

    </div>
  );
};

export default Login;