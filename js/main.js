
fetch("js/projectList.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(Object.values(data));
    const listOfProjects = Object.values(data)
 

for (let i = 0; i<listOfProjects.length;i++){
    const projectItem = document.createElement("div");
    projectItem.className = 'project-item';

    const linkContain = document.createElement("a");
    linkContain.className = 'project-item-link';
    linkContain.target = '_blank';
    linkContain.href = listOfProjects[i];

    const pib = document.createElement("div");
    pib.className = 'project-item-bg';

    const pit = document.createElement("div");
    pit.className = 'project-item-title';
    
    const projectName = document.createTextNode(listOfProjects[i]);

    pit.appendChild(projectName);
    linkContain.appendChild(pib);
    linkContain.appendChild(pit);
    projectItem.appendChild(linkContain);
    document.getElementById("project").appendChild(projectItem);
}


})