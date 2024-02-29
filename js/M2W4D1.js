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
    {
      title: "paperino",
      location: "paperino",
    },
    {
      title: "paperino",
      location: "paperino",
    },
  ]
  






document.addEventListener("DOMContentLoaded",function(){
 
 
  document.getElementById("btn-search").addEventListener("click", function(e){
    
    e.preventDefault();



    
    if(!checkEmptyElement()){

      let title = document.getElementById("jobTitle").value;
      let location =  document.getElementById("location").value;
  
  
      let result = search(title,location);
  
      if(result.count > 0 ){
  
        document.getElementById("cnt-noresult").style.display = "none";
        let html = "";
        result.jobs.forEach(element => {
        html= html + `<div class="job-position">
                          <div>${element.title}</div>
                          <div>${element.location}</div>
                        </div> \n`
        });
  
        document.getElementById("cnt-result").innerHTML += html;
  
      }
      else{
  
        document.getElementById("msg-noresult").style.display = "block";
  
        setTimeout(() => {
          clearPage();
        }, 1500);
  
        
      }
    }
  });
  
})




function search(title,location){

  //creo un oggetto in cui raggruppo le informazioni di cui ho bisogno
  
      let result = {
          jobs: [],
          count: 0
     }
  
  
      jobs.forEach(element => {
          //trasformo tutto in minuscolo cosi da non avere problemi.
          if(element.location.toLocaleLowerCase() === location.toLocaleLowerCase() && 
              element.title.toLocaleLowerCase() === title.toLocaleLowerCase()){
              result.jobs.push(element);
              result.count = result.count + 1;
          }
      });
      return result;
  }
  

function clearPage()  {
    
    document.getElementById("msg-noresult").style.display = "none";
    document.getElementById("jobTitle").value = "";
    document.getElementById("location").value = "";
  }

/*   function checkElement(id){

    element = document.getElementById(`msg-${id}`);
    if(element.value == "")
    {
      document.getElementById(`msg-${id}`).style.display="block";
      setTimeout(() => {
      document.getElementById(`msg-${id}`).style.display="none";
      }, 1500);
      
    }
  } */

function checkEmptyElement(){
  let result = false;
  let elementToCheck =  document.querySelectorAll(".form-control");
  elementToCheck.forEach(element => {
    if(element.value ===""){
      result = true
      document.getElementById(`msg-${element.id}`).style.display="block";
      setTimeout(() => {
        document.getElementById(`msg-${element.id}`).style.display="none";
        }, 1500);
    }
  });
  return result;
}



