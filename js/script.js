let routes = {}
let templates = {}

let app_div = document.getElepentById('app')

const teachers = () => {
    let div = document.createElement('div')
    let link = document.createElement('a');
    link.href = '#/teachers';
    link.innerText = 'About';
    div.innerHTML = '<h1>Home</h1>';
    div.appendChild(link);
    app_div.appendChild(div);
}

const route = (path, template) => {
    if(typeof(template) === 'function'){
        return routes[path] = template;
    }
    else if(typeof template === 'string'){
        return routes[path] = templates[template]
    }
}