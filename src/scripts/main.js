import createInformation from "./ContactForm"
import contactListToDom from "./ContactList"
//things we need to pull and inject into the ^^
console.log("hello")
//just checking to make sure we can see the JS main^^
const submitButton= document.querySelector("#submitButton")
//targeting the submit buitton^^
contactListToDom()
//displaying contactList to the dom^^
//import contact list and contact form
submitButton.addEventListener("click",()=>{
  createInformation()})