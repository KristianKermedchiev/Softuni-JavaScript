function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll('input[type=button]'));

    for(let button of buttons){
        button.addEventListener('click', convert);
    }

    function convert(e){
        let value = Number(e.target.parentElement.querySelectorAll('input[type=text]').value);
        let unit = e.target.id;

        switch(unit){
            case 'daysBtn': populate(value);
            break;
            case'hoursBtn': populate(value) / 24;
            break;
            case'minutesBtn': populate(value / 24 / 60);
            break;
            case'secondsBtn': populate(value / 24/ 60 / 60)
            break;
        }
    }
    function populate (value){

    }
}