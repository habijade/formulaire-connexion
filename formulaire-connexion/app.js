const nameInput = document.querySelector("#name");
const mailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordCheckInput = document.querySelector("#password_check");
const allInput = document.querySelectorAll(".input");
const button = document.querySelector(".login p");
const form = document.querySelector(".form");
const succes = document.querySelector(".succes");

const nameReg = /^[a-zA-Z0-9-_]+$/;
const mailReg =
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const symbolsReg = /[^a-zA-Z0-9]/;
const allLettersReg = /[a-z]/i;
const allNumbers = /[0-9]/;

let formIsOk = false;

let passwordValidStrong = {
  numbers: 0,
  letters: 0,
  symbols: 0,
};

let validInput = {
  lengthOk: 0,
  symbol: 0,
  mail: 0,
  password: 0,
  passwordCheck: 0,
};

nameInput.addEventListener("input", () => {
  if (nameInput.value.length < 4 || nameInput.value.length > 24) {
    document.querySelector("#error-length").style.display = "inline";
    validInput.lengthOk = 0;
  } else {
    document.querySelector("#error-length").style.display = "none";
    validInput.lengthOk = 1;
  }

  if (nameInput.value.search(nameReg) === 0) {
    document.querySelector("#error-symbol").style.display = "none";
    validInput.symbol = 1;
  } else if (nameInput.value.search(nameReg) === -1) {
    document.querySelector("#error-symbol").style.display = "inline";
    validInput.symbol = 0;
  }

  if ((nameInput.inputType = "deleteContentBackward")) {
    if (nameInput.value.length === 0) {
      document.querySelector("#error-symbol").style.display = "none";
      document.querySelector("#error-length").style.display = "none";
    }
  }
});

mailInput.addEventListener("input", () => {
  if (mailInput.value.search(mailReg) === 0) {
    document.querySelector("#error-mail").style.display = "none";
    validInput.mail = 1;
  } else if (mailInput.value.search(mailReg) === -1) {
    document.querySelector("#error-mail").style.display = "inline";
    validInput.mail = 0;
  }
  if ((mailInput.inputType = "deleteContentBackward")) {
    if (mailInput.value.length === 0) {
      document.querySelector("#error-mail").style.display = "none";
    }
  }
});
passwordInput.addEventListener("input", () => {
  if (passwordInput.value.search(symbolsReg) !== -1) {
    passwordValidStrong.symbols = 1;
  }
  if (passwordInput.value.search(allLettersReg) !== -1) {
    passwordValidStrong.letters = 1;
  }
  if (passwordInput.value.search(allNumbers) !== -1) {
    passwordValidStrong.numbers = 1;
  }

  if ((passwordInput.inputType = "deleteContentBackward")) {
    if (passwordInput.value.search(symbolsReg) === -1) {
      passwordValidStrong.symbols = 0;
    }
    if (passwordInput.value.search(allLettersReg) === -1) {
      passwordValidStrong.letters = 0;
    }
    if (passwordInput.value.search(allNumbers) === -1) {
      passwordValidStrong.numbers = 0;
    }
    if (passwordInput.value.length === 0) {
      document.querySelector("#error-password").style.display = "none";
    }
  }
  if (
    passwordValidStrong.numbers +
      passwordValidStrong.letters +
      passwordValidStrong.symbols !==
      3 ||
    passwordInput.value.length < 10
  ) {
    document.querySelector("#error-password").style.display = "inline";
    validInput.password = 0;
  } else {
    document.querySelector("#error-password").style.display = "none";
    validInput.password = 1;
  }

  if ((passwordInput.inputType = "deleteContentBackward")) {
    if (passwordInput.value.length === 0) {
      document.querySelector("#error-password").style.display = "none";
    }
  }
});

passwordCheckInput.addEventListener("input", () => {
  if (passwordCheckInput.value !== passwordInput.value) {
    document.querySelector("#error-password-check").style.display = "inline";
    validInput.passwordCheck = 0;
  } else if (passwordCheckInput.value === passwordInput.value) {
    document.querySelector("#error-password-check").style.display = "none";
    validInput.passwordCheck = 1;
  }

  if ((passwordCheckInput.inputType = "deleteContentBackward")) {
    if (passwordCheckInput.value.length === 0) {
      document.querySelector("#error-password-check").style.display = "none";
    }
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordCheckInput.value !== "") {
    if (passwordCheckInput.value !== passwordInput.value) {
      document.querySelector("#error-password-check").style.display = "inline";
      validInput.passwordCheck = 0;
    }
  }
});

for (let i = 0; i < 4; i++) {
  allInput[i].addEventListener("input", () => {
    if (
      validInput.lengthOk == 1 &&
      validInput.symbol == 1 &&
      validInput.mail == 1 &&
      validInput.password == 1 &&
      validInput.passwordCheck
    ) {
      formIsOk = true;
    } else {
      formIsOk = false;
    }
    if (formIsOk === true) {
      button.style.backgroundColor = "#4c70e0";
      button.style.transition = "0.2s";
      button.style.cursor = "pointer";
      button.addEventListener("click", () => {
        succes.style.display = "inline";
      });
    } else {
      button.style.backgroundColor = "#9DADDF";
      button.style.transition = "0.3s";
      button.style.cursor = "not-allowed";
    }
  });
}
