import './index.scss'

function ShoppingCart({
  deliveryPrice = 0,
  minPrice = 0,
  selectedGoods = []
}) {

  const totalPrice = selectedGoods.reduce((total, food) => total + food.price * food.count, 0)
  const totalCount = selectedGoods.reduce((count, food) => count + food.count, 0)
  const payDesc = totalPrice === 0 ? `￥${minPrice}元起送` : totalPrice < minPrice ? `还差￥${minPrice - totalPrice}元起送` : '去结算'

    return <div className="shopping-cart">
      <div className="content">
          <div className="content-left">
              <div className="logo-wrapper">
                  <div className={`logo ${totalCount > 0 ? 'highlight' : ''}`}>
                      <i className="icon icon-shopping_cart"></i>
                  </div>
                  {totalCount > 0 && <div className="num">
                      {totalCount}
                  </div>}
              </div>
              <div className={`price ${totalPrice > 0 ? 'highlight' : ''}`}>￥{totalPrice}元</div>
              <div className="desc">{`另需配送费￥${deliveryPrice}元`}</div>
          </div>
          <div className="content-right">
              <div className={`pay ${totalPrice < minPrice ? 'not-enough' : 'enough'}`}>
                  {payDesc}
              </div>
          </div>
      </div>
  </div>
}

export default ShoppingCart