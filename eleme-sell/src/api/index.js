import request from '../utils/request'

export default {
    getSeller() {
        return request.get('/seller',null,{
            showLoading: false
        })
    },
    getRatings() {
        return request.get('/ratings',null,{
            showLoading: false
        })
    },
    getGoods() {
        return request.get('/goods',null,{
            showLoading: false
        })
    }
}