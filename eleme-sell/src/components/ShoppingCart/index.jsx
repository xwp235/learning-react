import './index.scss'

function ShoppingCart() {
  return <div className="shopping-cart">
    <div className="content-left">
        <div className="logo-wrapper">
            <div className="logo">
                <i className="icon-shopping_cart"></i>
            </div>
        </div>
        <div className="price"></div>
        <div className="desc"></div>
    </div>
    <div className="content-right"></div>
  </div>
}

export default ShoppingCart