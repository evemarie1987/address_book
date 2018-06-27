'use strict';

function saveContacts(contacts) {
	saveDomStorage('contacts', contacts);
}

function loadContacts() {
	var contacts = loadDomStorage('contacts');

	if (contacts === null ) {
		contacts = [];
		saveContacts(contacts);
		contacts = loadDomStorage('contacts');
	}

	return contacts;

}

function createContact(title, firstName, lastName, phone) {

	var contact;

	contact           = new Object();
	contact.firstName = firstName;
	contact.lastName  = lastName.toUpperCase();
	contact.phone     = phone;

	switch(title) {
		case '1':
		contact.title = 'Mme.';
		break;

		case '2':
		contact.title = 'Mlle.';
		break;

		case '3':
		contact.title = 'M.';
		break;
	}

	return contact;
}

function getContactInfo(contactId) {
	var contacts = loadContacts();
	var contact = contacts[contactId];

	switch(contact.title) {
		case 'Mme.':
		contact.title = 1;
		break;

		case 'Mlle.':
		contact.title = 2;
		break;

		case 'M.':
		contact.title = 3;
		break;
	}
	return contact;
}


function addContact(contact) {
	var contacts = loadContacts();
	contacts.push(contact);
	saveContacts(contacts);
}

function editContact(contact, contactId) {
	var contacts = loadContacts();


	contacts[contactId]	= contact;
	saveContacts(contacts);
}


function displayContacts() {
	$('.content ul').empty();
	var contacts = loadContacts();
	var toAppend ='';

	for (var i = 0; i < contacts.length; i++) {
		toAppend = contacts[i].title +' ' +contacts[i].firstName+' '+contacts[i].lastName;
		toAppend = '<li><a href="#" contactId="'+i+'">'+toAppend+'</a></li>';

		$('.content ul').append(toAppend);
	}
}


function displayForm(title, firstName, lastName, phone) {
	
	$('select[name=title]').val(title);
	$('input[name=firstName').val(firstName);
	$('input[name=lastName]').val(lastName);
	$('input[name=phone]').val(phone);

	$('#contact-form').show();	
}

function displayAddress() {
	var contacts = loadContacts();
	
	var contactId = this.getAttribute('contactid');
	var contact = contacts[contactId];

	$('.address').attr('id',contactId);
	$('.address h3').empty();
	$('.address h3').append(contact.title + ' ' + contact.firstName + ' ' + contact.lastName);
	$('.address p').empty();
	$('.address p').append(contact.phone);

	$('.address').show();
}





function hideAddress() {
	$('.address h3').empty();
	$('.address p').empty();
	$('.address').attr('id','');

	$('.address').hide();
}

function hideForm() {
	$('select[name=title]').val(1);
	$('input[name=firstName').val('');
	$('input[name=lastName]').val('');
	$('input[name=phone]').val('');
	
	$('#contact-form').hide();	
}
