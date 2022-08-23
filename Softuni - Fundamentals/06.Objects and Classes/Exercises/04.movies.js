function movies (input){

    let newArray = [];

    input.forEach(el => {
        if(el.includes('addMovie')){
            let movie = el.replace('addMovie ', '');
            newArray.push({name:movie});      
        } else if (el.includes('directedBy')){
            let movie = el.split(' directedBy ');
            let name = movie[0];
            let director = movie[1];
            // let [name, director] = el.split(' directedBy ');
            newArray.forEach(movie => {
                if(movie.name === name){
                    movie.director = director;
                }
            })
        } else if(el.includes('onDate')){
            let [name, date] = el.split(' onDate ');
            newArray.forEach(movie => {
                if(movie.name === name){
                    movie.date = date;
                }
            })
        }
        
    });
  
    newArray.forEach(movie => {
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    });


}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    );