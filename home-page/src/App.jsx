import React from "react";
import ReactDOM from "react-dom";
import Chats from 'chat/Chats'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row } from 'react-bootstrap';

import "./index.css";

const App = () => 
    (
    <Container>
        <Row>
            <Chats/>
        </Row>
    </Container>
)

ReactDOM.render(<App />, document.getElementById("app"));
