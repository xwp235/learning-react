import './index.scss'

import {NavLink} from 'react-router-dom'

function AppTabs() {

    const tabs = [
        {
            title: '商品',
            path: '/goods'
        },
        {
            title: '评论',
            path: '/ratings'
        },
        {
            title: '商家',
            path: '/sellers'
        }
    ].map((tabItem, index) => <div className="tab-item" key={index}>
        <NavLink to={tabItem.path}>{tabItem.title}</NavLink>
    </div>)
    return <div className="tabs border-1px">
        {tabs}
    </div>
}

export default AppTabs
