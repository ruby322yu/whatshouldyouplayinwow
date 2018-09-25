
import * as React from 'react';

interface IProps {
    answerType: string;
    answerContent: string;
    answer: string;
    onAnswerSelected: any
    questionId: number
}

class AnswerOption extends React.Component<IProps>{
    public render() {
        return (
            <li className="answerOption">
                <input
                    type="radio"
                    className="radioCustomButton"
                    name="radioGroup"
                    checked={this.props.answerType === this.props.answer}
                    id={this.props.answerType}
                    value={this.props.answerType}
                    onChange={this.props.onAnswerSelected}
                />
                <label className="radioCustomLabel" htmlFor={this.props.answerType}>
                    {this.props.answerContent}
                </label>
            </li>
        );
    }
}

export default AnswerOption;