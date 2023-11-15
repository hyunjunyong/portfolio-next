import React, { ReactNode } from 'react';

const subTitle = (title: ReactNode, content: ReactNode) => {
  return (
    <div className="py-2">
      <span className="text-base font-bold">
        ❗️
        <span className="ml-1">{title}</span>
      </span>
      <div>{content}</div>
      <slot name="content"></slot>
    </div>
  );
};

export default subTitle;
