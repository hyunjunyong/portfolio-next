import React, { ReactNode } from 'react';

const subTitle = (props: ReactNode) => {
  return (
    <div className="py-2">
      <span className="text-base font-bold">❗️{props}</span>
      <slot name="content"></slot>
    </div>
  );
};

export default subTitle;
