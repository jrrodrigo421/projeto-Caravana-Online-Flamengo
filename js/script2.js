


// Link "Proximas Partidas:"


document.getElementById("myButton").addEventListener("click", function() {
  window.location.href = "https://api.whatsapp.com/send?phone=5535999539535";
});

// Esse trecho mostra a liga do brasileirao:
//
// fetch('https://api-football-v1.p.rapidapi.com/v2/teams/league/6', {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
//     'x-rapidapi-key': '91becedb0bmshff5e72a0f84afefp19e7a3jsn83d5af537c81'
//   }
// })
// .then(response => response.json())
// .then(data => {
//   let teams = data.api.teams;
//   console.log(teams);
//   // Aqui você pode usar o resultado para encontrar o time desejado e o ID correto.
// })
// .catch(error => {
//   console.error('Erro ao obter times:', error);
// });

// Aqui o ID referente ao flamengo 127

fetch('https://api-football-v1.p.rapidapi.com/v2/fixtures/team/127/next/10', {
method: 'GET',
headers: {
  'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
  'x-rapidapi-key': '91becedb0bmshff5e72a0f84afefp19e7a3jsn83d5af537c81'
}
})
.then(response => response.json())
.then(data => {
let fixtures = data.api.fixtures;
console.log(fixtures)
let html = '';
fixtures.forEach(fixture => {
  let opponent = fixture.homeTeam.team_id === 127 ? fixture.awayTeam.team_name : fixture.homeTeam.team_name;
  let date = new Date(fixture.event_date);
  let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${hours}:${minutes}`;
  html += `
    <div>
      <h2></h2>
      <p>Data: ${formattedDate}</p>
      <p>Adversário: ${opponent}</p>
    </div>
  `;
});
document.getElementById('fixtures').innerHTML = html;
})
.catch(error => {
console.error('Erro ao obter informações sobre os jogos:', error);
});

fetch('https://api-football-v1.p.rapidapi.com/v2/teams/team/127', {
method: 'GET',
headers: {
  'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
  'x-rapidapi-key': '91becedb0bmshff5e72a0f84afefp19e7a3jsn83d5af537c81'
}
})
.then(response => response.json())
.then(data => {
let team = data.api.teams[0];
let html = `
  <div>
    <h2>Informações gerais</h2>
    <p>Nome: ${team.name}</p>
    <p>Fundação: ${team.founded}</p>
    <p>País: ${team.country}</p>
    <p>Estádio: ${team.venue_name}</p>
  </div>
  
  <div>
    <h2>Informações sobre o estádio</h2>
    <p>Nome: ${team.venue_name}</p>
    <p>Capacidade: ${team.venue_capacity}</p>
    <p>Endereço: ${team.venue_address}</p>
  </div>
`;
document.getElementById('team').innerHTML = html;
})
.catch(error => {
console.error('Erro ao obter informações do time:', error);
});