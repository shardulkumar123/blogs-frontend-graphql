// import { ApolloClient, InMemoryCache } from "@apollo/client";

// export const client = new ApolloClient({
//   uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
//   cache: new InMemoryCache(),
//   headers: `Bearer ${localStorage.getItem("token")}`,
// });

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
