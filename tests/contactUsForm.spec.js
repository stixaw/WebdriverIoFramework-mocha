const url = "http://www.webdriveruniversity.com/Contact-Us/contactus.html"

describe("Test ContactUs Form", () => {
    describe("Successfull Submission", () => {
        before(() => {
            browser.url(url);
            browser.waitUntil(() => $("#contact_form").isVisible(), 5000);

            $('[name="email"]').setValue("test@pc.com");
            $('[name="first_name"]').setValue("test");
            $('[name="last_name"]').setValue("tester");
            $('[name="message"]').setValue("Message Input");
        })
        it("should be successful when all fields are provided", () => {
            const submitButton = $("input[type='submit']")
            submitButton.click();
            browser.waitUntil(() => $("h1").isVisible, 5000);
            let newUrl = browser.getUrl();
            expect(newUrl).to.contain("contact-form-thank-you.html");
        });
    });

    describe("Unsuccessful Submission", () => {
        describe("When email address is not provided", () => {
            before(() => {
                browser.url(url);
                browser.waitUntil(() => $("#contact_form").isVisible(), 5000);

                $('[name="first_name"]').setValue("test");
                $('[name="last_name"]').setValue("tester");
                $('[name="message"]').setValue("Message Input");
            });

            it("should fail to submit with error php page", () => {
                const submitButton = $("input[type='submit']")
                submitButton.click();
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

                $('[name="last_name"]').setValue("tester");
                $('[name="email"]').setValue("test@pc.com");
                $('[name="message"]').setValue("Message Input");
            });

            it("should fail to submit with error php page", () => {
                const submitButton = $("input[type='submit']")
                submitButton.click();
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

                $('[name="first_name"]').setValue("test");
                $('[name="email"]').setValue("test@pc.com");
                $('[name="message"]').setValue("Message Input");
            });

            it("should fail to submit with error php page", () => {
                const submitButton = $("input[type='submit']")
                submitButton.click();
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

                $('[name="first_name"]').setValue("test");
                $('[name="last_name"]').setValue("tester");
                $('[name="email"]').setValue("test@pc.com");
            });

            it("should fail to submit with error php page", () => {
                const submitButton = $("input[type='submit']")
                submitButton.click();
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