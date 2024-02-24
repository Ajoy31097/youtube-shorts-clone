import React, { useEffect } from 'react';

const IconPopup = ({ icon, color }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('icon-popup').style.display = 'none';
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="icon-popup" style={{ position: 'fixed', top: '50%', left: '49%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
      {React.createElement(icon, { style: { color, fontSize: '100px' } })}
    </div>
  );
};

export default IconPopup;
