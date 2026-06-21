import { useState } from "react";

const ProductForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [price, setPrice] = useState(initialData.price || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [category, setCategory] = useState(initialData.category || "");
  const [brand, setBrand] = useState(initialData.brand || "");
  const [rating, setRating] = useState(initialData.rating || "");
  const [image, setImage] = useState(initialData.image || "");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!price || Number(price) <= 0) newErrors.price = "Price must be greater than 0";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!category.trim()) newErrors.category = "Category is required";
    if (!brand.trim()) newErrors.brand = "Brand is required";
    if (!rating || Number(rating) < 0 || Number(rating) > 5) newErrors.rating = "Rating must be between 0 and 5";
    if (!image.trim()) newErrors.image = "Image URL is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await onSubmit({
        title: title.trim(),
        price: Number(price),
        description: description.trim(),
        category: category.trim(),
        brand: brand.trim(),
        rating: Number(rating),
        image: image.trim(),
      });
    } catch (err) {
      setErrors({ form: err.message || "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "border p-2 rounded";
  const errorClass = "border p-2 rounded border-red-500";
  const labelClass = "text-sm font-medium text-gray-700";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      {errors.form && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {errors.form}
        </div>
      )}

      <div>
        <label className={labelClass}>Title</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={errors.title ? errorClass : inputClass}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div>
        <label className={labelClass}>Price</label>
        <input
          type="number"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={errors.price ? errorClass : inputClass}
        />
        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
      </div>

      <div>
        <label className={labelClass}>Description</label>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={errors.description ? errorClass : inputClass}
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      <div>
        <label className={labelClass}>Category</label>
        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={errors.category ? errorClass : inputClass}
        />
        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
      </div>

      <div>
        <label className={labelClass}>Brand</label>
        <input
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className={errors.brand ? errorClass : inputClass}
        />
        {errors.brand && <p className="text-red-500 text-sm mt-1">{errors.brand}</p>}
      </div>

      <div>
        <label className={labelClass}>Rating (0-5)</label>
        <input
          placeholder="Rating"
          type="number"
          step="0.1"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className={errors.rating ? errorClass : inputClass}
        />
        {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
      </div>

      <div>
        <label className={labelClass}>Image URL</label>
        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className={errors.image ? errorClass : inputClass}
        />
        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white p-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default ProductForm;