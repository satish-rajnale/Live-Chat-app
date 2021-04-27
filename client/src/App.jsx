import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";
import Chat from "./Chats";

const App = () => (
                    <div className="Chat">
                        <div className="userList">
                            <ul></ul>
                        </div>
                        <Chat />
                    </div>
                    );

ReactDOM.render(<App />, document.getElementById("app"));
