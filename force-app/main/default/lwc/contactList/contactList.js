import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';

import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ContactList extends LightningElement {

    columns =[
        {label: 'First Name', fieldName: FIRST_NAME.fieldApiName, type: 'text'},
        {label: 'Last Name', fieldName: LAST_NAME.fieldApiName, type: 'text' },
        {label: 'Email', fieldName: CONTACT_EMAIL.fieldApiName, type: 'email'}
    ];
    @wire (getContacts) contacts;

    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
}