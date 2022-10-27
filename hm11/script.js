class User {
    constructor(data) {
        this.data = {
            id: data.id,
            name:  data.name,
            email: data.email,
            address: data.address,
            phone: data.phone
        }
    }
    
    edit(obj) {
        this.data = obj;
        return obj;
    }
    
    get() {
        return this.data;
    }

}

class Contacts {

    #data = [];
    

    add(data) {
        let user = new User(data);
        this.#data.push(user);
        
    }

    edit(id, obj) {  
        this.#data[id].edit(obj); 
        
    }

    remove(id) {
        this.#data.splice(id, 1);
    }

    get() {
        return this.#data;
    }


}

class ContactsApp extends Contacts {
    constructor() {
        super();       
    }

    #createContact(contact) {
        let parent = document.querySelector('.contacts');

        this.app = document.createElement('div');
        this.app.classList.add('contact__item');
        parent.append(this.app);

        this.title = document.createElement('div');
        this.title.classList.add('contact__title');
        this.title.innerHTML = contact.data.name;

        this.content = document.createElement('div');
        this.content.classList.add('contact__content');

        this.contentAll = document.createElement('div');
        this.contentAll.classList.add('contact__content--all');
        
        this.spanEmail = document.createElement('span');
        this.spanEmail.classList.add('contact__content--email');
        this.spanEmail.innerHTML = "email: <a>" + contact.data.email + "</a>";

        this.spanAddress = document.createElement('span');
        this.spanAddress.classList.add('contact__content--address');
        this.spanAddress.innerHTML = "address: <a>" + contact.data.address + "</a>";

        this.spanPhone = document.createElement('span');
        this.spanPhone.classList.add('contact__content--phone');
        this.spanPhone.innerHTML = "phone: <a>" + contact.data.phone + "</a>";

        this.buttonDiv = document.createElement('div');
        this.buttonDiv.classList.add('contact__content--btns');
        this.buttonEdit = document.createElement('button');
        this.buttonDelete = document.createElement('button');
        this.buttonEdit.classList.add('contact__content--edit');
        this.buttonDelete.classList.add('contact__content--delete');
        this.buttonDiv.append(this.buttonEdit);
        this.buttonDiv.append(this.buttonDelete);

        this.contentAll.append(this.spanEmail);
        this.contentAll.append(this.spanAddress);
        this.contentAll.append(this.spanPhone);
        this.content.append(this.contentAll);
        this.content.append(this.buttonDiv);

        this.app.append(this.title);
        this.app.append(this.content);       
    }

    saveContact() {
        let inputName = document.querySelector('.inputName'),
            inputEmail = document.querySelector('.inputEmail'),
            inputAddress = document.querySelector('.inputAddress'),
            inputPhone = document.querySelector('.inputPhone');

        if(!inputAddress || !inputEmail || !inputPhone || !inputName) return;

        if(!inputAddress.firstChild.value || !inputEmail.firstChild.value || !inputPhone.firstChild.value || !inputName.firstChild.value) return;

        let contact = new User({id: 0, name: inputName.firstChild.value, email: inputEmail.firstChild.value, address: inputAddress.firstChild.value, phone: inputPhone.firstChild.value});
        
        this.add(contact.data);
        let a = this.get();
        contact.data.id = a.length;
        super.edit(contact.data.id - 1, contact.data);
        
        this.#createContact(contact);
    }

    accordeon(event) {

        let allItems = document.querySelectorAll('.contact__item');
        let parent = event.target.closest('.contact__item');
        parent.classList.toggle('active');  

        allItems.forEach(function(item) {
            if(item != event.target.parentNode) item.classList.remove('active');
        });      
    }

    onEdit(event) {
        this.button = event.target;
        if(!this.button.classList.contains('saveEdit')) {
            this.email = event.target.parentNode.previousElementSibling.querySelector('.contact__content--email').childNodes[1];
            this.email.outerHTML = `<input class="inputElement" id="inEmail" type="text" value="${this.email.innerHTML}">`;
            
            this.address = event.target.parentNode.previousElementSibling.querySelector('.contact__content--address').childNodes[1];
            this.address.outerHTML = `<input class="inputElement" id="inAddress" type="text" value="${this.address.innerHTML}">`;

            this.phone = event.target.parentNode.previousElementSibling.querySelector('.contact__content--phone').childNodes[1];    
            this.phone.outerHTML = `<input class="inputElement" id="inPhone" type="text" value="${this.phone.innerHTML}">`;

            this.title = event.target.closest('.contact__content').previousElementSibling;    
            let tempTitle = this.title.innerHTML;
            this.title.innerHTML = `<input class="inputElement" id="inTitle" type="text" value="${tempTitle}">`;
            
            let allField = document.body.querySelectorAll('.inputElement');
            let tempId = this.get();
            let tempObj = {id: tempId.length, name: tempTitle, email: this.email.innerHTML, address: this.address.innerHTML, phone: this.phone.innerHTML};
            
            allField.forEach((item) => {
                item.addEventListener('change', () => {
                    switch(item.id) {
                        case 'inEmail': tempObj.email = item.value; break;
                        case 'inAddress': tempObj.address = item.value; break;
                        case 'inPhone': tempObj.phone = item.value; break;
                        case 'inTitle': tempObj.name = item.value; break;    
                    }   
                    super.edit(tempId.length - 1, tempObj);
                    this.get();
                });
            });
            
            this.button.classList.add('saveEdit');
        }else {
            
            this.email = event.target.parentNode.previousElementSibling.querySelector('.contact__content--email').childNodes[1];
            this.email.outerHTML = `<a>${this.email.value}</a>` 
             
            this.address = event.target.parentNode.previousElementSibling.querySelector('.contact__content--address').childNodes[1];
            this.address.outerHTML = `<a>${this.address.value}</a>`

            this.phone = event.target.parentNode.previousElementSibling.querySelector('.contact__content--phone').childNodes[1];    
            this.phone.outerHTML = `<a>${this.phone.value}</a>`

            this.title = event.target.closest('.contact__content').previousElementSibling.firstChild;    
            this.title.outerHTML = `${this.title.value}`
        
            this.button.classList.remove('saveEdit');
        }
    }

    onRemove(event) {
        let viewData = this.get();
        let item = event.target.closest('.contact__item');
        let checkFlag = false;
        for(let i = 0; i < viewData.length; i++) {
            if(viewData[i].data.name == item.querySelector('.contact__title').innerHTML && !checkFlag) {
                this.remove(viewData[i].data.id - 1);
                item.remove();
                checkFlag = true;
                if(i == 0 || i == viewData.length) break;
                viewData[i].data.id--;
                super.edit(viewData[i].data.id - 1, viewData[i].data);
            }else if(checkFlag) {
                viewData[i].data.id--;
                super.edit(viewData[i].data.id - 1, viewData[i].data);
            } 
        }
    }
}

    
/* Main */
/* Search didn`t do */
let contactsApp = new ContactsApp();

let allContacts = this.document.querySelector('.contacts');

allContacts.addEventListener('click', function(event) {
    if(event.target.classList.contains('contact__title')) {
        contactsApp.accordeon(event);
    } else if(event.target.classList.contains('contact__content--edit')) {
        contactsApp.onEdit(event); 
    } else if(event.target.classList.contains('contact__content--delete')){
        contactsApp.onRemove(event);
    }else return;
});

let addContact = this.document.querySelector('.plus');
let contactCard = document.querySelector('.addContact');
addContact.addEventListener('click', function() {
    contactCard.classList.remove('disable');
});

let save = this.document.querySelector('.save');
save.addEventListener('click', function(event) {
    contactsApp.saveContact();  
    contactCard.classList.add('disable'); 
});

    


