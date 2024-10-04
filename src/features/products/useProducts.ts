import { AxiosResponse } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { getAllProductsApi } from '../services/productService'

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

type Products = Product[]

export default function useProducts(): {
  isProductsLoading: boolean
  products: Products | undefined
} {
  const { isLoading: isProductsLoading, data: productsResponse } = useQuery<
    AxiosResponse<Products>
  >({
    queryFn: getAllProductsApi,
    queryKey: ['products'],
  })

  const products = productsResponse?.data

  return { isProductsLoading, products }
}
