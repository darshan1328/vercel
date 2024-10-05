    let LinkId = 0;
        function addLink() {
            const link = document.getElementById('Link').value;
            const linkTag = document.getElementById('LinkTag').value;
            
            if (link === '' || linkTag === '') return;
            const data = {
                "Link": link,
                "LinkTag": linkTag 
            };


            LinkId++;
            const table = document.getElementById('LinkTable');
            const row = table.insertRow();
            row.setAttribute('id', `Link-${LinkId}`);

            row.innerHTML = `
                <td>${LinkId}</td>
                <td>${link}</td>
                <td id="tagg">${linkTag}</td>
                <td class="actions">
                    <button onclick="editLink(${LinkId})">EDIT</button>
                    <button onclick="deleteLink(${LinkId})">DELETE</button>
                    <button onclick="document.location='${link}'">Link</button>
                </td>
            `;
        }

        function editLink(id) {
            const row = document.getElementById(`Link-${id}`);
            const newLink = prompt("Edit Link:", row.cells[1].innerText);
            const newLinkTag = prompt("Edit Link Tag:", row.cells[2].innerText);
            
            if (newLink !== null) row.cells[1].innerText = newLink;
            if (newLinkTag !== null) row.cells[2].innerText = newLinkTag;
            
        }
        function deleteLink(id) {
            const row = document.getElementById(`Link-${id}`);
            row.parentNode.removeChild(row);
        }

        function goToLink(id){
            location.replace("https://chatgpt.com/");
        }

        function toggleMode() {
            var element = document.body;
            element.classList.toggle("dark-mode");
            element.classList.toggle("light-mode");
        }


    