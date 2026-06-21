import { useState } from "react";

const ProductForm = ({ onSubmit, initialData = {} }) => {

  const [title, setTitle] = useState(
    initialData.title || ""
  );

  const [price, setPrice] = useState(
    initialData.price || ""
  );

  const [description, setDescription] = useState(
    initialData.description || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      title,
      price,
      description,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="border p-2"
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
        className="border p-2"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        className="border p-2"
      />

      <button
        className="bg-black text-white p-2"
      >
        Save
      </button>
    </form>
  );
};

export default ProductForm;