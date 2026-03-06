import { gql } from "@apollo/client";

export const GET_SERVICES = gql`
  query GetServices {
    services {
      id
      title
      description
      provider {
        name
      }
    }
  }
`;