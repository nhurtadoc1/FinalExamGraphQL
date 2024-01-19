export const typeDefs = `#graphql
    type Contact {
        id: ID!
        name: String!
        number: String!
    }

    type Query {
        getContact: Contact!
        getContacts: Contact[]!
    }

    type Mutation {
        addContact: Contact!
        deleteContact: Contact!
    }
`;