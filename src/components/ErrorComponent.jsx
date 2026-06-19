import { useRouter } from "next/router";

const ErrorComponent = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5">
      <h1 className="text-3xl font-bold text-red-600">
        Error, Data Not Found
      </h1>

      <button
        className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
        onClick={() => router.replace("/")}
      >
        Back To Home
      </button>
    </div>
  );
};

export default ErrorComponent;