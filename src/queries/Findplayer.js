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




//     `
//     query getPlayer1 ($id: ID!){
//         getPlayer(id: $id) {
//             position
//             maxBench
//             maxSquat
//         }
//     }
// `


// query getPlayer {
//     getPlayer(id: "1"){
//         id
//         firstName
//         lastName
//         position
//         gradClass
//     }
//
// }`