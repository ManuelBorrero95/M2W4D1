const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn-search").addEventListener("click", function (e) {
    e.preventDefault();

    //Elimino eventuali precedenti risultati
    document.getElementById("cnt-result").style.display = "none";
    document.getElementById("cnt-result").innerHTML = "";
    //controllo che i campi di ricerca vengano compilati
    if (!checkEmptyElement()) {
      //mostro il loader e faccio partire un timeout per "fingere un ricerca"
      document.getElementsByClassName("loader")[0].classList.toggle("hide");
      setTimeout(() => {
        let title = document.getElementById("jobTitle").value;
        let location = document.getElementById("location").value;
        //eseguo la ricerca e salvo l'outoput nella variabile result
        let result = search(title, location);
        //controllo se viene restituito almeno un risultato.
        if (result.count > 0) {
            let html = `<li class="list-group-item list-group-item-success">Abbiamo trovato i ${result.count} seguenti risultati</li>`;
            result.jobs.forEach((element) => {
              html =
                html +
                `<li class="list-group-item">${element.title} ${element.location}</li>`;
            });
            document.getElementById("cnt-result").innerHTML += html;
            document.getElementsByClassName("loader")[0].classList.toggle("hide");
            document.getElementById("cnt-result").style.display = "block";
            document.getElementById("delete-button").style.display = "flex";
        } else { // nel caso non ci siano risultati mostro un messaggio di errore
          document.getElementById("msg-noresult").style.display = "block";
          document.getElementsByClassName("loader")[0].classList.toggle("hide");
          setTimeout(() => {
            ResetPage();
          }, 2000);
        }
      }, 1500);
    }
  });

  document.getElementById("delete-button").addEventListener("click", () => {
    ResetPage();
  });
});

//funzione di rircerca all'interno dell'array jobs
function search(title, location) {
  //creo un oggetto che utilizzero come output della mia funziona
  let result = {
    jobs: [],
    count: 0,
  };
  jobs.forEach((element) => {
    //trasformo tutti tutto in minuscolo prima di fare il confronto
    //cosi da avere una ricerca CaseInsitive
    if (element.location.toLocaleLowerCase().includes(location.toLocaleLowerCase()) &&
        element.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
    ) {
      result.jobs.push(element);
      result.count = result.count + 1;
    }
  });
  return result;
}

//con questa funzione ripristino lo stato iniziale della pagina.
function ResetPage() {
  document.getElementById("msg-noresult").style.display = "none";
  document.getElementById("delete-button").style.display = "none";
  document.getElementById("cnt-result").style.display = "none";
  document.getElementById("jobTitle").value = "";
  document.getElementById("location").value = "";
  document.getElementById("cnt-result").innerHTML = "";
}
//con questa questa funziona controllo che i dati di imput obbligari vengano compilati
function checkEmptyElement() {
  let result = false;
  let elementToCheck = document.querySelectorAll(".form-control");
  elementToCheck.forEach((element) => {
    if (element.value === "") {
      result = true;
      document.getElementById(`msg-${element.id}`).style.display = "block";
      //imposto un timeout cosi da rimuovere l'elemento in automatico allo scadere del tempo
      setTimeout(() => {
        document.getElementById(`msg-${element.id}`).style.display = "none";
      }, 1500);
    }
  });
  return result;
}
