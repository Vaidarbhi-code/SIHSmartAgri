/* =========================================================
   SMARTAGRI
   Main JavaScript
   Frontend Functionality
========================================================= */


/* =========================================================
   1. GLOBAL DATA
========================================================= */

let selectedLanguage = localStorage.getItem("smartagriLanguage") || "en";

let currentUser = JSON.parse(
    localStorage.getItem("smartagriCurrentUser") || "null"
);


/* =========================================================
   2. LANGUAGE DATA
========================================================= */

const translations = {

    en: {
        dashboard: "Dashboard",
        marketPrices: "Market Prices",
        weather: "Weather",
        schemes: "Government Schemes",
        cropScanner: "Crop Scanner",
        aiAssistant: "AI Assistant",
        aiVoice: "AI Voice Assistant",
        labour: "Labour",
        machinery: "Machinery",
        settings: "Settings",
        about: "About SmartAgri",
        logout: "Logout",
        welcome: "Welcome to SmartAgri",
        smartFarming: "Smart Farming, Better Farming"
    },

    hi: {
        dashboard: "डैशबोर्ड",
        marketPrices: "बाज़ार भाव",
        weather: "मौसम",
        schemes: "सरकारी योजनाएँ",
        cropScanner: "फसल स्कैनर",
        aiAssistant: "AI सहायक",
        aiVoice: "AI वॉइस सहायक",
        labour: "मज़दूर",
        machinery: "कृषि मशीनरी",
        settings: "सेटिंग्स",
        about: "SmartAgri के बारे में",
        logout: "लॉगआउट",
        welcome: "SmartAgri में आपका स्वागत है",
        smartFarming: "स्मार्ट खेती, बेहतर खेती"
    },

    mr: {
        dashboard: "डॅशबोर्ड",
        marketPrices: "बाजार भाव",
        weather: "हवामान",
        schemes: "शासकीय योजना",
        cropScanner: "पीक स्कॅनर",
        aiAssistant: "AI सहाय्यक",
        aiVoice: "AI व्हॉइस सहाय्यक",
        labour: "शेतमजूर",
        machinery: "शेती यंत्रसामग्री",
        settings: "सेटिंग्ज",
        about: "SmartAgri बद्दल",
        logout: "लॉगआउट",
        welcome: "SmartAgri मध्ये आपले स्वागत आहे",
        smartFarming: "स्मार्ट शेती, उत्तम शेती"
    }

};


/* =========================================================
   3. INITIALIZE APP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("SmartAgri loaded successfully.");

    initializeConnectionStatus();

    initializeLanguage();

    initializeLocation();

    initializeRole();

    initializeSidebar();

    restoreSession();

});


/* =========================================================
   4. LANGUAGE PAGE
========================================================= */

function selectLanguage(language) {

    selectedLanguage = language;

    localStorage.setItem(
        "smartagriLanguage",
        language
    );

    console.log("Selected language:", language);

    showAuthPage();
}


/* =========================================================
   SHOW AUTH PAGE
========================================================= */

function showAuthPage() {

    const languagePage =
        document.getElementById("languagePage");

    const authPage =
        document.getElementById("authPage");

    const dashboardPage =
        document.getElementById("dashboardPage");

    if (languagePage) {
        languagePage.classList.add("hidden");
    }

    if (authPage) {
        authPage.classList.remove("hidden");
    }

    if (dashboardPage) {
        dashboardPage.classList.add("hidden");
    }

    updateDashboardLanguage();

}


/* =========================================================
   5. AUTH PAGE FUNCTIONS
========================================================= */

function showSignIn() {

    hideAllAuthForms();

    const form =
        document.getElementById("signInForm");

    if (form) {
        form.classList.remove("hidden");
    }

}


function showSignUp() {

    hideAllAuthForms();

    const form =
        document.getElementById("signUpForm");

    if (form) {
        form.classList.remove("hidden");
    }

}


function showForgotPassword() {

    hideAllAuthForms();

    const form =
        document.getElementById("forgotPasswordForm");

    if (form) {
        form.classList.remove("hidden");
    }

}


function hideAllAuthForms() {

    const forms = [
        "signInForm",
        "signUpForm",
        "forgotPasswordForm"
    ];

    forms.forEach(function (id) {

        const element =
            document.getElementById(id);

        if (element) {
            element.classList.add("hidden");
        }

    });

}


/* =========================================================
   6. SIGN UP
========================================================= */

function signUp() {

    const name =
        getValue("signupName");

    const mobile =
        getValue("signupMobile");

    const email =
        getValue("signupEmail");

    const state =
        getValue("signupState");

    const city =
        getValue("signupCity");

    const mandi =
        getValue("signupMandi");

    const acres =
        getValue("signupAcres");

    const password =
        getValue("signupPassword");

    const confirmPassword =
        getValue("confirmPassword");


    const roleElement =
        document.querySelector(
            'input[name="userRole"]:checked'
        );

    const role =
        roleElement
            ? roleElement.value
            : "";


    /* -----------------------------------------------------
       VALIDATION
    ----------------------------------------------------- */

    if (!name) {
        showMessage("Please enter your full name.");
        return;
    }

    if (!mobile) {
        showMessage("Please enter your mobile number.");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        showMessage(
            "Please enter a valid 10-digit mobile number."
        );
        return;
    }

    if (!email) {
        showMessage("Please enter your email.");
        return;
    }

    if (!isValidEmail(email)) {
        showMessage(
            "Please enter a valid email address."
        );
        return;
    }

    if (!state) {
        showMessage("Please select your state.");
        return;
    }

    if (!city) {
        showMessage("Please select your city.");
        return;
    }

    if (!mandi) {
        showMessage("Please select your mandi.");
        return;
    }

    if (!acres) {
        showMessage(
            "Please enter your land area."
        );
        return;
    }

    if (!role) {
        showMessage(
            "Please select your role."
        );
        return;
    }


    /* -----------------------------------------------------
       FARMER CROP
    ----------------------------------------------------- */

    let crop = "";

    if (role === "farmer") {

        crop =
            getValue("signupCrop");

        if (!crop) {

            showMessage(
                "Please select your primary crop."
            );

            return;
        }

    }


    if (!password) {

        showMessage(
            "Please create a password."
        );

        return;
    }


    if (password.length < 6) {

        showMessage(
            "Password must contain at least 6 characters."
        );

        return;
    }


    if (password !== confirmPassword) {

        showMessage(
            "Passwords do not match."
        );

        return;
    }


    /* -----------------------------------------------------
       CREATE DEMO USER
    ----------------------------------------------------- */

    const user = {

        id: Date.now(),

        name: name,

        mobile: mobile,

        email: email,

        state: state,

        city: city,

        mandi: mandi,

        acres: acres,

        role: role,

        crop: crop,

        password: password,

        createdAt:
            new Date().toISOString()

    };


    localStorage.setItem(
        "smartagriUser",
        JSON.stringify(user)
    );


    localStorage.setItem(
        "smartagriCurrentUser",
        JSON.stringify(user)
    );


    currentUser = user;


    showMessage(
        "Account created successfully!"
    );


    setTimeout(function () {

        openDashboard();

    }, 700);

}


/* =========================================================
   7. SIGN IN
========================================================= */

function signIn() {

    const email =
        getValue("signinEmail");

    const password =
        getValue("signinPassword");


    if (!email) {

        showMessage(
            "Please enter your email."
        );

        return;
    }


    if (!isValidEmail(email)) {

        showMessage(
            "Please enter a valid email."
        );

        return;
    }


    if (!password) {

        showMessage(
            "Please enter your password."
        );

        return;
    }


    const savedUser =
        JSON.parse(
            localStorage.getItem(
                "smartagriUser"
            )
        );


    if (!savedUser) {

        showMessage(
            "No account found. Please create an account first."
        );

        return;
    }


    if (
        savedUser.email !== email ||
        savedUser.password !== password
    ) {

        showMessage(
            "Incorrect email or password."
        );

        return;
    }


    currentUser = savedUser;


    localStorage.setItem(
        "smartagriCurrentUser",
        JSON.stringify(savedUser)
    );


    showMessage(
        "Signed in successfully!"
    );


    setTimeout(function () {

        openDashboard();

    }, 500);

}


/* =========================================================
   8. FORGOT PASSWORD
========================================================= */

function resetPassword() {

    const email =
        getValue("forgotEmail");


    if (!email) {

        showMessage(
            "Please enter your email address."
        );

        return;
    }


    if (!isValidEmail(email)) {

        showMessage(
            "Please enter a valid email."
        );

        return;
    }


    const savedUser =
        JSON.parse(
            localStorage.getItem(
                "smartagriUser"
            )
        );


    if (
        !savedUser ||
        savedUser.email !== email
    ) {

        showMessage(
            "No account was found with this email."
        );

        return;
    }


    showMessage(
        "Password reset would be sent to your email when Supabase Auth is connected."
    );

}


/* =========================================================
   9. DEMO DASHBOARD
========================================================= */

function openDemoDashboard() {

    console.log(
        "Opening SmartAgri Demo Dashboard."
    );


    currentUser = {

        name: "Demo Farmer",

        mobile: "",

        email: "",

        state: "Maharashtra",

        city: "Kopargaon",

        mandi: "Kopargaon Mandi",

        acres: "4.5",

        role: "farmer",

        crop: "Onion",

        demo: true

    };


    openDashboard();

}


/* =========================================================
   10. OPEN DASHBOARD
========================================================= */

function openDashboard() {

    const languagePage =
        document.getElementById("languagePage");

    const authPage =
        document.getElementById("authPage");

    const dashboardPage =
        document.getElementById("dashboardPage");


    if (languagePage) {
        languagePage.classList.add("hidden");
    }

    if (authPage) {
        authPage.classList.add("hidden");
    }

    if (dashboardPage) {
        dashboardPage.classList.remove("hidden");
    }


    updateUserInformation();

    updateDashboardLanguage();

    initializeConnectionStatus();

    closeSidebar();

}


/* =========================================================
   11. RESTORE SESSION
========================================================= */

function restoreSession() {

    const savedSession =
        localStorage.getItem(
            "smartagriCurrentUser"
        );


    if (!savedSession) {
        return;
    }


    try {

        currentUser =
            JSON.parse(savedSession);

    } catch (error) {

        console.error(
            "Could not restore session.",
            error
        );

    }

}


/* =========================================================
   12. LOGOUT
========================================================= */

function logout() {

    localStorage.removeItem(
        "smartagriCurrentUser"
    );

    currentUser = null;


    const dashboardPage =
        document.getElementById("dashboardPage");

    const authPage =
        document.getElementById("authPage");


    if (dashboardPage) {
        dashboardPage.classList.add("hidden");
    }

    if (authPage) {
        authPage.classList.remove("hidden");
    }


    showSignIn();

    closeSidebar();

}


/* =========================================================
   13. UPDATE USER INFORMATION
========================================================= */

function updateUserInformation() {

    if (!currentUser) {
        return;
    }


    const welcomeElements =
        document.querySelectorAll(
            "[data-user-name]"
        );


    welcomeElements.forEach(
        function (element) {

            element.textContent =
                currentUser.name || "Farmer";

        }
    );


    const locationElements =
        document.querySelectorAll(
            "[data-user-location]"
        );


    locationElements.forEach(
        function (element) {

            element.textContent =
                `${currentUser.city || ""}, ${currentUser.state || ""}`;

        }
    );


    const acresElements =
        document.querySelectorAll(
            "[data-user-acres]"
        );


    acresElements.forEach(
        function (element) {

            element.textContent =
                currentUser.acres
                    ? `${currentUser.acres} Acres`
                    : "";

        }
    );


    const mandiElements =
        document.querySelectorAll(
            "[data-user-mandi]"
        );


    mandiElements.forEach(
        function (element) {

            element.textContent =
                currentUser.mandi || "";

        }
    );

}


/* =========================================================
   14. ROLE CHANGE
========================================================= */

function handleRoleChange() {

    const roleElement =
        document.querySelector(
            'input[name="userRole"]:checked'
        );


    const cropSection =
        document.getElementById(
            "farmerCropSection"
        );


    if (!roleElement || !cropSection) {
        return;
    }


    if (
        roleElement.value === "farmer"
    ) {

        cropSection.classList.remove(
            "hidden"
        );

    } else {

        cropSection.classList.add(
            "hidden"
        );

        const crop =
            document.getElementById(
                "signupCrop"
            );

        if (crop) {
            crop.value = "";
        }

    }

}


/* =========================================================
   15. LOCATION DATA
========================================================= */

const locationData = {

    Maharashtra: {

        Kopargaon: [
            "Kopargaon Mandi"
        ],

        Ahmednagar: [
            "Ahmednagar Mandi"
        ],

        Nashik: [
            "Nashik Mandi",
            "Lasalgaon Mandi"
        ],

        Pune: [
            "Pune Mandi"
        ],

        Nagpur: [
            "Nagpur Mandi"
        ],

        Mumbai: [
            "Mumbai APMC"
        ],

        "Chhatrapati Sambhajinagar": [
            "Chhatrapati Sambhajinagar Mandi"
        ],

        Kolhapur: [
            "Kolhapur Mandi"
        ],

        Solapur: [
            "Solapur Mandi"
        ],

        Satara: [
            "Satara Mandi"
        ],

        Sangli: [
            "Sangli Mandi"
        ],

        Jalgaon: [
            "Jalgaon Mandi"
        ],

        Dhule: [
            "Dhule Mandi"
        ]

    }

};


/* =========================================================
   16. INITIALIZE LOCATION
========================================================= */

function initializeLocation() {

    const stateSelect =
        document.getElementById(
            "signupState"
        );

    const citySelect =
        document.getElementById(
            "signupCity"
        );

    const mandiSelect =
        document.getElementById(
            "signupMandi"
        );


    if (!stateSelect) {
        return;
    }


    stateSelect.addEventListener(
        "change",
        function () {

            populateCities(
                this.value,
                citySelect,
                mandiSelect
            );

        }
    );


    if (citySelect) {

        citySelect.addEventListener(
            "change",
            function () {

                populateMandis(
                    stateSelect.value,
                    this.value,
                    mandiSelect
                );

            }
        );

    }

}


/* =========================================================
   17. POPULATE CITIES
========================================================= */

function populateCities(
    state,
    citySelect,
    mandiSelect
) {

    if (!citySelect) {
        return;
    }


    citySelect.innerHTML =
        '<option value="">Select City</option>';


    if (mandiSelect) {

        mandiSelect.innerHTML =
            '<option value="">Select Mandi</option>';

    }


    if (
        !locationData[state]
    ) {

        return;

    }


    Object.keys(
        locationData[state]
    ).forEach(
        function (city) {

            const option =
                document.createElement(
                    "option"
                );

            option.value = city;

            option.textContent = city;

            citySelect.appendChild(
                option
            );

        }
    );

}


/* =========================================================
   18. POPULATE MANDIS
========================================================= */

function populateMandis(
    state,
    city,
    mandiSelect
) {

    if (!mandiSelect) {
        return;
    }


    mandiSelect.innerHTML =
        '<option value="">Select Mandi</option>';


    if (
        !locationData[state] ||
        !locationData[state][city]
    ) {

        return;

    }


    locationData[state][city]
        .forEach(
            function (mandi) {

                const option =
                    document.createElement(
                        "option"
                    );

                option.value = mandi;

                option.textContent = mandi;

                mandiSelect.appendChild(
                    option
                );

            }
        );

}


/* =========================================================
   19. CONNECTION STATUS
========================================================= */

function initializeConnectionStatus() {

    updateConnectionStatus();


    window.addEventListener(
        "online",
        updateConnectionStatus
    );


    window.addEventListener(
        "offline",
        updateConnectionStatus
    );

}


function updateConnectionStatus() {

    const dot =
        document.getElementById(
            "connectionDot"
        );

    const text =
        document.getElementById(
            "connectionText"
        );


    if (!dot || !text) {
        return;
    }


    if (navigator.onLine) {

        dot.textContent = "●";

        text.textContent = "Online";

        dot.style.color =
            "#00b894";

    } else {

        dot.textContent = "●";

        text.textContent = "Offline";

        dot.style.color =
            "#d92d5c";

    }

}


/* =========================================================
   20. DASHBOARD LANGUAGE
========================================================= */

function initializeLanguage() {

    const selector =
        document.getElementById(
            "dashboardLanguage"
        );


    if (!selector) {
        return;
    }


    selector.value =
        selectedLanguage;


    selector.addEventListener(
        "change",
        function () {

            selectedLanguage =
                this.value;

            localStorage.setItem(
                "smartagriLanguage",
                selectedLanguage
            );

            updateDashboardLanguage();

        }
    );

}


/* =========================================================
   21. UPDATE LANGUAGE
========================================================= */

function updateDashboardLanguage() {

    const language =
        translations[selectedLanguage];


    if (!language) {
        return;
    }


    const elements =
        document.querySelectorAll(
            "[data-translate]"
        );


    elements.forEach(
        function (element) {

            const key =
                element.getAttribute(
                    "data-translate"
                );


            if (
                language[key]
            ) {

                element.textContent =
                    language[key];

            }

        }
    );


    const selector =
        document.getElementById(
            "dashboardLanguage"
        );


    if (selector) {
        selector.value =
            selectedLanguage;
    }

}


/* =========================================================
   22. SIDEBAR
========================================================= */

function initializeSidebar() {

    const hamburger =
        document.querySelector(
            ".hamburger-btn"
        );

    const closeButton =
        document.querySelector(
            ".close-menu"
        );

    const overlay =
        document.querySelector(
            ".sidebar-overlay"
        );


    if (hamburger) {

        hamburger.addEventListener(
            "click",
            openSidebar
        );

    }


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeSidebar
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            closeSidebar
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeSidebar();

            }

        }
    );

}


function openSidebar() {

    const sidebar =
        document.querySelector(
            ".sidebar"
        );

    const overlay =
        document.querySelector(
            ".sidebar-overlay"
        );


    if (sidebar) {

        sidebar.classList.add(
            "open"
        );

    }


    if (overlay) {

        overlay.classList.remove(
            "hidden"
        );

    }

}


function closeSidebar() {

    const sidebar =
        document.querySelector(
            ".sidebar"
        );

    const overlay =
        document.querySelector(
            ".sidebar-overlay"
        );


    if (sidebar) {

        sidebar.classList.remove(
            "open"
        );

    }


    if (overlay) {

        overlay.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   23. SIDEBAR NAVIGATION
========================================================= */

function navigateTo(section) {

    console.log(
        "Opening section:",
        section
    );


    closeSidebar();


    const title =
        document.getElementById(
            "dashboardPageTitle"
        );


    const placeholder =
        document.getElementById(
            "featurePlaceholder"
        );


    const placeholderTitle =
        document.getElementById(
            "featureTitle"
        );


    const placeholderText =
        document.getElementById(
            "featureDescription"
        );


    const sections = {

        dashboard: {
            title: "Dashboard",
            description:
                "Your smart farming overview."
        },

        marketPrices: {
            title: "Market Prices",
            description:
                "View current market prices and mandi information."
        },

        weather: {
            title: "Weather",
            description:
                "Weather information for your selected location."
        },

        schemes: {
            title: "Government Schemes",
            description:
                "Explore agricultural government schemes and benefits."
        },

        cropScanner: {
            title: "Crop Scanner",
            description:
                "Analyze your crop using AI-powered image analysis."
        },

        aiAssistant: {
            title: "AI Assistant",
            description:
                "Ask agriculture-related questions and get intelligent guidance."
        },

        aiVoice: {
            title: "AI Voice Assistant",
            description:
                "Interact with SmartAgri using voice assistance."
        },

        labour: {
            title: "Labour",
            description:
                "Find and manage agricultural labour requirements."
        },

        machinery: {
            title: "Machinery",
            description:
                "Find agricultural machinery and equipment."
        },

        settings: {
            title: "Settings",
            description:
                "Manage your SmartAgri preferences."
        },

        about: {
            title: "About SmartAgri",
            description:
                "SmartAgri provides intelligent agricultural market and farming information."
        }

    };


    if (
        section === "dashboard"
    ) {

        showDashboardHome();

        return;

    }


    const data =
        sections[section];


    if (!data) {
        return;
    }


    if (title) {

        title.textContent =
            data.title;

    }


    if (placeholderTitle) {

        placeholderTitle.textContent =
            data.title;

    }


    if (placeholderText) {

        placeholderText.textContent =
            data.description;

    }


    if (placeholder) {

        placeholder.classList.remove(
            "hidden"
        );

    }


    hideDashboardSections();


    updateActiveMenu(section);

}


/* =========================================================
   24. SHOW DASHBOARD HOME
========================================================= */

function showDashboardHome() {

    const title =
        document.getElementById(
            "dashboardPageTitle"
        );


    if (title) {
        title.textContent =
            "Dashboard";
    }


    const placeholder =
        document.getElementById(
            "featurePlaceholder"
        );


    if (placeholder) {

        placeholder.classList.add(
            "hidden"
        );

    }


    const homeSections =
        document.querySelectorAll(
            ".dashboard-home-section"
        );


    homeSections.forEach(
        function (section) {

            section.classList.remove(
                "hidden"
            );

        }
    );


    updateActiveMenu(
        "dashboard"
    );

}


/* =========================================================
   25. HIDE DASHBOARD SECTIONS
========================================================= */

function hideDashboardSections() {

    const homeSections =
        document.querySelectorAll(
            ".dashboard-home-section"
        );


    homeSections.forEach(
        function (section) {

            section.classList.add(
                "hidden"
            );

        }
    );

}


/* =========================================================
   26. ACTIVE MENU
========================================================= */

function updateActiveMenu(
    section
) {

    const menuItems =
        document.querySelectorAll(
            ".menu-item"
        );


    menuItems.forEach(
        function (item) {

            item.classList.remove(
                "active"
            );


            const itemSection =
                item.getAttribute(
                    "data-section"
                );


            if (
                itemSection === section
            ) {

                item.classList.add(
                    "active"
                );

            }

        }
    );

}


/* =========================================================
   27. MARKET DATA
========================================================= */

const demoMarketData = [

    {
        crop: "Onion",
        market: "Kopargaon",
        min: "₹1,800",
        max: "₹2,400",
        modal: "₹2,100"
    },

    {
        crop: "Wheat",
        market: "Ahmednagar",
        min: "₹2,200",
        max: "₹2,650",
        modal: "₹2,425"
    },

    {
        crop: "Soybean",
        market: "Nashik",
        min: "₹4,300",
        max: "₹4,800",
        modal: "₹4,550"
    }

];


/* =========================================================
   28. LOAD MARKET DATA
========================================================= */

function loadMarketData() {

    console.log(
        "Market data requested."
    );


    const tableBody =
        document.getElementById(
            "marketTableBody"
        );


    if (!tableBody) {
        return;
    }


    tableBody.innerHTML = "";


    demoMarketData.forEach(
        function (item) {

            const row =
                document.createElement(
                    "tr"
                );


            row.innerHTML = `

                <td>${item.crop}</td>

                <td>${item.market}</td>

                <td>${item.min}</td>

                <td>${item.max}</td>

                <td>${item.modal}</td>

            `;


            tableBody.appendChild(
                row
            );

        }
    );

}


/* =========================================================
   29. WEATHER
========================================================= */

function updateWeather() {

    const citySelect =
        document.getElementById(
            "dashboardCity"
        );


    const weatherLocation =
        document.getElementById(
            "weatherLocation"
        );


    if (!weatherLocation) {
        return;
    }


    const city =
        citySelect
            ? citySelect.value
            : "Kopargaon";


    weatherLocation.textContent =
        city || "Kopargaon";


    console.log(
        "Weather location:",
        city
    );

}


/* =========================================================
   30. UTILITY FUNCTIONS
========================================================= */

function getValue(id) {

    const element =
        document.getElementById(id);


    if (!element) {
        return "";
    }


    return element.value.trim();

}


function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}


/* =========================================================
   31. MESSAGE
========================================================= */

function showMessage(message) {

    console.log(
        "SmartAgri:",
        message
    );


    /*
       Use existing message element
       if your HTML has one.
    */

    const messageBox =
        document.getElementById(
            "messageBox"
        );


    if (messageBox) {

        messageBox.textContent =
            message;

        messageBox.classList.remove(
            "hidden"
        );


        setTimeout(
            function () {

                messageBox.classList.add(
                    "hidden"
                );

            },
            3500
        );


        return;
    }


    /*
       Simple fallback.
    */

    alert(message);

}


/* =========================================================
   32. INITIALIZE ROLE
========================================================= */

function initializeRole() {

    const roleInputs =
        document.querySelectorAll(
            'input[name="userRole"]'
        );


    roleInputs.forEach(
        function (input) {

            input.addEventListener(
                "change",
                handleRoleChange
            );

        }
    );

}


/* =========================================================
   33. INITIALIZE MARKET + WEATHER
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadMarketData();

        updateWeather();

    }
);


/* =========================================================
   34. DASHBOARD LOCATION
========================================================= */

function updateDashboardLocation() {

    const state =
        getValue(
            "dashboardState"
        );

    const city =
        getValue(
            "dashboardCity"
        );


    console.log(
        "Selected dashboard location:",
        state,
        city
    );


    updateWeather();

    loadMarketData();

}


/* =========================================================
   35. DEMO DEFAULT LOCATION
========================================================= */

function setDemoLocation() {

    const state =
        document.getElementById(
            "dashboardState"
        );

    const city =
        document.getElementById(
            "dashboardCity"
        );


    if (state) {
        state.value =
            "Maharashtra";
    }


    if (city) {
        city.value =
            "Kopargaon";
    }


    updateDashboardLocation();

}


/* =========================================================
   36. PREVENT FORM RELOAD
========================================================= */

document.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

    }
);


/* =========================================================
   37. MOBILE SIDEBAR
========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 900
        ) {

            closeSidebar();

        }

    }
);


/* =========================================================
   SMARTAGRI READY
========================================================= */

console.log(
    "SmartAgri JavaScript initialized."
);