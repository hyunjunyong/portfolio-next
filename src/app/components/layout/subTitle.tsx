import React, { ReactNode } from 'react';

const subTitle = (props: { title: string; content: ReactNode }) => {
  return (
    <div className="py-2">
      <span className="text-base font-bold">
        ❗️
        <span className="ml-1">{props.title}</span>
      </span>
      <div>{props.content}</div>
    </div>
  );
};

export default subTitle;
