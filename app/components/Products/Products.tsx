// import { FaStar } from "react-icons/fa";
import Image from 'next/image'; 
import { getAllProducts, Product } from "@/app/api/product";

export default async function Products() {
  const products: Product[] = await getAllProducts();

  return (
    <section className='py-16 bg-[#f4f1ea]'>
      <h4 className='uppercase text-[#d12525] text-lg font-bold pb-2 text-center'>
        best selling dishes
      </h4>
      <h2 className='uppercase text-[42px] lg:text-[54px] font-extrabold text-center'>
        explore our products
      </h2>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1140px] mx-auto mt-8'>
        {products.map((product) => (
          <div key={product.id} className='bg-white px-5 py-10 flex flex-col items-center'>
            <h4 className='capitalize text-[#212121] text-xl font-semibold text-center'>
              {product.title}
            </h4>
            <h4 className='text-[#d12525] text-xl font-semibold pb-8'>
              price ${product.price.toFixed(2)}
            </h4>
        
            <Image
              src={product.image}
              alt={product.title}
              width={300}  
              height={200} 
              className="object-cover" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}
