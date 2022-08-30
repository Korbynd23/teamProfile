
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
   
            `)}


module.exports = generateHtml;

// filter out managers from employee bucket === manager    call managerhtml