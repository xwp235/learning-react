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
       ...Array(integer).fill(STAR_CLS_ON),
       hasDecimal ? STAR_CLS_HALF : null,
       ...Array(STAR_LEN - integer - (hasDecimal ? 1 : 0)).fill(STAR_CLS_OFF)
   ]

   return <div className={starCls}>
       {starClasses.map((item,index) => <span key={index} className={`star-item ${item}`}></span>)}
   </div>
}

export default Star
