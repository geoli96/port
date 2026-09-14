export default function JobItem({job}) {
  const {title, date, desc} = job
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <span style={{fontSize:"22px", fontWeight:"600", marginBottom:"4px"}}>{title}</span>
        <div>{date}</div>
        <div style={{marginTop:"0px", maxWidth:"600px"}}>
          {desc.map((text) => {
            return <div key={text} style={{display:"flex", marginTop:"20px"}}>
            <div style={{color:"black",fontSize:"1.5rem",marginTop:"-4px",marginRight:"10px"}}>▹</div>
          {text}
          </div>
          })}
       </div>
        </div>
  )
}
