import React, { useEffect } from "react";
import './App.css';
import Amplify, { DataStore, Predicates } from 'aws-amplify';
import aws_exports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Rental } from "./models";

Amplify.configure(aws_exports);



function onCreate() {
  DataStore.save(
    new Rental({
      id: `2`,
      name : "test",
      image : "https://images.unsplash.com/photo-1642108134485-ff9cb282be67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0Mzc0NDc3OA&ixlib=rb-1.2.1&q=80&w=1080",
      price : 221,
      location : "seoul"
    })
  );
}

function onDeleteAll() {
  DataStore.delete(Rental, Predicates.ALL);
}

async function onQuery() {
  const Rentals = await DataStore.query(Rental);

  console.log(Rentals);
}


export default function App() {

  useEffect(() => {
    const subscription = DataStore.observe(Rental).subscribe((msg) => {
      console.log(msg.model, msg.opType, msg.element);
    });

    return () => subscription.unsubscribe();
  }, []);

    return (
      <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            Hey {user.username}, welcome to my channel, with auth!
          </p>
          <input type="button" value="create" onClick={onCreate} />
          <input type="button" value="delete All" onClick={onDeleteAll} />
          <input type="button" value="read" onClick={onQuery} />

          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
    );

}