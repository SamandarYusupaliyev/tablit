import jobs from "./data.js";

const template = document.getElementById("job-list-template");
const jobsList = document.getElementById("job-list");
// const filterAll =document.getElementById("filter-all");


// let allfilter =[] ;



jobs.forEach((job) =>{
  let filterData =[
  {
    role:job.role,
  },
  {
    languges:[...job.languages],
  },
  {
    tools:[...job.tools],
  },
  {
    level:job.level,
  },
  ];

const clone = template.content.cloneNode(true);

if(job.featured) {
  clone.querySelector(".job-list__item").classList.add("border-left");
}



//image
 clone.querySelector('.job-list__img').src = job.logo;
//companiy
clone.querySelector('.job-list__company').textContent = job.company;
  //status-new
clone.querySelector('.job-list__status__new').style.display = `${job.new ? "block" : "none"}`;
 //featured
clone.querySelector('.job-list__featured').style.display = `${job.featured ? "block" : "none"}`;
  //position
clone.querySelector('.job-list__position').textContent = job.position;
  //posteadAt
clone.querySelector('.job-list__posted').textContent = job.postedAt;
  //contract
clone.querySelector('.job-list__contract').textContent = job.contract;
  //location
clone.querySelector('.job-list__location').textContent = job.location;


 

//job.tools
// job.languages
//job.level
// job.role

  
// const jobListFilter =document.querySelector(".job-list__filter");
  const filterTemClone = clone.querySelector(".job-list__filter");// div

filterData.forEach((data) =>{
  // const filterClone =document.filterTemClone.content.cloneNode(true);
    const span = document.createElement("span");
    span.classList.add('job-list__filter__item');
  if (typeof data[Object.keys(data)[0]] != "object") {
     span.textContent = data[Object.keys(data)[0]];
    span.setAttribute(
      `data-${Object.keys(data)[0]}`,
    data[Object.keys(data)[0]]
  );
  filterTemClone.appendChild(span);
  }else{
    const array=data[Object.keys(data)[0]];
    array.forEach((item)=>{
    const span = document.createElement("span");
    span.classList.add('job-list__filter__item');
    span.textContent =item;
    span.setAttribute(
      `data-${Object.keys(data)[0]}`,item 
    );
    filterTemClone.appendChild(span);
    });
  }
});
jobsList.appendChild(clone);
});





