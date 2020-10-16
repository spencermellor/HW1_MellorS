fetch('./data/classData.json')
    .then((res) => res.json())
    .then((response) => {

    const panel = document.querySelector('.profPanelText')

    panel.children[0].textContent = response.coursename + ' - ' + response.coursecode
    panel.children[1].textContent = 'Professor - ' +  response.profname
    panel.children[2].textContent = response.classtime[0] + ' & ' + response.classtime[1]
    
    const info = document.querySelector('.courseInfo')

    info.children[0].textContent = response.coursename
    info.children[2].textContent = response.coursedesc

    const lowerNav = document.querySelector('.weeklySched ul')

    // trying a different way 

    for (content of response.coursecontent) {
        const listitem = document.createElement('li');
        listitem.textContent = content;
        lowerNav.appendChild(listitem)
    }

    })

    .catch(err => {
        console.log(err);
    })