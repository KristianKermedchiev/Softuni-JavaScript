const phonebook = require('../phonebook');
const Contact = require ('../models/Contact')
module.exports = {
  index: (req, res) => {
    res.render('index', {
     contacts: phonebook.getPhonebook()

    });
    // TODO: load index page
  },
  addPhonebookPost:(req, res) => {
    let name = req.body.name;
    let number = req.body.number;
    let newContact = new Contact(name, number);
    phonebook.addNumber(newContact);
    res.redirect('/')
    // TODO: add a phonebook object to the array
  }
}