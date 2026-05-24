import "./Cases.css"
import casestudyPDF from '../../assets/Healthcare-Operations-Platform.pdf'

export const metadata = {
  title: 'Healthcare Operations Platform — Case Study',
  description: 'Solo engineering engagement replacing Salesforce for a healthcare-adjacent organization.',
  openGraph: {
    title: 'Healthcare Operations Platform — Case Study',
    description: 'Solo engineering engagement replacing Salesforce for a healthcare-adjacent organization.',
    url: 'https://timhuitt.com/cases',
    images: [
      {
        url: 'https://timhuitt.com/og-cases.png',
        width: 1200,
        height: 630,
      }
    ],
  },
};

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
