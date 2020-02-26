import ApolloClient, { HttpLink } from "apollo-boost";

const HASURA_ACCESS_KEY =
  "79244226452948404D635166546A576E5A7234753777217A25432A462D4A614A";

// const httpLink = new HttpLink({

// });

const client = new ApolloClient({
  uri: "https://vacationmarketing.tsmlabs.com/v1/graphql",
  headers: {
    "x-hasura-access-key": `${HASURA_ACCESS_KEY}`
  }
});

export default client;
