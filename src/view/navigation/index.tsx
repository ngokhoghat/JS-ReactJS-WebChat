import React from 'react'
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";


import HomePage from '../modules/explore/homePage/homePage';
import LoginPage from '../modules/explore/loginPage/LoginPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ChatPage from '../modules/explore/chatPage';


export default function ModalSwitch() {
    let location = useLocation();
    let background = location.state && location.state.background;

    return (
        <Route render={({ location }) => (
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="page"
                    timeout={1000}
                >
                    <Switch location={background || location}>
                        {/* <Route exact path="/" children={<LoginPage />} /> */}
                        <Route exact path="/" children={<LoginPage />} />
                        <Route path="/home" children={<HomePage />} />
                        <Route path="/chat" children={<ChatPage />} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )}
        />
    );
}
