import { gql } from 'react-apollo';

export const deleteIssue = gql`
  query deleteQuery($deleteId: Int!) {
    deleteIssue(id: $deleteId)
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
  mutation createIssue($newIssue: IssueInput) {
    createIssue(issue: $newIssue) {
      seq
      Status
      Category
      Title
      Owner
      Priority
    }
  }`;

export const updateIssue = gql`
  mutation updateIssue($seq: Int!, $updatedIssue: IssueInput) {
    updateIssue(id: $seq, issue: $updatedIssue)
  }`;