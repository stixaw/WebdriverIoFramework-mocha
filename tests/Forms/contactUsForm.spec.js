const request = require('sync-request');

browser.addCommand("submitContactForm", (firstName, lastName, emailAddress, comments) => {
    if(firstName){
        $('[name="first_name"]').setValue(firstName);
    }
    if(lastName){
        $('[name="last_name"]').setValue(lastName);
    }
    if(emailAddress){
        $('[name="email"]').setValue(emailAddress);
    }
    if(comments){
    $('[name="message"]').setValue(comments);
    }
    const submitButton = $("input[type='submit']");
    submitButton.click();
});

const url = "http://www.webdriveruniversity.com/Contact-Us/contactus.html"

describe("Test ContactUs Form", () => {
    describe("Successfull Submission", () => {
        let contactDetail;
        const res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');
        const contactusDetails = JSON.parse(res.getBody().toString('utf8'));
        console.log(contactusDetails)

        contactusDetails.forEach((contactDetail) => {
            it("should be successful when all fields are provided", () => {
                browser.url(url);
                browser.waitUntil(() => $("#contact_form").isVisible(), 5000);
                browser.submitContactForm("test", "tester", contactDetail.email, contactDetail.body)

                // $('[name="first_name"]').setValue("test");
                // $('[name="last_name"]').setValue("tester");
                // $('[name="email"]').setValue(contactDetail.email);
                // $('[name="message"]').setValue(contactDetail.body);

                // const submitButton = $("input[type='submit']")
                // submitButton.click();
                browser.waitUntil(() => $("h1").isVisible, 5000);

                expect($("#contact_reply h1").getText()).to.equal("Thank You for your Message!")
            });
        });
    });

    describe("Unsuccessful Submission", () => {
        describe("When email address is not provided", () => {
            before(() => {
                browser.url(url);
                browser.waitUntil(() => $("#contact_form").isVisible(), 5000);
                browser.submitContactForm("test", "tester", "", "Message Input")

                // $('[name="first_name"]').setValue("test");
                // $('[name="last_name"]').setValue("tester");
                // $('[name="message"]').setValue("Message Input");
            });

            it("should fail to submit with error php page", () => {
                // const submitButton = $("input[type='submit']")
                // submitButton.click();
                const badUrl = browser.getUrl();
                expect(badUrl).to.contain("/Contact-Us/contact_us.php")
            });

            it("should show the error: ", () => {
                const errorMessage = $("body").getText();
                expect(errorMessage).to.equal('Error: all fields are required\nError: Invalid email address');
            });
        });

        describe("When first name is not provided", () => {
            before(() => {
                browser.url(url);
                browser.waitUntil(() => $("#contact_form").isVisible(), 5000);
                browser.submitContactForm("", "tester", "test@pc.com", "Message Input")

                // $('[name="last_name"]').setValue("tester");
                // $('[name="email"]').setValue("test@pc.com");
                // $('[name="message"]').setValue("Message Input");
            });

            it("should fail to submit with error php page", () => {
                // const submitButton = $("input[type='submit']")
                // submitButton.click();
                const badUrl = browser.getUrl();
                expect(badUrl).to.contain("/Contact-Us/contact_us.php")
            });

            it("should show the error: ", () => {
                const errorMessage = $("body").getText();
                expect(errorMessage).to.equal("Error: all fields are required");
            });
        });

        describe("When last name is not provided", () => {
            before(() => {
                browser.url(url);
                browser.waitUntil(() => $("#contact_form").isVisible(), 5000);
                browser.submitContactForm("test", "", "test@pc.com", "Message Input")

                // $('[name="first_name"]').setValue("test");
                // $('[name="email"]').setValue("test@pc.com");
                // $('[name="message"]').setValue("Message Input");
            });

            it("should fail to submit with error php page", () => {
                // const submitButton = $("input[type='submit']")
                // submitButton.click();
                const badUrl = browser.getUrl();
                expect(badUrl).to.contain("/Contact-Us/contact_us.php")
            });

            it("should show the error: ", () => {
                const errorMessage = $("body").getText();
                expect(errorMessage).to.equal("Error: all fields are required");
            });


        });

        describe("When message is not provided", () => {
            before(() => {
                browser.url(url);
                browser.waitUntil(() => $("#contact_form").isVisible(), 5000);
                browser.submitContactForm("test", "tester", "test@pc.com", "")

                // $('[name="first_name"]').setValue("test");
                // $('[name="last_name"]').setValue("tester");
                // $('[name="email"]').setValue("test@pc.com");
            });

            it("should fail to submit with error php page", () => {
                // const submitButton = $("input[type='submit']")
                // submitButton.click();
                const badUrl = browser.getUrl();
                expect(badUrl).to.contain("/Contact-Us/contact_us.php")
            });

            it("should show the error: ", () => {
                const errorMessage = $("body").getText();
                expect(errorMessage).to.equal("Error: all fields are required");
            });
        });
    }); 
});