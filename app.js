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

//  find all national teams

// db.collection("teams")
//   .where("teamName", "contains", "National")
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

// find all teams in spain with more than 700 fans
db.collection("teams")
  .where("country", "==", "Spain")
  .where("worldwideFans", ">", 700)
  .get()
  .then((data) => {
    let mydocs = data.docs;
    mydocs.forEach((d) => {
      console.log(d.data());
    });
  });
