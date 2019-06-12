import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

import logo from "./logo.svg";
import "./App.css";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjwt0u1dp33g401fodqbbqa8u/master"
});

const DESTINATIONS_QUERY = gql`
  {
    destinations {
      name
      location
    }
  }
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to NextVisit App</p>
        </header>
        <Query query={DESTINATIONS_QUERY}>
          {({ loading, data }) => {
            if (loading) return "Loading ...";
            const { destinations } = data;
            return destinations.map(destination => (
              <h1>{destination.name}</h1>
            ));
          }}
        </Query>
      </div>
    </ApolloProvider>
  );
}

export default App;
