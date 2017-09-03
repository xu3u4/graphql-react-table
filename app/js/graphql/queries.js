import { gql } from 'react-apollo';

export const deleteIssue = gql`
  {
    deleteIssue(id: 17)
  }`;

export const getIssues = gql`
  query allQuery{
    getIssues {
      seq
      Status
      Category
      Title
      Owner
      Priority
    }
  }`;

export const createIssue = gql`
  mutation {
    createIssue(issue: {
      seq: 12
      Status:"open"
      Category:"t8"
      Title:"t8"
      Owner:"Jocelyn"
      Priority:"9"
    }) {
      seq
      Status
      Category
      Title
      Owner
      Priority
    }
  }`;

export const updateIssue = gql`
  mutation {
    updateIssue(id: 27, issue: {
      seq: 27
      Status:"open"
      Category:"t91"
      Title:"t8"
      Owner:"Jocelyn"
      Priority:"9"
    })
  }`;