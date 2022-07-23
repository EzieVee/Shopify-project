import { stringify } from "querystring"
import getAllProductQuery from '../Utils/queries/get-all-products'
import fetchApi from "../Utils/fetch-api"
import {Product, ProductConnection} from '../schema'
import {normalizeProduct} from '../Utils/normalize'


type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
  const {data} = await fetchApi<ReturnType>({query: getAllProductQuery})
  
 const products = data.products.edges.map(( {node: product} ) => 
  normalizeProduct(product)
  ) ?? []


  return products
}

export default getAllProducts