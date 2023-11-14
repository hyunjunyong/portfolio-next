import React, { ReactNode } from 'react';

interface ChildComponentProps {
  children: ReactNode;
}

const subTitle: React.FC<ChildComponentProps> = ({ children }) => {
  return (
    <div className="py-2">
      <span className="text-base font-bold">❗️{children}</span>
      <slot name="content"></slot>
    </div>
  );
};

export default subTitle;
