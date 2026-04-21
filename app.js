// const teams = [
//   {
//     id: "team1",
//     teamName: "Real Madrid",
//     city: "Madrid",
//     country: "Spain",
//     topScorers: ["Ronaldo", "Benzema", "Hazard"],
//     worldwideFans: 798,
//   },
//   {
//     id: "team2",
//     teamName: "Barcelona",
//     city: "Barcelona",
//     country: "Spain",
//     topScorers: ["Messi", "Suarez", "Puyol"],
//     worldwideFans: 738,
//   },
//   {
//     id: "team3",
//     teamName: "Manchester United",
//     city: "Manchester",
//     country: "England",
//     topScorers: ["Cantona", "Rooney", "Ronaldo"],
//     worldwideFans: 755,
//   },
//   {
//     id: "team4",
//     teamName: "Manchester City",
//     city: "Manchester",
//     country: "England",
//     topScorers: ["Sterling", "Aguero", "Haaland"],
//     worldwideFans: 537,
//   },
//   {
//     id: "team5",
//     teamName: "Brazil National Team",
//     city: "Not applicable",
//     country: "Brazil",
//     topScorers: ["Ronaldinho", "Cafu", "Bebeto"],
//     worldwideFans: 950,
//   },
//   {
//     id: "team6",
//     teamName: "Argentina National Team",
//     city: "Not applicable",
//     country: "Argentina",
//     topScorers: ["Messi", "Batistuta", "Maradona"],
//     worldwideFans: 888,
//   },
//   {
//     id: "team7",
//     teamName: "Atletico Madrid",
//     city: "Madrid",
//     country: "Spain",
//     topScorers: ["Aragonés", "Griezmann", "Torez"],
//     worldwideFans: 400,
//   },
// ];

// teams.forEach((team) => {
//   db.collection("teams").doc(team.id).set(team);
// });

// show_teams();
// function show_teams() {
//   db.collection("teams")
//     .get()
//     .then((data) => {
//       let mydocs = data.docs;
//       mydocs.forEach((d) => {
//         console.log(d.data());
//       });
//     })
//     .catch((error) => {
//       console.error("Error fetching teams: ", error);
//     });
// }

// show all teams in spain

// db.collection("teams")
//   .where("country", "in", ["Spain"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// finding all teams in spain and madrid

// db.collection("teams")
//   .where("country", "in", ["Spain"])
//   .where("city", "==", "Madrid")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// find all team not in spain

// db.collection("teams")
//   .where("country", "not-in", ["Spain"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

//  find all teams not in spain or england

// db.collection("teams")
//   .where("country", "not-in", ["Spain", "England"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// added isNational field to existing documents

// db.collection("teams").doc("team1").update({
//   isNational: " Not National",
// });

// db.collection("teams").doc("team2").update({
//   isNational: " Not National",
// });

// db.collection("teams").doc("team3").update({
//   isNational: " Not National",
// });

// db.collection("teams").doc("team4").update({
//   isNational: " Not National",
// });

// db.collection("teams").doc("team5").update({
//   isNational: "National",
// });

// db.collection("teams").doc("team6").update({
//   isNational: "National",
// });

// db.collection("teams").doc("team7").update({
//   isNational: " Not National",
// });

// find all national teams

// db.collection("teams")
//   .where("isNational", "==", "National")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// find all teams in spain with more than 700 fans

// db.collection("teams")
//   .where("country", "in", ["Spain"])
//   .where("worldwideFans", ">", 700)
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// find all teams who fans range from 500-600

// db.collection("teams")
//   .where("worldwideFans", ">=", 500)
//   .where("worldwideFans", "<=", 600)
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// find all teams that contain Ronaldo as a top scorer

// db.collection("teams")
//   .where("topScorers", "array-contains", "Ronaldo")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// Show all teams where Ronaldo, Maradona, or Messi is a top scorer
// db.collection("teams")
//   .where("topScorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// Update team names and workwide fans

// db.collection("teams").doc("team1").update({
//   teamName: "Real Madrid FC",
//   worldwideFans: 811,
// });

// db.collection("teams").doc("team2").update({
//   teamName: "Barcelona FC",
//   worldwideFans: 747,
// });

// Remove and add top scorers

// db.collection("teams")
//   .doc("team1")
//   .update({
//     topScorers: firebase.firestore.FieldValue.arrayRemove("Hazard"),
//   });

// db.collection("teams")
//   .doc("team1")
//   .update({
//     topScorers: firebase.firestore.FieldValue.arrayUnion("Crispo"),
//   });

// db.collection("teams")
//   .doc("team2")
//   .update({
//     topScorers: firebase.firestore.FieldValue.arrayRemove("Puyol"),
//   });

// db.collection("teams")
//   .doc("team2")
//   .update({
//     topScorers: firebase.firestore.FieldValue.arrayUnion("Deco"),
//   });

// added teams colors to existing documents

// db.collection("teams")
//   .doc("team1")
//   .update({
//     color: {
//       home: "white",
//       away: "black",
//     },
//   });

// db.collection("teams")
//   .doc("team2")
//   .update({
//     color: {
//       home: "red",
//       away: "gold",
//     },
//   });

//   change team colors

// db.collection("teams").doc("team1").update({
//   "color.away": "purple",
// });

// db.collection("teams").doc("team2").update({
//   "color.away": "pink",
// });
