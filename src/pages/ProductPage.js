import { useParams } from 'react-router'
import Product from '../Components/Product/Product'

function ProductPage() {
    const {id}=useParams();
    return (
        <Product id={id}/>
    )
}

export default ProductPage
