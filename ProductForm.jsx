import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createProduct } from "../api/productApi";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await createProduct(data);
      toast.success("Product created successfully!");
      navigate("/products");
    } catch (error) {
      toast.error("Failed to create product.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Product Name</label>
        <input
          {...register("name", { required: "Product name is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          {...register("price", { required: "Price is required" })}
        />
        {errors.price && <p>{errors.price.message}</p>}
      </div>
      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductForm;
