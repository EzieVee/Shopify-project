import { stringify } from "querystring"
import getAllProductQuery from '../Utils/queries/get-all-products'
import fetchApi from "../Utils/fetch-api"
import {ProductConnection} from '../schema'
import {normalizeProduct} from '../Utils/normalize'
import {Product} from '../../common/types/product'


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