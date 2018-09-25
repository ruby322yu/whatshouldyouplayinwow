import * as React from 'react';

interface IProps {
  content: string;
}

const Question: React.SFC<IProps> = (props: IProps) => (
  <h2 className="question">{props.content}</h2>
);

export default Question;
