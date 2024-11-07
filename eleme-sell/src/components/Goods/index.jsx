import './index.scss'
import Api from '../../api'
import {useEffect, useState} from 'react'

const supportClasses = ['decrease', 'discount', 'special', 'invoice', 'guarantee']

function Goods() {
    const [goods, setGoods] = useState([])

    useEffect(() => {
        async function fetchGoods() {
            const goodsData = await Api.getGoods()
            if (!ignore) {
                setGoods(goodsData)
            }
        }
        let ignore = false
        fetchGoods()

        return () => {
            ignore = true
        }
    }, [])

    return <div className="goods">
        <div className="menu-wrapper">
            {goods.length > 0 && <ul>{
                goods.map((item, index) => <li key={index} className="menu-item">
                    <p className="text border-1px">
                        {item.type > 0 && <i className={`icon ${supportClasses[item.type]}`}></i>}
                        {item.name}
                    </p>
                </li>)
            }</ul>}
        </div>
        <div className="foods-wrapper">
            {goods.length > 0 && <ul>
                {
                  goods.map((item, index) => <li key={index} className="foods-list">
                      <h1 className="title">{item.name}</h1>
                      {
                          item.foods && <ul>
                              {
                                  item.foods.map((food, foodIndex) => <li key={foodIndex} className="food-item border-1px">
                                         <div className="icon">
                                             <img src={food.icon} alt="food-image"/>
                                         </div>
                                          <div className="content">
                                              <h2 className="name">{food.name}</h2>
                                              <p className="desc">{food.description}</p>
                                              <div className="extra">
                                                  <span className="count">月售{food.sellCount}份</span>
                                                  <span>好评率{food.rating}%</span>
                                              </div>
                                              <div className="price">
                                                  <span className="now">￥{food.price}</span>
                                                  {food.oldPrice && <span className="old">{food.oldPrice}</span>}
                                              </div>
                                          </div>
                                  </li>)
                              }
                          </ul>
                      }
                  </li>)
                }
            </ul>}
        </div>
    </div>
}

export default Goods