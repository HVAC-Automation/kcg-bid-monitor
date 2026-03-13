import bids from '../public/bid-history.json'

export default function Home() {
  const history = (bids as any[]).sort((a, b) => b.found_date?.localeCompare(a.found_date ?? '') ?? 0)
  const entities = new Set(history.map(b => b.entity)).size
  return (
    <main style={{fontFamily:'-apple-system,sans-serif',margin:'20px',background:'#f5f5f5',minHeight:'100vh'}}>
      <h1 style={{color:'#1a1a2e'}}>🏗️ KCG Bid Monitor</h1>
      <p style={{color:'#888'}}>HVAC · BMS · Refrigeration · Boiler — NJ Public Entities</p>
      <div style={{display:'flex',gap:'20px',margin:'20px 0'}}>
        {[['Total Bids',history.length],['Entities',entities]].map(([label,val])=>(
          <div key={label as string} style={{background:'white',padding:'15px 25px',borderRadius:'8px',textAlign:'center',boxShadow:'0 1px 3px rgba(0,0,0,.1)'}}>
            <div style={{fontSize:'2em',fontWeight:'bold',color:'#e94560'}}>{val}</div>
            <div>{label}</div>
          </div>
        ))}
      </div>
      <table style={{width:'100%',borderCollapse:'collapse',background:'white',borderRadius:'8px',overflow:'hidden',boxShadow:'0 1px 3px rgba(0,0,0,.1)'}}>
        <thead>
          <tr style={{background:'#1a1a2e',color:'white'}}>
            <th style={{padding:'12px',textAlign:'left'}}>Date Found</th>
            <th style={{padding:'12px',textAlign:'left'}}>Entity</th>
            <th style={{padding:'12px',textAlign:'left'}}>Bid</th>
            <th style={{padding:'12px',textAlign:'left'}}>Source</th>
          </tr>
        </thead>
        <tbody>
          {history.map((bid,i) => (
            <tr key={i} style={{borderBottom:'1px solid #eee'}}>
              <td style={{padding:'10px 12px',whiteSpace:'nowrap'}}>{bid.found_date}</td>
              <td style={{padding:'10px 12px'}}>{bid.entity}</td>
              <td style={{padding:'10px 12px'}}><a href={bid.link} target="_blank" style={{color:'#e94560'}}>{bid.title?.substring(0,100)}</a></td>
              <td style={{padding:'10px 12px'}}><a href={bid.source_url} target="_blank" style={{color:'#888',fontSize:'.9em'}}>Page →</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
