import React, { useState, useEffect } from 'react';
import "../data_table/assets/index.scss";

const Tooltip = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!showTooltip) {
    return null;
  }

  return (
    <div className="tooltip max-[600px]:text-[12px]">
      <p>Click here to change view mode! </p>
    </div>
  );
};

export default Tooltip;
