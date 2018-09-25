import * as React from 'react';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';


interface IProps {
    className: string;
    classIcon: string;
}

const Result: React.SFC<IProps> = (props: IProps) => (
    <div className="result">
        <ReactCSSTransitionGroup
            className="container result"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear = {true}
            transitionAppearTimeout={500}
        >
            <div>
                <h2>You are a <strong>{props.className}</strong>!</h2>
            </div>
            <img src={props.classIcon} width={350}/>

        </ReactCSSTransitionGroup>
    </div>
);
export default Result;