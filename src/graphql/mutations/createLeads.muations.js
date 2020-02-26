import { gql } from "apollo-boost";

export const CREATE_LEAD = gql`
  mutation(
    $email: String!
    $firstName: String!
    $lastName: String!
    $phone: String!
    $noOfChildren: String!
    $noOfadults: String!
  ) {
    createLead(
      email: $email
      first_name: $firstName
      last_name: $lastName
      phone_number: $phone
      number_of_adults: $noOfadults
      number_of_children: $noOfChildren
      site_id: ""
      status: ""
      web_offer_id: ""
      web_offer_location: ""
      web_offer_name: ""
      web_offer_nights: ""
      web_offer_price: 1.5
      web_source: ""
      disposition: ""
      desired_check_out_date: ""
      desired_check_in_date: ""
    ) {
      id
    }
  }
`;
