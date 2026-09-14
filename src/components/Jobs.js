import {useState} from 'react'
import JobItem from './JobItem'

export default function Jobs({places}) {
  const [selected,setSelected] = useState(0)

  return (
    <div style={{display:"flex", gap:"50px", minHeight:"350px"}}>
      <div style={{display:"flex", position:"relative", flexDirection:"column", borderLeft:"1px solid rgb(0,0,0,0.3)", height:"200px"}}>
        <div style={{top:`${selected*44}px`,position:"absolute",left:"0px",borderLeft:"3px solid rgb(0,0,0,0.8)", width:"1px",height:"44px",transform:"translateX(-1.5px)", transition:"top 0.25s ease 0s"}}></div>
        {places.map(({company,title,date,desc}, i) => {
          return <div key={company} onClick={() => setSelected(i)} className={selected === i ? "joblistitemSel" : "joblistitemUns"} style={{cursor:"pointer", paddingTop:"10px",paddingBottom:"10px",paddingRight:"20px",paddingLeft:"20px"}}>{company}</div>
        })}
      </div><JobItem job={places[selected]}/></div>
  )
}
