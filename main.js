
 const api = "https://api.github.com/users/howa9999-coder/repos"
async function getData(){
        try{
            const response = await fetch(api)
            const data = await response.json();
            console.log(data)
            let content = '';
            for (let x = 0; x < data.length; x++) {
            content += '<tr>';
            content += `<td>${data[x].id}</td>`;
            content += `<td>${data[x].name}</td>`;
            content += `<td>${data[x].full_name}</td>`;
            content += `<td> <a href="${data[x].html_url}">${data[x].html_url}</a> </td>`;
            content += `<td>${data[x].language}</td>`;
            content += `<td>${data[x].visibility}</td>`;
            content += `<td>${data[x].watchers}</td>`;
            content += '</tr>';
            };
              // Insert into the table
        document.querySelector("table tbody").innerHTML = content;
        }catch(e){
            console.log("Error:" ,e.message)
        }
    }  
getData() 

  