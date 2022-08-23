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