let d = document;

let photos_container = d.querySelector(".photos-container");
let filter_title = d.querySelector(".filter-title");
let cog_btn = d.querySelector(".cog");

let photos_all = d.querySelectorAll(".photos-container img");
let photos_weddings = d.querySelectorAll("img[data-category='weddings']");
let photos_automobiles = d.querySelectorAll("img[data-category='automobiles']");
let photos_nature = d.querySelectorAll("img[data-category='nature']");
let photos_parties = d.querySelectorAll("img[data-category='parties']");

let all_btn = d.querySelector("#filterAll-btn");
all_btn.addEventListener("click", (e) => { e.preventDefault(); filterPhotos("all") });

let weddings_btn = d.querySelector("#filterWeddings-btn");
weddings_btn.addEventListener("click", (e) => { e.preventDefault(); filterPhotos("weddings") });

let automobiles_btn = d.querySelector("#filterAutomobiles-btn");
automobiles_btn.addEventListener("click", (e) => { e.preventDefault(); filterPhotos("automobiles") });

let nature_btn = d.querySelector("#filterNature-btn");
nature_btn.addEventListener("click", (e) => { e.preventDefault(); filterPhotos("nature") });

let parties_btn = d.querySelector("#filterParties-btn");
parties_btn.addEventListener("click", (e) => { e.preventDefault(); filterPhotos("parties") });

function filterPhotos(param) {
  photos_container.innerHTML = "";
  all_btn.classList.remove("active");
  weddings_btn.classList.remove("active");
  automobiles_btn.classList.remove("active");
  nature_btn.classList.remove("active");
  parties_btn.classList.remove("active");
  
  switch (param) {
    case "all":
      filter_title.innerHTML = "All";
      all_btn.classList.add("active");
      photos_container.append(...photos_all);
      break;
    case "weddings":
      filter_title.innerHTML = "Weddings";
      weddings_btn.classList.add("active");
      photos_container.append(...photos_weddings);
      break;
    case "automobiles":
      filter_title.innerHTML = "Automobiles";
      automobiles_btn.classList.add("active");
      photos_container.append(...photos_automobiles);
      break;
    case "nature":
      filter_title.innerHTML = "Nature";
      nature_btn.classList.add("active");
      photos_container.append(...photos_nature);
      break;
    case "parties":
      filter_title.innerHTML = "Parties";
      parties_btn.classList.add("active");
      photos_container.append(...photos_parties);
      break;
    default:
      photos_container.innerHTML = photos_all;
  }
}

cog_btn.addEventListener("click", () => {
  d.querySelector("aside").classList.toggle("active");
});