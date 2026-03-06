import { gql } from "@apollo/client";

export const CREATE_REQUEST = gql`
  mutation CreateRequest($serviceId: ID!) {
    createRequest(serviceId: $serviceId) {
      id
      status
    }
  }
`;