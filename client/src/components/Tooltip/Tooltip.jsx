/* eslint-disable react/prop-types */
import { useState } from 'react'

const Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      style={{ 
        position: 'relative', 
        display: 'inline-block',
      }}
    >
      {children}
      {isVisible && (
        <div style={{ 
          position: 'absolute', 
          bottom: '120%', 
          left: '50%', 
          transform: 'translateX(-50%)',
          fontSize: '1.5rem',
          padding: '2px 6px',
          borderRadius: '5px',
          backgroundColor: 'rgba(53, 53, 53, 0.95)',
          zIndex: 10 
        }}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip