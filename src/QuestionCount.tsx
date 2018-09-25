
import * as React from 'react';

interface IProps {
    counter: number;
    total:number;
}

const QuestionCount: React.SFC<IProps> = (props: IProps) => (
    <div className="questionCount">
        Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
);

export default QuestionCount;