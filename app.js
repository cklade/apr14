// const teamInfo = {
//   teamName: "Real Madrid",
//   city: "Madrid",
//   country: "Spain",
//   topScorers: ["Ronaldo", "Benzema", "Hazard"],
//   worldwideFans: 798, // in millions
// };

// console.log(teamInfo);

// db.collection("teams")
//   .doc("nQMvwLaK8inMbpKhPrsH")
//   .update({
//     teamName: "Real Madrid",
//     city: "Madrid",
//     country: "Spain",
//     topScorers: ["Ronaldo", "Benzema", "Hazard"],
//     worldwideFans: 798, // in millions
//   });

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

db.collection("teams")
  .where("country", "in", ["Spain"])
  .get()
  .then((data) => {
    let mydocs = data.docs;
    mydocs.forEach((d) => {
      console.log(d.data());
    });
  });
