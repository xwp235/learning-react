import './index.scss'
import Api from '../../api'
import {useEffect, useState, useRef} from 'react'
import BScroll from '@better-scroll/core'

const supportClasses = ['decrease', 'discount', 'special', 'invoice', 'guarantee']

function Goods() {
    const [goods, setGoods] = useState([])

    const menuWrapperRef = useRef(null)
    const foodsWrapperRef = useRef(null)
    const menuScrollRef = useRef(null)
    const foodsScrollRef = useRef(null)

    const handleScroll = pos => {
        console.log('当前滚动位置', pos)
    }

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

    useEffect(() => {
        if (goods.length) {
            // 初始化 menuWrapper 的 BScroll 实例
            if (menuWrapperRef.current) {
                menuScrollRef.current = new BScroll(menuWrapperRef.current, {
                    scrollX: false,
                    scrollY: true,
                    click: true
                })
            }

            // 初始化 foodsWrapper 的 BScroll 实例
            if (foodsWrapperRef.current) {
                foodsScrollRef.current = new BScroll(foodsWrapperRef.current, {
                    scrollX: false,
                    scrollY: true,
                    click: true,
                    probeType: 3
                })
                // 添加 scroll 事件监听
                foodsScrollRef.current.on('scroll', handleScroll)
            }
        }

        // 组件卸载时销毁 BScroll 实例
        return () => {
          if (menuScrollRef.current) {
              menuScrollRef.current.destroy()
              menuScrollRef.current = null
          }
          if (foodsScrollRef.current) {
              foodsScrollRef.current.off('scroll', handleScroll)
              foodsScrollRef.current.destroy()
              foodsScrollRef.current = null
          }
        }
    }, [goods])

    return <div className="goods">
        <div className="menu-wrapper" ref={menuWrapperRef}>
            {goods.length > 0 && <ul>{
                goods.map((item, index) => <li key={index} className="menu-item">
                    <p className="text border-1px">
                        {item.type > 0 && <i className={`icon ${supportClasses[item.type]}`}></i>}
                        {item.name}
                    </p>
                </li>)
            }</ul>}
        </div>
        <div className="foods-wrapper" ref={foodsWrapperRef}>
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