import './index.scss'

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
                </div>
            </div>
            <div className="detail-close">
                <i className="icon-close"></i>
            </div>
        </div>}
    </div>
}

export default AppHeader
