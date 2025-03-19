const sampleArr = [
    {
      key: "AUDIO001",
      name: "Wireless Headphones",
      price: 99.99,
      category: "audio",
      dimensions: "20x15x10 cm",
      description: "High-quality wireless headphones with noise cancellation.",
      availability: true,
      Image: [
        "https://example.com/images/wireless-headphones.png",
        "https://example.com/images/wireless-headphones-side.png",
      ],
    },
    {
      key: "AUDIO002",
      name: "Bluetooth Speaker",
      price: 49.99,
      category: "audio",
      dimensions: "12x8x8 cm",
      description: "Portable Bluetooth speaker with deep bass and 10-hour battery life.",
      availability: true,
      Image: [
        "https://example.com/images/bluetooth-speaker.png",
        "https://example.com/images/bluetooth-speaker-back.png",
      ],
    },
    {
      key: "LIGHTS001",
      name: "LED Stage Light",
      price: 79.99,
      category: "lights",
      dimensions: "30x30x20 cm",
      description: "High-intensity LED stage light with multiple color modes.",
      availability: true,
      Image: [
        "https://example.com/images/led-stage-light.png",
        "https://example.com/images/led-stage-light-remote.png",
      ],
    },
    {
      key: "AUDIO003",
      name: "Studio Microphone",
      price: 119.99,
      category: "audio",
      dimensions: "15x5x5 cm",
      description: "Professional studio microphone for recording and streaming.",
      availability: true,
      Image: [
        "https://example.com/images/studio-microphone.png",
        "https://example.com/images/studio-microphone-stand.png",
      ],
    },
  ];
  
  
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import Items from "../home/items";
export default function AdminItemsPage(){
const [items,setItems]=useState(sampleArr)

    return(
        <div className="w-full h-full relative ">
            <table>
               <thead>
                   <th>Key</th>
                   <th>Name</th>
                   <th>Price</th>
                   <th>Category</th>
                   <th>Dimensions</th>
                   <th>Availability</th>
               </thead>
               <tbody>
                  {
                    items.map((product)=>{
                        console.log(product)
                        return(
                        <tr key={product.key}>
                            <td>{product.key}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.dimensions}</td>
                            <td>{product.availability ? "Available" :"Not Available"}</td>
                        </tr>
                        )
                    })
                  }
               </tbody>
            </table>
            <Link to="/admin/items/add">
                <CiCirclePlus className="text-[70px] absolute right-2 bottom-2 hover:text-red-900 cursor-pointer" />
            </Link>
        </div>
    )
}