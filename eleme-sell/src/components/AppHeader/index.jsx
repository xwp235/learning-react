import './index.scss'
import Star from '../Star'
import {useState} from 'react'

const supportClasses = ['decrease', 'discount', 'special', 'invoice', 'guarantee']

function AppHeader({seller}) {

    const iconCls = `icon ${supportClasses[seller.supports[0].type]}`
    const [detailShow, setDetailShow] = useState(false)

    const showDetail = () => setDetailShow(true)

    return <div className="app-header">
        <div className="app-header-wrapper">
           <div className="avatar">
               <img className="avatar-img" src={seller.avatar} alt={seller.name}/>
           </div>
           <div className="content">
               <div className="title">
                   <span className="brand"></span>
                   <span className="name">{seller.name}</span>
               </div>

               <div className="description">
                   {seller.description}/{seller.deliveryTime}分钟送达
               </div>

               {seller.supports && <div className="support">
                   <i className={iconCls}></i>
                   <span className="text">{seller.supports[0].description}</span>
               </div>}

           </div>
            {seller.supports && <div className="support-count" onClick={showDetail}>
                <span className="count">{seller.supports.length}个</span>
                <i className="icon-keyboard_arrow_right"></i>
            </div>}
        </div>
        <div className="bulletin-wrapper" onClick={showDetail}>
            <span className="bulletin-title"></span>
            <span className="bulletin-text">{seller.bulletin}</span>
            <i className="icon-keyboard_arrow_right"></i>
        </div>
        <div className="background">
            <img src={seller.avatar} width="100%" height="100%" alt="background"/>
        </div>
        {detailShow && <div className="detail">
            <div className="detail-wrapper clearfix">
                <div className="detail-main">
                    <h1 className="name">{seller.name}</h1>
                    <div className="star-wrapper">
                        <Star size={48} score={seller.score}/>
                    </div>
                    <div className="title">
                        <div className="line"></div>
                        <div className="text">优惠信息</div>
                        <div className="line"></div>
                    </div>
                    {seller.supports && <ul className="supports">
                        {
                            seller.supports.map((item, index) => <li className="support-item" key={index}>
                                <i className={`icon ${supportClasses[item.type]}`}></i>
                                <span className="text">{item.description}</span>
                            </li>)
                        }
                    </ul>}
                    <div className="title">
                        <div className="line"></div>
                        <div className="text">商家公告</div>
                        <div className="line"></div>
                    </div>
                    <div className="bulletin">
                        <p className="content">
                            {seller.bulletin}
                        </p>
                    </div>
                </div>
            </div>
            <div className="detail-close">
                <i className="icon-close"></i>
            </div>
        </div>}
    </div>
}

export default AppHeader
