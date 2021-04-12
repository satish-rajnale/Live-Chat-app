import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "./app.css";
import Chat from './Chats';


const App = () => <Chat className="Chat"/>;

ReactDOM.render(<App />, document.getElementById("app"));
