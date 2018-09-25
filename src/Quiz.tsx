
import * as React from 'react';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AnswerOption from './AnswerOption';
import Question from './Question';


interface IProps {
    answer: string;
    answerOptions: object[];
    question: string;
    questionId: number;
    onAnswerSelected: any;
}


class Quiz extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.renderAnswerOptions= this.renderAnswerOptions.bind(this);
    }

    public render() {
        return (
            <ReactCSSTransitionGroup
                className="container"
                component="div"
                transitionName="fade"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={500}
                transitionAppear = {true}
                transitionAppearTimeout={500}
            >
                <div key={this.props.questionId}>
                    <Question content={this.props.question} />
                    <ul className="answerOptions">
                        {this.props.answerOptions.map(this.renderAnswerOptions)}
                    </ul>
                </div>
            </ReactCSSTransitionGroup>
        )
    };
    private renderAnswerOptions(key: any) {
        return (
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.content}
                answer={this.props.answer}
                onAnswerSelected={this.props.onAnswerSelected}
                questionId = {this.props.questionId}
            />
        );
    };

};


export default Quiz;