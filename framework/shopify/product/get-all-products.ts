import { stringify } from "querystring"
import {
  fetchApi,
  normalizeProduct,
  getAllProductQuery
} from "../Utils"

import {ProductConnection} from '../schema'
import {Product} from '@common/types/product'
// import getAllProductQuery from '../Utils/queries/get-all-products'
// import {normalizeProduct} from '../Utils/normalize'


type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (): Promise<Product[]> => {
  const {data} = await fetchApi<ReturnType>({query: getAllProductQuery})
  
 const products = data.products.edges.map(( {node: product} ) => 
  normalizeProduct(product)
  ) ?? []


  return products
}

export default getAllProducts