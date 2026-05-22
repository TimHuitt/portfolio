import "./Cases.css"
import casestudyPDF from '../../assets/Healthcare-Operations-Platform.pdf'

const Cases = () => {
  
  return (
    <div className="Cases">
      
      <div className="cases-container">
        <div className="links-container">
          
        </div>
        <object data={casestudyPDF} type="application/pdf" width="100%" height="100%" />
      </div>
    </div>
  )
}

export default Cases
