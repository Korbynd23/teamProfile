
const generateHtml = (employeeBucket) => {  
    console.log(employeeBucket)

    return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

        <title>Document</title>
    </head>
    <body>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${employeeBucket.Manager.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${manager.title}</h6>
            <p class="card-text">${manager.email}</p>
            <p class="card-text">${manager.officeNum}</p>
        </div>
    </div>    
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${engineer.title}</h6>
            <p class="card-text">${engineer.email}</p>
            <p class="card-text">${engineer.gitHub}</p>
        </div>
    </div>    
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${intern.title}</h6>
            <p class="card-text">${intern.email}</p>
            <p class="card-text">${intern.school}</p>
        </div>
    </div>    
            `)}


module.exports = generateHtml;

