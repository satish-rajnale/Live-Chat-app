import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from 'react-bootstrap';

import "./css/app.css";
import Chat from "./Chats";

const App = () => (
  <div className="Chat">
    <div className="userList">
      <ListGroup className="listgroup">
        <ListGroup.Item>No style</ListGroup.Item>
        <ListGroup.Item variant="primary">Primary</ListGroup.Item>
        <ListGroup.Item action variant="secondary">
          Secondary
        </ListGroup.Item>
        <ListGroup.Item action variant="success">
          Success
        </ListGroup.Item>
        <ListGroup.Item action variant="danger">
          Danger
        </ListGroup.Item>
        <ListGroup.Item action variant="warning">
          Warning
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          Info
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Light
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
          Dark
        </ListGroup.Item>
      </ListGroup>
    </div>
    <Chat />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
