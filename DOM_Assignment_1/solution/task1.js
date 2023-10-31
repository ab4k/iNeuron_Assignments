const newLists = `
    <li><a href="#" target="_blank">Projects</a></li>
    <li><a href="#" target="_blank">Hire Me</a></li>
`;

const ul = document.getElementById("list-parent");
ul.getElementsByTagName("li")[2].remove();
ul.innerHTML += newLists;
