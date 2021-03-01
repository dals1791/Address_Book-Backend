# GA Capstone - Sean Daly : [App Name]

## App Description : 
An address book that allows users to store both personal and business contacts. The app will automatically update the user's "connection's" information when the "connection" updates their own  user information (aka google docs/social media esque).

-  ### Tech Stack
    - Backend:
        - mongoDB, mongoose, express.js, graphQL, apollo-server-express, and node.js  
    - Frontend:
        - React.js and apollo-client.

## Project Links
- Backend
    - Github: TBD
    - live: TBD
- FrontEnd
    - Github: TBD
    - Live: TBD


## User Stories
|User Stories|Frontend Regs|Backend Reqs|
|----------|---------|------|
|User can create a secure user profile containing personal and business contact info|||
|User can update their own information|||
|User can add other users to their network as personal or business connections|||
|User can create different groups to store user connections|||
|User can add and remove users from groups|||
|Groups cannot have duplicate people|||
|Users can be assigned to multiple groups|||  
|When user updates their information, it automatically updates their information within their network|||
|User can see map of connection location|||

## Frontend: Wireframes
- React Architecture: [https://docs.google.com/drawings/d/1Yl6zwvFr2E6UtwiPiq_tLJXkIaJLPBzDZ4nZKBhEuuU/edit?usp=sharing](https://docs.google.com/drawings/d/1Yl6zwvFr2E6UtwiPiq_tLJXkIaJLPBzDZ4nZKBhEuuU/edit?usp=sharing)
- Responsive designs: in-progress - reference figma link
## Backend Structure
- ## graphQL-typeDefs
    ```
    gql`
        type User{
            id: ID!
            handle: String!
            name: String!
            password: String!
            contact: Contact!
            business: Business
            groups: [Group]
            connections: [Connection]
        }
        type Connection{
            users: [User]
        }
        type Group {
            name: String
            type: String
            connections: [Connection]
        }
        type Contact {
            address: Address
            phone: Phone
            email: Email
        }
        type Business{
            companyName: String
            address: Address
            phone: Phone
            email: Email
            
        }
        type Address {
            street: String,
            Apt#: Int,
            city: String,
            state: String,
            zipCode: Int
        }
        type Phone{
            number: String
            type: String
        }
        type Email{
            email: String
            type: String
        }
        type Query{
            user:
        }
        type Mutation{
            createUser:
            updateUser:
            createGroup:
            updateGroup:
            destroyGroup:
            addConnectionToGroup:
            addConnection:
            destroyConnection:
        }
    
    `;
    ```
- ### Resolvers
    ```
    Query:
        {
        users(#based on handle)
        connections(all)
        connection(single)
        }
    Mutation:
        {
            createUser:
            updateUser:
            createGroup:
            updateGroup:
            destroyGroup:
            addConnectionToGroup:
            destroyConnectionFromGroup:
            addConnection:
            destroyConnection:
        }
    ```

- ### Models
    ```
    Group={
        name: String
        type: String
    }
    User={
        handle: String (unique),
        name: String,
        password: String,
    }
    Contact & Business={
        address: 
            {
                street: String,
                Apt#: Number,
                city: String,
                state: String,
                zipCode: Number
            },
        phone:
            {
                number: String,
                primary: Boolean,
                type: String
            } ,
        email: 
            {
                email: String,
                type: String
            }
    }

    ```
- ### Associations
    - Group has_many Connections
    - User has_many Groups
    - User has_many Connections
    - User has_one Contact (potentially has_many)
    - User has_one Business (potentially has_many)
    - Contact belongs_to User
    - Business belongs_to User
    - Phone, Email, Address belong_to Contact
    - Phone, Email, Address belong_to Business
    



## MVP - Backend
 - Use graphQL.
 - Use Apollo-Sever
 - Complete necessary associations for models.
 - CRUD capability on user and group models.
 - User authentication.
 - Deploy backend in Heroku.
 

 ## MVP-Frontend
 - Create landing page that has a list of groups and connections.
 - Create connection page that shows detailed connection list and information.
 - Create business page that shows detailed busniess connection list and information.
 - Ability to CRUD user information.
 - Ability to add/remove groups and connections.  
 - User authentication
 - Use useContext/custom hooks in place of/in parallel to passing props.
 - Deploy Frontend in netlify/vercel.
 - (TBD): Use either next.js or typscript React.

 ## Post-MVP (Backend/Frontend)
- Awesome styling
- Implement googlemap for address/geolocation for displaying user locations
- Create business cards for business connections
- Ability to CRUD non-user connections in addition to user-based connections
- Add ability to send emails/message a connection
- Add social media links

## Priority and Time Matrix

## Project Overview, Reflections, & Insights
- ### Challenges
- ### Code Snippets
- ## Errors
- ## Future Work
