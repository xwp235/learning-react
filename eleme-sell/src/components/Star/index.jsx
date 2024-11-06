import './index.scss'

const STAR_LEN = 5
const STAR_CLS_ON = 'on'
const STAR_CLS_HALF = 'half'
const STAR_CLS_OFF = 'off'

function Star({size, score}) {
   const starCls = `star star-${size}`

   const starScore = Math.floor(score * 2) / 2
   const hasDecimal = starScore % 1 !== 0
   const integer = Math.floor(score)
   const starClasses = [
       ...Array(integer).fill(STAR_CLS_ON), // 填充已亮的星星
       ...(hasDecimal ? [STAR_CLS_HALF] : []), // 如果有半颗星就插入half类，否则不插入
       ...Array(STAR_LEN - integer - (hasDecimal ? 1 : 0)).fill(STAR_CLS_OFF) // 填充未亮的星星
   ]

   return <div className={starCls}>
       {starClasses.map((item,index) => <span key={index} className={`star-item ${item}`}></span>)}
   </div>
}

export default Star
