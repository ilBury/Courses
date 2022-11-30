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
        
        id <= 0 ? this.#data.splice(0, 1) : this.#data.splice(id, 1)
        
    }

    get() {
        return this.#data;
    }


}

class ContactsApp extends Contacts {
    constructor() {
        super();       
    }

    createContact(contact) {
        let parent = document.querySelector('.contacts');

        this.app = document.createElement('div');
        this.app.classList.add('contact__item');
        parent.append(this.app);

        this.title = document.createElement('div');
        this.title.classList.add('contact__title');
        this.title.innerHTML = contact.name;

        this.content = document.createElement('div');
        this.content.classList.add('contact__content');

        this.contentAll = document.createElement('div');
        this.contentAll.classList.add('contact__content--all');
        
        this.spanEmail = document.createElement('span');
        this.spanEmail.classList.add('contact__content--email');
        this.spanEmail.innerHTML = "email: <a>" + contact.email + "</a>";

        this.spanAddress = document.createElement('span');
        this.spanAddress.classList.add('contact__content--address');
        this.spanAddress.innerHTML = "address: <a>" + contact.address + "</a>";

        this.spanPhone = document.createElement('span');
        this.spanPhone.classList.add('contact__content--phone');
        this.spanPhone.innerHTML = "phone: <a>" + contact.phone + "</a>";

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
        contact.data.id = localStorage.length;
        
        this.storage = [contact.data, localStorage.length];
        this.add(JSON.parse(localStorage.getItem(localStorage.length - 1)));
        this.createContact(contact.data);

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
            let tempArr = this.get();

            let tempObj = {id: 0, name: tempTitle, email: this.email.innerHTML, address: this.address.innerHTML, phone: this.phone.innerHTML};

            for(let i = 0; i < tempArr.length; i++) {
                if(tempArr[i].data.phone == this.phone.innerHTML) tempObj.id = tempArr[i].data.id 
            }
            console.log(tempObj);
            allField.forEach((item) => {
                item.addEventListener('change', () => {
                    switch(item.id) {
                        case 'inEmail': tempObj.email = item.value; break;
                        case 'inAddress': tempObj.address = item.value; break;
                        case 'inPhone': tempObj.phone = item.value; break;
                        case 'inTitle': tempObj.name = item.value; break;    
                    }   
                    localStorage.setItem(tempObj.id, JSON.stringify(tempObj));
                    super.edit(tempObj.id, tempObj);
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

    /* 
    Так же добавить очищение строк в addContact после создания нового контакта + кнопка save
    Сделать поисковик*/
    onRemove(event) { //вообще говно код?
        let viewData = this.get();
        let item = event.target.closest('.contact__item');
        let checkDataFlag = false;
        for(let i = 0, j = 0; i < viewData.length; j++, i++) {
            if(viewData[i].data.name == item.querySelector('.contact__title').innerHTML && !checkDataFlag) {
                localStorage.removeItem(JSON.stringify(j));
                this.remove(viewData[i].data.id); 
                item.remove();
                checkDataFlag = true;
                if(i == viewData.length) continue;
                if(i == 0){j--, i--; continue;}
                viewData[i].data.id--;
                this.storage = [viewData[i].data, JSON.stringify(j)];
                localStorage.removeItem(JSON.stringify(++j)); j--;
                super.edit(viewData[i].data.id, viewData[i].data);
            }else if(checkDataFlag) {
                if(j != 0) localStorage.removeItem(JSON.stringify(j));
                viewData[i].data.id--;
                this.storage = [viewData[i].data, JSON.stringify(j)];
                if(i == viewData.length - 1) localStorage.removeItem(JSON.stringify(++j));
                super.edit(viewData[i].data.id, viewData[i].data);
            } 
        }
    }

    get storage() {
        let allItems = [];
        
        for(let item = 0; item < localStorage.length; item++) {
            allItems[item] = JSON.parse(localStorage.getItem(item)); 
        }
     
        return allItems;
    }

    set storage(item) {
        return localStorage.setItem(item[1], JSON.stringify(item[0]));
    }
}

/* localStorage.clear(); */
/* Main */
/* Search didn`t do */
let contactsApp = new ContactsApp();

if(localStorage.length > 0) {
    for(let i = 0; i < localStorage.length; i++) {
        contactsApp.add(JSON.parse(localStorage.getItem(i)));
        contactsApp.createContact(JSON.parse(localStorage.getItem(i)));
    }
}


let allContacts = this.document.querySelector('.contacts');

allContacts.addEventListener('click', function(event) {
    if(event.target.classList.contains('contact__title')) {
        contactsApp.accordeon(event);
    } else if(event.target.classList.contains('contact__content--edit')) {
        contactsApp.onEdit(event); 
    } else if(event.target.classList.contains('contact__content--delete')){
        contactsApp.onRemove(event);
    }else return;
    document.cookie = 'storageExpiration=nothing; max-age=60';
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
    document.cookie = 'storageExpiration=nothing; max-age=60'; 
});


    
document.addEventListener('DOMContentLoaded', function() {
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    if(!getCookie('storageExpiration')) {
        localStorage.clear();
    }

});


