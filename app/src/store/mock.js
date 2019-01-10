// const User = {
//   uid: "123123-awe1asd-12313",
//   username: String,
//   name: String,
//   email: String,
//   password: String,
//   avatar: String, // url
//   /**
//    * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
//    * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
//    */
//   location: {
//     permission: "granted" || "denied" || undefined,
//     coords: {
//       lat: "",
//       lon: "" // coors
//     },
//     address: "" // calulated beautyfied address
//   },
//   /**
//    * https://stripe.com/docs/saving-cards
//    * for later re-use on future payments
//    */
//   stripeCustomer: {},
// };

// const Event = {
//   flyer: "", // url for media (image / vide)
//   title: "",
//   description: "",
//   // maybe Enum
//   status: "active, cancelled, ended",
//   starring: [""], // "artist" list better than string for parsing (fetching links to those users if they exist)
//   /**
//    * Probably unix timesamps
//    * the ui format is Weekday, Month day, Year at Hour (am/pm)
//    */
//   startDate: "",
//   endDate: "",
//   location: {
//     coords: {},
//     address: {} // beatufied
//   },
//   /**
//    * My doubt is if we do this scalable
//    * Or future proof array
//    */
//   tickets: [
//     {
//       tier: "default",
//       price: "$25,00",
//       seats: 10
//     },
//     {
//       tier: "default",
//       price: "$25,00",
//       seats: 20
//     },
//   ],
//   /**
//    * Array of users, both for count and to build
//    * the list view
//    */
//   rspv: [User, ...], // aka the likes
//   /**
//    * The same way we did with the rsvp on user
//    * we can fetch host details based on host id
//    * Not sure which ones simplifies the most
//    */
//   host: {
//     uid: "",
//     name: "",
//     avatar: "",
//   },
//   comments: [], // not for MVP i guess
// };
