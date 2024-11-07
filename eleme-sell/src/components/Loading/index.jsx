import './index.scss'
import loading from './loading.gif'

function Loading({title = '加载中'}) {
    return <div className="loading">
        <img src={loading} alt="loading-img"/>
        <p className="loading-text">{title}</p>
    </div>
}

export default Loading