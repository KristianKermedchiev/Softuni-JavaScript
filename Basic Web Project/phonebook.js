let phonebook = [

	
];

function getPhonebook(){
	return phonebook;
}

function addNumber(contact){
	phonebook.push(contact);
}

module.exports = {
	getPhonebook,
	addNumber
}

/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/