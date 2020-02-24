
firstNameInput() {
    return $('[name="first_name"]');
};

lastNameInput(){
    return $('[name="last_name"]');
};

emailInput(){
    return $('[name="email"]');
};

messageInput(){
    return $('[name="message"]');
};

submitButton(){
    return $("input[type='submit']");
};


inputForm(firstName, lastName, email, message){
    firstNameInput().setValue(firstName);
    lastNameInput().setValue(lastName);
    emailInput().setValue(email);
    messageInput().setValue(message);
}

submitForm(){
    submitButton().click();
}


