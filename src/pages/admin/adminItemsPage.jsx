import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function AdminItemsPage() {
  const [items, setItems] = useState([]);
  const [itemsLoaded,setItemsLoaded]=useState(false)

  useEffect(() => {

    if(!itemsLoaded){
      const token = localStorage.getItem("token");
      axios.get("http://localhost:3005/api/products", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => 
          {
            setItems(res.data)
            setItemsLoaded(true)
          })
        .catch((err) => {
          console.error(err)
    });
    }
    
  }, [itemsLoaded]);

  const handleDelete = (key) => {
    if(window.confirm("Are you sure you want to delete this item?")){
    setItems(items.filter(item => item.key !== key));
    const token=localStorage.getItem("token")
    axios.delete(`http://localhost:3005/api/products/${key}`,{
      headers:{Authorization:`Bearer ${token}`},
    }).then(
      (res)=>{
        console.log(res.data)
        setItemsLoaded(false);
      }
    ).catch(
      (err)=>{
        console.error(err)
      }
    )
  }
  };


  return (
    <div className=" w-full h-full p-4 relative flex items-center flex-col">
      {!itemsLoaded &&<div className="border-4 my-4 border-b-green-500 rounded-full animate-spin bg-0 w-[100px] h-[100px] "></div>}
      {itemsLoaded &&<div className="overflow-x-auto">
        <table className="bg-white border-collapse shadow-md text-left w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4">Key</th>
              <th className="p-4">Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Category</th>
              <th className="p-4">Dimensions</th>
              <th className="p-4">Availability</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((product) => (
              <tr key={product.key} className="border-b hover:bg-gray-100">
                <td className="p-4">{product.key}</td>
                <td className="p-4">{product.name}</td>
                <td className="p-4">${product.price.toFixed(2)}</td>
                <td className="p-4 capitalize">{product.category}</td>
                <td className="p-4">{product.dimensions}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-md text-sm ${product.availability ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                    {product.availability ? "Available" : "Not Available"}
                  </span>
                </td>
                <td className="flex p-4 gap-2">
                  <Link to={`/admin/items/edit/${product.key}`}>
                  <button
                    className="bg-blue-500 rounded-md text-white hover:bg-blue-700 px-3 py-1 transition">
                    Edit
                  </button>
                  </Link>
                  <button
                    className="bg-red-500 rounded-md text-white hover:bg-red-700 px-3 py-1"
                    onClick={() => handleDelete(product.key)}
                  >
                    Delete
                  </button>
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>}
      <Link to="/admin/items/add" className="bottom-4 fixed right-4">
        <CiCirclePlus className="text-6xl text-blue-600 hover:text-blue-800" />
      </Link>
    </div>
  );
}
