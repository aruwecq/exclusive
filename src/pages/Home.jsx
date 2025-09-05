import React,{useEffect} from 'react'
import Banner from '../components/banner/Banner'
import ProduktList from '../components/productList/ProduktList'
import { useDispatch, useSelector } from 'react-redux'
import { getProsuct } from '../components/redux/category/CategotyProduct'
function Home() {
    const { products, loading, error, category } = useSelector((state) => state.product);
    const dispatch = useDispatch();

  
    useEffect(() => {
      dispatch(getProsuct(category));
    }, [category]);
  console.log(products);
  
  return (
    <div>
      Home
      <Banner/>
      <ProduktList data={products}/>
    </div>
  )
}

export default Home
