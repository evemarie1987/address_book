'use strict';
$(function(){


/*On affiche les contacts*/
displayContacts();


/*Events Listeners*/

//Affichage de l'adresse; this doit enovyer les donnes permettabnt d'afficher le bon contact
$(document).on('click','.content ul li a', displayAddress);


// ajouter un contact; on s'assure d'etre en mode 'add' et on affiche le formulaire avec les valeurs par defaut
$('#add').on('click',function(){
	$('#contact-form').data('mode', 'add');
	displayForm(1,'','','');

});

// effacer les contacts; on efface tout et on reaffiche
$('#reset').on('click', function(){
	var contacts = [];
	saveContacts(contacts);
	contacts = loadDomStorage('contacts');
	hideForm();
	hideAddress();
	displayContacts();
});


//enregistrer contact : on récupère les infos, on ajoute ou edite suivant le cas, on cache le formulaire et eventuellement l'adresse en les vidant puis on rafraichit les contacts
$(document).on('click','#save-contact',function(){
	var contact = createContact(
		$('select[name=title]').val(),
		$('input[name=firstName').val(),
		$('input[name=lastName]').val(),
		$('input[name=phone]').val()
	);


	if ($('#contact-form').data('mode') === 'add') {
		
		addContact(contact);
	}

	else {
		var contactId = $('.address').attr('id');
		editContact(contact, contactId);
	}
	
	hideForm();
	hideAddress();
	displayContacts();
});
//ce genre d'event est bcp plus gorumand en memoire!!! n'utiliser que si necessaire


//editer un contact; il va falloir passer le form en data-mode:edit avant de l'afficher et récuperer les valeurs
$(document).on('click', '#edit', function(){
	$('#contact-form').data('mode','edit');
	var contactId = $('.address').attr('id');
	var contact = getContactInfo(contactId);
	displayForm(contact.title,contact.firstName, contact.lastName, contact.phone);
		

});

});