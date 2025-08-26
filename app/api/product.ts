import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

// Product type based on fakestoreapi response
export interface Product {
  id?: number; // optional for new products
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export async function getAllProducts(): Promise<Product[]> {
  const res = await axios.get<Product[]>(`${BASE_URL}/products`);
  return res.data;
}

export async function getProductById(id: number): Promise<Product> {
  const res = await axios.get<Product>(`${BASE_URL}/products/${id}`);
  return res.data;
}

export async function addProduct(product: Omit<Product, "id">): Promise<Product> {
  const res = await axios.post<Product>(`${BASE_URL}/products`, product, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
}

export async function updateProduct(
  id: number,
  product: Partial<Product>
): Promise<Product> {
  const res = await axios.put<Product>(`${BASE_URL}/products/${id}`, product, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
}

export async function deleteProductById(id: number): Promise<Product> {
  const res = await axios.delete<Product>(`${BASE_URL}/products/${id}`);
  return res.data;
}
