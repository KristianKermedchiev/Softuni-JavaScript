function matchFullName (input){

    
    let result = '';
    let pattern = /\b[A-Z]{1}[a-z]+ [A-Z][a-z]+/g

    let match = pattern.exec(input);

    while(match	!== null){

        result += match[0] + " ";

        match = pattern.exec(input);
    }
    console.log(result);
    
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");