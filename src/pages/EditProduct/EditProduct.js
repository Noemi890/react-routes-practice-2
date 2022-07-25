import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

export function EditProductPage(props) {

  const [productToUpdate, setProductToUpdate] = useState(null);
  
  console.log({ productToUpdate });

  const location = useLocation()

  useEffect(() => {
    if(location.state) {
      const product = location.state
      setProductToUpdate(product)
    }
  },[location])

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setProductToUpdate({ ...productToUpdate, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  if (!productToUpdate) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={productToUpdate.name}
      />
      <button type="submit">Edit</button>
    </form>
  );
}

