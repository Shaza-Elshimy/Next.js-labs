import { useRouter } from "next/router";

const Docs = () => {
  const router = useRouter();

  const { params = [] } = router.query;

  return (
    <div>
      <h1>{params.join(" / ")}</h1>
    </div>
  );
};

export default Docs;