const puppeteer = require("puppeteer");
const { post } = require("./post");
let currentBrowserPage;
let secondBrowserPage;
let browserPages1;
let browser1;
let otp = [];

const browserOpenPromise = puppeteer.launch({
  headless: false,
  slowMo: 10,
  defaultViewport: null,
  args: ["--start-maximized"],
});
browserOpenPromise
  .then(function (browser) {
    browser1 = browser;
    const pagesArrPromise = browser.pages();
    return pagesArrPromise;
  })
  .then(function (browserPages) {
    browserPages1 = browserPages;
    currentBrowserPage = browserPages[0];
    let gotoPromise = currentBrowserPage.goto("https://www.google.co.in/");
    return gotoPromise;
  })
  .then(function () {
    let waitFor1sec = currentBrowserPage.waitForTimeout(1000);
    return waitFor1sec;
  })
  .then(function () {
    console.log("waited for 1 sec");
  })

  .then(function () {
    let keysWillBeSendPromise = waitAndType(
      "input[type='text']",
      "pepcoding",
      currentBrowserPage
    );
    return keysWillBeSendPromise;
  })
  .then(function () {
    let keysWillBePressed = currentBrowserPage.keyboard.press("Enter");
    return keysWillBePressed;
  })
  .then(function () {
    let keywillBeSendpromise = waitAndClick(
      "h3.LC20lb.DKV0Md",
      currentBrowserPage
    );
    return keywillBeSendpromise;
  })
  .then(function () {
    let waitFor1sec = currentBrowserPage.waitForTimeout(5000);
    return waitFor1sec;
  })
  .then(function () {
    console.log("waited for 5 sec");
  })
  .then(function () {
    let clickNados = waitAndClick(
      "a[href='https://nados.pepcoding.com']",
      currentBrowserPage
    );
    return clickNados;
  })
  .then(function () {
    let clickLoginButton = waitAndClick(
      ".MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary",
      currentBrowserPage
    );
    return clickLoginButton;
  })
  .then(function () {
    let enterMobileNo = waitAndClick(".form-control", currentBrowserPage);
    return enterMobileNo;
  })
  .then(function () {
    let enterMobileNo = waitAndClick(".form-control", currentBrowserPage);
    return enterMobileNo;
  })
  .then(function () {
    let keyIsPressed = pressKey(".form-control", "8", currentBrowserPage);
    return keyIsPressed;
  })
  .then(function () {
    let keyIsPressed = pressKey(".form-control", "7", currentBrowserPage);
    return keyIsPressed;
  })
  .then(function () {
    let keyIsPressed = pressKey(".form-control", "0", currentBrowserPage);
    return keyIsPressed;
  })
  .then(function () {
    let keyIsPressed = pressKey(".form-control", "0", currentBrowserPage);
    return keyIsPressed;
  })
  .then(function () {
    let keyIsPressed = pressKey(".form-control", "8", currentBrowserPage);
    return keyIsPressed;
  })
  .then(function () {
    let keyIsPressed = pressKey(".form-control", "8", currentBrowserPage);
    return keyIsPressed;
  })
  .then(function () {
    let keyIsPressed = pressKey(".form-control", "4", currentBrowserPage);
    return keyIsPressed;
  })
  .then(function () {
    let keyIsPressed = pressKey(".form-control", "3", currentBrowserPage);
    return keyIsPressed;
  })
  .then(function () {
    let keyIsPressed = pressKey(".form-control", "5", currentBrowserPage);
    return keyIsPressed;
  })
  .then(function () {
    let keyIsPressed = pressKey(".form-control", "8", currentBrowserPage);
    return keyIsPressed;
  })
  .then(function () {
    let clickTheSubmitButton = waitAndClick(
      ".MuiButtonBase-root.MuiButton-root.MuiButton-contained.GettingStarted_submitBtn__1_8VW.MuiButton-containedPrimary.MuiButton-fullWidth",
      currentBrowserPage
    );
    return clickTheSubmitButton;
  })
  .then(function () {
    // console.log("browser Opened");
    const page2 = browser1.newPage();
    return page2;
  })
  .then(function (page2) {
    secondBrowserPage = page2;
    let gotoPromise = secondBrowserPage.goto(
      "https://login.yahoo.com/?.src=search&.intl=in&.lang=en-IN&.done=https%3A%2F%2Fin.search.yahoo.com%2F%3Ffr2%3Dinr&pspid=2114723002&activity=header-signin"
    );
    return gotoPromise;
  })
  .then(function () {
    let waitFor1sec = currentBrowserPage.waitForTimeout(3000);
    return waitFor1sec;
  })
  .then(function () {
    console.log("waited for 3 sec");
  })
  .then(function () {
    let keysWillBeSendPromise = waitAndType(
      "[type='text']",
      "rajeevsh00",
      secondBrowserPage
    );
    return keysWillBeSendPromise;
  })
  .then(function () {
    let clickLogin = waitAndClick("[id='login-signin']", secondBrowserPage);
    return clickLogin;
  })
  .then(function () {
    let waitFor1sec = currentBrowserPage.waitForTimeout(1000);
    return waitFor1sec;
  })
  .then(function () {
    console.log("waited for 1 sec");
  })
  .then(function () {
    let typePswrd = waitAndType(
      "[id='password-container']",
      "Tester@321",
      secondBrowserPage
    );
    return typePswrd;
  })
  .then(function () {
    let clickLogin = waitAndClick("[type='submit']", secondBrowserPage);
    return clickLogin;
  })
  .then(function () {
    let clickLogin = waitAndClick(".icon.mail", secondBrowserPage);
    return clickLogin;
  })
  .then(function () {
    let clickLogin = waitAndClick(
      ".D_F.ab_C.o_h.H_6D6F.em_N.E_fq7.J_x",
      secondBrowserPage
    );
    return clickLogin;
  })
  .then(function () {
    let clickLogin = waitAndClick("div> h2", secondBrowserPage);
    return clickLogin;
  })
  .then(function () {
    //to get the innertext form a html element
    const innerText = secondBrowserPage.evaluate(
      () => document.querySelector("div> h2").innerText
    );
    return innerText;
  })
  .then(function (xxx) {
    //storing otp to an array
    let otpArr = [];
    for (let i = 0; i < xxx.length; i++) {
      let num = parseInt(xxx[i]);
      otpArr.push(num);
    }
    otp = otpArr;
    return otpArr;
  })
  .then(function () {
    const previousTab = currentBrowserPage.bringToFront();
    return previousTab;
  })
  .then(function () {
    let waitFor1sec = currentBrowserPage.waitForTimeout(1000);
    return waitFor1sec;
  })
  .then(function () {
    console.log("waited for 1 sec");
  })
  .then(function () {
    //entering otp
    let typeDigit1 = pressKey(
      "div>.MuiBox-root.jss13>div",
      otp[0],
      currentBrowserPage
    );
    return typeDigit1;
  })
  .then(function () {
    let typeDigit2 = pressKey(
      "div>.MuiBox-root.jss13>div",
      otp[1],
      currentBrowserPage
    );
    return typeDigit2;
  })
  .then(function () {
    let typeDigit3 = pressKey(
      "div>.MuiBox-root.jss13>div",
      otp[2],
      currentBrowserPage
    );
    return typeDigit3;
  })
  .then(function () {
    let typeDigit4 = pressKey(
      "div>.MuiBox-root.jss13>div",
      otp[3],
      currentBrowserPage
    );
    return typeDigit4;
  })
  .then(function () {
    let typeDigit5 = pressKey(
      "div>.MuiBox-root.jss13>div",
      otp[4],
      currentBrowserPage
    );
    return typeDigit5;
  })
  .then(function () {
    let typeDigit6 = pressKey(
      "div>.MuiBox-root.jss13>div",
      otp[5],
      currentBrowserPage
    );
    return typeDigit6;
  })
  .then(function () {
    //finally , we are in
    let otpSubmit = waitAndClick(
      ".MuiButtonBase-root.MuiButton-root.MuiButton-contained.submit_btn.MuiButton-containedPrimary",
      currentBrowserPage
    );
    return otpSubmit;
  })
  .then(function () {
    let createPost = waitAndClick(
      ".feedSearchBar_container>[tabindex='0']",
      currentBrowserPage
    );
    return createPost;
  })
  .then(function () {
    let postIt = waitAndType(".createPostContent", post[0], currentBrowserPage);
    return postIt;
  })
  // .then(function () {
  //   let uploadIt = waitAndClick(
  //     "span> .MuiIconButton-label",
  //     currentBrowserPage
  //   );
  //   return uploadIt;
  //   }).then(function(){
  //     const elementHandle = currentBrowserPage.$("input[type=file]");
  //      elementHandle.uploadFile('E:\\pepcoding\\random\\dog_meme.jpg');
  //     //  currentBrowserPage.click('div>.MuiButton-contained.post_button');  // might not be necessary
  //     return elementHandle;
  // })
  .then(function () {
    let inputUploadHandle = currentBrowserPage.$("input[type='file']");
    return inputUploadHandle;
  })
  .then(function (inputUploadHandle) {
    let fileToUpload = "E:\\pepcoding\\random\\dog_meme.jpg";
    let fileSelected = inputUploadHandle.uploadFile(fileToUpload);
    return fileSelected;
  })
  .then(function () {
    let posting = waitAndClick(
      ".post_button.MuiButton-containedPrimary",
      currentBrowserPage
    );
    return posting;
  })

  .then(function () {
    console.log("file uploaded");
  })
  .catch(function (err) {
    console.log(err);
  });

// --------------------------FUNCTION FOR WAIT & CLICK--------------------------

function waitAndClick(selector, currentBrowserPage1) {
  return new Promise(function (resolve, reject) {
    let waitForModelPromise = currentBrowserPage1.waitForSelector(selector);
    waitForModelPromise
      .then(function () {
        let clickModal = currentBrowserPage1.click(selector, { delay: 200 });
        return clickModal;
      })
      .then(function () {
        resolve();
      })
      .catch(function (err) {
        reject();
      });
  });
}

// --------------------------FUNCTION FOR WAIT & TYPE--------------------------

function waitAndType(selector, text, currentBrowserPage1) {
  return new Promise(function (resolve, reject) {
    let waitForModelPromise = currentBrowserPage1.waitForSelector(
      selector,
      text
    );
    waitForModelPromise
      .then(function () {
        let typeModal = currentBrowserPage1.type(selector, text, {
          visible: true,
          delay: 10,
        });
        return typeModal;
      })
      .then(function () {
        resolve();
      })
      .catch(function (err) {
        reject();
      });
  });
}

//--------------------FUNCTION FOR PRESS KEY--------------------
function pressKey(selector, key, currentBrowserPage1) {
  return new Promise(function (resolve, reject) {
    let waitForPressPromise = currentBrowserPage1.waitForSelector(selector);
    waitForPressPromise
      .then(function () {
        let pressModal = currentBrowserPage1.keyboard.press(key, {
          visible: true,
          delay: 100,
        });
        return pressModal;
      })
      .then(function () {
        resolve();
      })
      .catch(function (err) {
        reject();
      });
  });
}
