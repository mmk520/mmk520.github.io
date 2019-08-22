import React from 'react';

const Page = props => {
  return (
    <div
      className={`page ${props.className}`}
      style={{ height: `${props.height}`, width: '100%' }}>
      {props.children}
    </div>
  );
};

export default Page;
