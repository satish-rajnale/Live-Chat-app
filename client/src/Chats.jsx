import React from 'react';

import { ApolloClient , InMemoryCache, ApolloProvider, useSubscription, gql, useMutation } from '@apollo/client';
import { Conatiner, Row, Col, FormInput, Button } from 'shards-react';
import { WebSocketLink} from '@apollo/client/link/ws';

const link = new WebSocketLink({
    uri : 'ws://localhost:4000/',
    options: {
        reconnect: true
    }
});



const client = new ApolloClient({
    link,
    uri : 'http://localhost:4000/',
    cache: new InMemoryCache()
});

const GET_MESSAGES = gql`
    subscription {
        messages {
        id
        user
        content
        }
    }
`;

const POST_MESSAGE =gql`
 mutation ($user:String!, $content:String!){
     postMessages(user:$user, content:$content)
 }
`;

const Messages= ({ user }) => {
    const {data} = useSubscription(GET_MESSAGES);
    
    if(!data){
        return null;
    }
    return (
        <>
        {data.messages.map(({id, user: messageUser, content}) => (
            <div
                style={{
                    display: "flex",
                    justifyContent: user === messageUser ? "flex-end" : "flex-start",
                    paddingBottom:"1em"
                }}
            >
                {
                    user !== messageUser && (
                        <div style={{
                                height: 50,
                                paddingTop:5,
                                boxShadow:"1px -15px 40px 5px #313131",
                                width: 50,
                                marginRight: '0.5em',
                                border: '2px solid #e5e6ea',
                                textAlign:"center",
                                fontSize: '18px',
                                borderRadius:25,
                        }}>
                            {messageUser.slice(0,2).toUpperCase()}
                        </div>
                    )
                }
                <div 
                style={{
                    padding:"1em",
                   
                    borderRadius:"1em",
                    maxWidth:"60%",
                    color: user === messageUser ? "white" : "black",
                    background: user === messageUser ? "#58bf56" : "#e5e6ea"
                }}>
                    {content}
                </div>

            </div>
        ))}
        </>

    )
    
    
}

const Chat = () => {
    const [state, setState] = React.useState({
        user: "Jhon",
        content: ""
    })

    const [postMessage] = useMutation(POST_MESSAGE);

    function onsend(){
        if(state.content.length > 0){
           postMessage({
               variables:state
           })
        }
        setState({
            ...state,
            content: ""
        })
    }


    return (<div
                 style={{ 
                     padding:"30px",
        width:"1224px",
        margin:"auto",
        borderRadius:"1em",
        boxShadow:"-3px -2px 25px 8px #313131",
        width:"80%",
        height: "90vh",
        backgroundColor: "whitesmoke",
        alignItems: "center",
        justifyContent: "center"
    }}><Messages 
           user="Jmas"/>
           <Row>
               <Col xs={2} style={{padding: 0}}>
                   <FormInput
                        value={state.content}
                        label="user"
                        onChange={({target})=> setState({...state,user: target.value})}
                   />
               </Col>
               <Col xs={8} >
                   <FormInput
                        value={state.content}
                        label="user"
                        onChange={({target})=> setState({...state,content: target.value})}
                        onKeyUp = {
                            (e) => {if(e.keyCode === 13){onsend();}}
                        }
                   />
               </Col>
               <Button onClick={() => onsend()}>
                   Send
               </Button>
           </Row>
        
           
           </div>)
};




export default () => {
    return (
        <ApolloProvider client={client}>
            <Chat/>
        </ApolloProvider>
    )
}