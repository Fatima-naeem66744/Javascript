import React from "react";

function UserButton({ count, onSelect }) {
  console.log(`UserButton rendered for count: ${count}`);

  return (
    <button onClick={() => onSelect(count)}>
      Select User
    </button>
  );
}

export default React.memo(UserButton);