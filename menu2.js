fetch('menu.json')
.then(response => response.json())
.then( data => {
    const menuContainer = document.getElementById
    ('menu-container');
    let total = 0;
    data.items.forEach(category =>{
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.category;
        menuContainer.appendChild(categoryTitle);

        const table = document.createElement('table');
        let tableContent = <tr><th>Foto</th><th>Descripcion</th><th>Precio</th><th>Seleccionar</th></tr>;

        category.items.forEach(item=>{
            tableBody +=
            <tr>
                <td>< img src="${item.image} " alt="${item.name} " ></img> </td>
                <td>${item.name} - ${item.descrpcion} </td>
                <td><input type="checkbox" data-price="${item.price.replace('&','') } " onchange="updateTotal() " ></input></td>


            </tr>
        }
        
        )



            
        
    })
}

)