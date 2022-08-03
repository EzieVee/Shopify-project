import { stringify } from "querystring"
import {
  // fetchApi,
  normalizeProduct,
  getAllProductQuery
} from "../Utils"

import {ProductConnection} from '../schema'
import {Product} from '@common/types/product'
// import getAllProductQuery from '../Utils/queries/get-all-products'
// import {normalizeProduct} from '../Utils/normalize'
import {ApiConfig} from "@common/types/api"

type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const {data} = await config.fetch<ReturnType>({
    url: config.apiUrl,
    query: getAllProductQuery})
  
 const products = data.products.edges.map(( {node: product} ) => 
  normalizeProduct(product)
  ) ?? []


  return products
}

export default getAllProducts