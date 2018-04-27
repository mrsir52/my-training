import graphql from 'graphql-tag'

export default graphql`
query getPlayer {
    getPlayer(id: "1"){
        id
        firstName
        lastName
        position
        gradClass
    }

}`