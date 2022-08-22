let shamsi = document.querySelector("#shamsi");
let miladi = document.querySelector("#miladi");
let convertToShamsi = document.querySelector("#cts");
let convertToMiladi = document.querySelector("#ctm");
let restart = document.querySelector("#restart");
let getweek = document.querySelector("#getweek");
let getdate = document.querySelectorAll(".getdate");
let showDate = document.querySelector("#h2");

function disableGetday(a) {
    if (a == 0) {
        this.dgd = (i) => getdate[i].setAttribute("disabled", "");
        getdate[0].value = "";
        getdate[1].value = "";
        getdate[2].value = "";
    } else if (a == 1) {
        this.dgd = (i) => getdate[i].removeAttribute("disabled", "");
    }
    dgd(0);
    dgd(1);
    dgd(2);
}
function miladiOrShamsi(enable, disable) {
    enable.addEventListener("click", () => {
        restart.removeAttribute("disabled", "");
        disableEnableKey(1);
        disable.setAttribute("disabled", "");
        let check_disabled = disable.attributes.length;
        if (check_disabled == 4) {
            enable.removeAttribute("disabled", "");
        }
        disableGetday(1);
    });
}
function restartKey() {
    function removeAttributeRestart(enable) {
        enable.removeAttribute("disabled", "");
    }
    removeAttributeRestart(shamsi);
    removeAttributeRestart(miladi);
    restart.setAttribute("disabled", "");
    disableEnableKey(0);
    disableGetday(0);
    showDate.innerHTML = "";
}
function disableEnableKey(a) {
    if (a == 0) {
        convertToMiladi.setAttribute("disabled", "");
        convertToShamsi.setAttribute("disabled", "");
        getweek.setAttribute("disabled", "");
        restart.setAttribute("disabled", "");
    } else if (a == 1) {
        convertToMiladi.removeAttribute("disabled", "");
        convertToShamsi.removeAttribute("disabled", "");
        getweek.removeAttribute("disabled", "");
    }
}
function miladiToShamsi() {
    let day = getdate[0].value || 1;
    let month = Number(getdate[1].value) - 1 || 1;
    let year = getdate[2].value || 2020;
    let date = new Date(year, month, day);
    showDate.innerHTML = new Intl.DateTimeFormat("fa", { day: "2-digit", month: "2-digit", year: "numeric", }).format(date);
}
function shamsiToMiladi() {
    let day = getdate[0].value || 1;
    let month = Number(getdate[1].value) || 1;
    let year = getdate[2].value || 1400;
    showDate.innerHTML = moment.from(`${year}/${month}/${day}`, "fa", "YYYY/M/D").format("YYYY/M/D");
}
function disableConvert() {
    if (miladi.attributes.length == 4) {
        convertToShamsi.setAttribute("disabled", "");
    } else if (shamsi.attributes.length == 4) {
        convertToMiladi.setAttribute("disabled", "");
    }
}
function getWeekKey() {
    let check_disabled_shamsi = shamsi.attributes.length;
    let check_disabled_miladi = miladi.attributes.length;
    if (check_disabled_shamsi == 4) {
        let day = getdate[0].value || 1;
        let month = Number(getdate[1].value) - 1 || 1;
        let year = getdate[2].value || 2020;
        let date = new Date(year, month, day);
        showDate.innerHTML = new Intl.DateTimeFormat("fa", { weekday: "long" }).format(date);
    } else if (check_disabled_miladi == 4) {
        let day = getdate[0].value || 1;
        let month = Number(getdate[1].value) || 1;
        let year = getdate[2].value || 1400;
        let date = moment.from(`${year}/${month}/${day}`, "fa", "YYYY/M/D").format("YYYY,M,D");
        date = new Date(date)
        showDate.innerHTML = new Intl.DateTimeFormat("fa", { weekday: "long" }).format(date);
    }
}

disableEnableKey(0);
disableGetday(0);
miladiOrShamsi(shamsi, miladi);
miladiOrShamsi(miladi, shamsi);
restart.addEventListener("click", restartKey);
convertToShamsi.addEventListener("click", miladiToShamsi);
convertToMiladi.addEventListener("click", shamsiToMiladi);
shamsi.addEventListener("click", disableConvert);
miladi.addEventListener("click", disableConvert);
getweek.addEventListener("click", getWeekKey)
