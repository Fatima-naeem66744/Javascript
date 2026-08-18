// Button — supports at least 2 variants via a prop 
// (e.g. variant="primary" / "secondary") with different styling
import React from 'react';
function Button({ variant, children }) {
  const buttonClass = variant === 'primary' ? 'button-primary' : 'button-secondary';
  return <button className={buttonClass}>{children}</button>;
}
export default Button;