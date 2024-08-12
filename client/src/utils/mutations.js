//Not sure if removebook is properly written

// mutation addUser($username: String!, $email: String!, $password: String!) {
//   addUser(username: $username, email: $email, password: $password) {
//     token
//     user {
//       _id
//       username
//       email
//     }
//   }
// }

// mutation login($email: String!, $password: String!) {
//   login(email: $email, password: $password) {
//     token
//     user {
//       email
//       _id
//     }
//   }
// }

// mutation saveBook($bookData: BookObject) {
//   saveBook(bookData: $bookData) {
//     _id
//     username
//     email
//     bookCount
//     savedBooks {
//       bookId
//       authors
//       description
//       image
//       link
//       title
//     }
//   }
// }

// mutation removeBook($bookId: ID) {
//   removeBook(bookId: $bookId) {
//     _id
//     username
//     email
//     bookCount
//     savedBooks {
//       bookId
//       authors
//       description
//       image
//       link
//       title
//     }
//   }
// }
