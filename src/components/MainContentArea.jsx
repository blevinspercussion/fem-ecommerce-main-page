import './components.css';
import ProductDetail from './ProductDetail';
import ProductDisplay from './ProductDisplay';

function MainContentArea () {
    return (
        <div id='main-content'>
            <ProductDisplay />
            <ProductDetail />
        </div>
    )
}

export default MainContentArea;