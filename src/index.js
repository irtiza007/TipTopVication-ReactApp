import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./Fonts/Poppins-Medium.otf";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./graphql/config/client";
import "antd/dist/antd.css";
import "react-phone-input-2/lib/style.css";
import "react-credit-cards/es/styles-compiled.css";

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
