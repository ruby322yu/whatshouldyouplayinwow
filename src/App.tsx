import * as React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Quiz from './Quiz';
import quizQuestions from './quizQuestions';
import quizResults from './quizResults';
import Result from './Result';


interface IState {
    answer: string;
    answerOptions: object[];
    resultSet: boolean;
    question: string;
    questionId: number;
    nextId: number;
    result: object;
}

export class App extends React.Component<{}, IState> {
    constructor(p: {}) {
        super(p);
        this.state = {
            answer: '',
            answerOptions: quizQuestions[0].answers,
            nextId: 0,
            question: quizQuestions[0].question,
            questionId: 0,
            result: {},
            resultSet: false
        };
        this.handleAnswerSelected= this.handleAnswerSelected.bind(this);
        this.setResults= this.setResults.bind(this);
        this.setUserAnswer= this.setUserAnswer.bind(this);
        this.setNextQuestion= this.setNextQuestion.bind(this);
    }
    public render() {
        return (

            <div className="App">
                <Header />
                {this.state.resultSet ? this.renderResult() : this.renderQuiz()}
                <Footer />

            </div>


        );
    }

    private handleAnswerSelected(event:any) {
        const resultKey = "isResult";
        const contentKey = 'content';
        const nextIdKey = 'nextId';

        const nextState = this.state.answerOptions.find(myObj => myObj[contentKey] === event.currentTarget.value);
        this.setState({
            // @ts-ignore
            nextId: nextState[nextIdKey],
        });

        this.setUserAnswer(event.currentTarget.value);
        // @ts-ignore
        if (nextState[resultKey]) {
            setTimeout(() => this.setResults(this.state.nextId), 300);

        } else {
            setTimeout(() => this.setNextQuestion(this.state.nextId), 300);
        }
    }

    private  setResults (resultId: number) {
        this.setState({
            result: quizResults[resultId],
            resultSet: true
        });
    }

    private setUserAnswer(answer: string) {
        this.setState({
            answer
        });
    }
    private setNextQuestion(nextId: number) {
        this.setState({
            answer: "",
            answerOptions: quizQuestions[nextId].answers,
            question: quizQuestions[nextId].question,
            questionId: nextId
        });
    }

    private renderQuiz() {
        return (
            <Quiz
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                onAnswerSelected={this.handleAnswerSelected}
            />
        );
    }

    private renderResult() {
        const nameKey = "className";
        const iconKey = "classIcon";
        return (
            <Result
                className={this.state.result[nameKey]}
                classIcon={this.state.result[iconKey]}
            />
        );
    }
}

export default App;
