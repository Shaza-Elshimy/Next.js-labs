import ErrorComponent from "@/components/ErrorComponent";

const Err = () => {
  return (
    <ErrorComponent />
  );
};

Err.getLayout = function(page) {
  return (
    <>
      {page}
    </>
  );
};

export default Err;