let isPaused, video;

browser.addCommand('isVideoPaused', () => {
    isPaused = browser.execute(() => {
        video = document.getElementById('video1');
        return video.paused;
    })
    return isPaused.value;
});

describe("Video test", () => {
    let url = "https://www.w3schools.com/html/html5_video.asp";


    describe("when script executes", () => {
        before(() => {
            browser.url(url);
        });

        it("should validate video is paused when page loads", () => {
            isPaused = browser.isVideoPaused();
            expect(isPaused).to.be.true

        })

        it("should play the video", () => {
            video = $('#video1');
            video.click();
            isPaused = browser.isVideoPaused();
            expect(isPaused).to.be.false;
        });

    });

    describe("when script executes", () => {
        let videoWidth;

        before(() => {
            browser.url(url);
        });

        it("should alter the width of the video", () => {
            videoWidth = browser.execute(() => {
                video = document.querySelector('#video1');
                return video.style.width = "300px";
            })
            const newWidth = browser.getCssProperty("#video1", "width");
            expect(newWidth.value).to.equal("300px")
        });

    });

});