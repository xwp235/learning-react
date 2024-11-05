import './index.scss'

function AppHeader({seller}) {

    const supportClasses = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    const supportClass = supportClasses[seller.supports[0].type]

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
                   <i className={`icon ${supportClass}`}></i>
                   <span className="text">{seller.supports[0].description}</span>
               </div>}

           </div>
        </div>
        <div className="bulletin-wrapper">

        </div>
    </div>
}

export default AppHeader
