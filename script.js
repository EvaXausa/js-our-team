/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
- Creare l’array di oggetti con le informazioni fornite
- Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
- Stampare le stesse informazioni su DOM sottoforma di stringhe
*/
console.log("JS OK");
//Creare l’array di oggetti con le informazioni
const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder £ CEO",
    src: "img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    src: "img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    src: "img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    src: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    src: "img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    src: "img/barbara-ramos-graphic-designer.jpg",
  },
];
const teamList = document.querySelector("team-container");
let listItems = "";
//Stampare in console i dati di tutti i membri
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

  listItems += ` 
  <!--<div class="team-card">
            <div class="card-image">
              <img
                src="img/${member.src}"
                alt="${member.name}"
              />
            </div>
            <div class="card-text">
              <h3>${member.name}</h3>
              <p>${member.role}</p>
            </div>
          </div>-->
  `;
}
teamList.innerHTML = listItems;
