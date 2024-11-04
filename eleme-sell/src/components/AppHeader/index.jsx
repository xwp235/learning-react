import './index.scss'
import Api from '../../api'
import {useEffect, useState} from 'react'

function AppHeader() {

    const [seller, setSeller] = useState(null)

    useEffect(() => {
        async function fetchSeller() {
            const sellerData = await Api.getSeller()
            if (!ignore) {
                setSeller(sellerData)
            }
        }

        let ignore = false
        fetchSeller()
        return () => ignore = true
    }, [])

    return <div className="app-header">{seller.name}</div>
}

export default AppHeader
