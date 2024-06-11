const userTypeDefs = `#graphql
type User{
_id: ID!
username: String!
name: String!
password: String!
profilePicture: String
gender: String!
}

type Query{
    #query for authUsers
    authUser: User
    #query a single user
    user(userId:ID): User
}

type Mutation{
    signup(input: SignupInput!): User
    login(input: LoginInput!): User
    logout: LogoutResponse
}

input SignupInput{
    username:String!
    name:String!
    password:String!
    #generate an auto-pic with an API
    #research an API for that.
    gender:String!
}

input LoginInput{
    username: String!
    password: String!
}

type LogoutResponse{
    #send back a feedback message
    message: String!
}
`;

export default userTypeDefs;
