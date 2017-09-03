const { 
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLString,
  GraphQLSchema } = require('graphql'),
  Issue = require('./model/issues');

const defaultField = {
  seq: { type: GraphQLInt },
  Status: { type: GraphQLString },
  Category: { type: GraphQLString },
  Title: { type: GraphQLString },
  Owner: { type: GraphQLString },
  Priority: { type: GraphQLString }
};

const IssueType = new GraphQLObjectType({
  name: 'Issue',
  fields: defaultField
});

const IssueInputType = new GraphQLInputObjectType({
  name: 'IssueInput',
  fields: defaultField
});

// const ResultType = new GraphQLObjectType({
//   name: 'Result',
//   fields: {result: { type: GraphQLBoolean }}
// });

const createIssue = {
  type: IssueType,
  args: {
    issue: { type: IssueInputType }
  },
  resolve: (root, req) => {
    return new Promise((resolve, reject) => {
      Issue.create(req.issue, (err, data) => {
        console.log('***create issues***');
        if(err) reject(err);
        else resolve(data);
      });
    })
  }
};

const updateIssue = {
  type: GraphQLBoolean,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    issue: { type: IssueInputType }
  },
  resolve: (root, req) => {
    return new Promise((resolve, reject) => {
      Issue.update({seq: req.id}, req.issue, (err, data) => {
        console.log('***update issues***');
        if(err) reject(err);
        else resolve(data.n > 0);
      });
    })
  }
};

const getIssues = {
  type: new GraphQLList(IssueType),
  resolve: () => {
    return new Promise((resolve, reject) => {
      Issue.find((err, data) => {
        console.log('***Get issues***');
        if(err) reject(err);
        else resolve(data);
      });
    })
  }
};

const deleteIssue = {
  type: GraphQLBoolean,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) }
  },
  resolve: (root, req) => {
    return new Promise((resolve, reject) => {
      Issue.remove({seq: req.id}, (err, data) => {
        console.log('***Remove issue***');
        if(err) reject(err);
        else resolve(data.result.n > 0);
      });
    })
  }
};

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    getIssues,
    deleteIssue 
  })
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createIssue,
    updateIssue
  })
})

module.exports = new GraphQLSchema({  
  query: QueryType,
  mutation: MutationType
});