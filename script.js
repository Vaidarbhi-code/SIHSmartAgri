/* =========================================================
   SMARTAGRI - COMPLETE JAVASCRIPT
========================================================= */

let currentLanguage =
    localStorage.getItem("smartAgriLanguage") || "en";

let currentUser =
    JSON.parse(
        localStorage.getItem("smartAgriCurrentUser") || "null"
    );


/* =========================================================
   LANGUAGE TRANSLATIONS
========================================================= */

const translations = {

    en: {
        chooseLanguage: "Choose Your Language",
        selectLanguage: "Select your preferred language to continue",
        tagline: "Smart Farming, Better Farming",
        empowering: "Empowering Farmers with Smart Technology 🌾",

        welcomeBack: "Welcome Back",
        signInContinue: "Sign in to continue to SmartAgri",
        email: "Email Address",
        password: "Password",
        enterEmail: "Enter your email",
        enterPassword: "Enter your password",
        forgot: "Forgot Password?",
        signIn: "Sign In",
        noAccount: "Don't have an account?",
        signUp: "Sign Up",
        or: "OR",
        demo: "🌾 Explore Demo Dashboard",

        createAccount: "Create Account",
        joinSmartAgri: "Join SmartAgri and access smart farming tools",
        fullName: "Full Name",
        enterFullName: "Enter your full name",
        mobile: "Mobile Number",
        mobilePlaceholder: "Enter 10-digit mobile number",
        state: "State",
        selectState: "Select State",
        city: "City",
        selectCity: "Select City",
        mandi: "Preferred Mandi",
        selectMandi: "Select Preferred Mandi",
        landArea: "Land Area (Acres)",
        landPlaceholder: "Enter land area",
        role: "I am a:",
        farmer: "👨‍🌾 Farmer",
        officer: "👨‍💼 Agriculture Officer",
        normalPerson: "👤 Normal Person",
        cropQuestion: "Which crop do you grow?",
        primaryCrop: "Select Primary Crop",
        confirmPassword: "Confirm Password",
        confirmPasswordPlaceholder: "Confirm your password",
        alreadyAccount: "Already have an account?",
        resetPassword: "Reset Password",
        resetDescription:
            "Enter your email and we'll send you a password reset link.",
        sendReset: "Send Reset Link",
        rememberPassword: "Remember your password?",

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
        logout: "🚪 Logout",

        online: "Online",
        offline: "Offline",

        welcomeDashboard: "Welcome to SmartAgri 🌱",
        agriculturalIntelligence:
            "Agricultural intelligence at your fingertips.",

        locationTitle: "📍 Select Your Location",
        locationDescription:
            "Get weather and market information for your location",
        getInformation: "Get Information",

        liveMandi: "📊 Live Mandi Prices",
        currentPrices: "Current agricultural market prices",
        highest: "Highest Price",
        lowest: "Lowest Price",
        average: "Average Price",

        crop: "Crop",
        market: "Market",
        minPrice: "Min Price",
        maxPrice: "Max Price",
        modalPrice: "Modal Price",

        liveWeather: "🌦️ Live Weather",
        weatherDescription:
            "Weather information for your selected location",
        humidity: "Humidity",
        wind: "Wind",
        rain: "Rain",

        featureDefault: "SmartAgri Feature",
        featureDefaultDescription:
            "This feature will be available here."
    },

    hi: {
        chooseLanguage: "अपनी भाषा चुनें",
        selectLanguage: "जारी रखने के लिए अपनी पसंदीदा भाषा चुनें",
        tagline: "स्मार्ट खेती, बेहतर खेती",
        empowering: "स्मार्ट तकनीक के साथ किसानों को सशक्त बनाना 🌾",

        welcomeBack: "वापसी पर स्वागत है",
        signInContinue: "SmartAgri जारी रखने के लिए साइन इन करें",
        email: "ईमेल पता",
        password: "पासवर्ड",
        enterEmail: "अपना ईमेल दर्ज करें",
        enterPassword: "अपना पासवर्ड दर्ज करें",
        forgot: "पासवर्ड भूल गए?",
        signIn: "साइन इन",
        noAccount: "खाता नहीं है?",
        signUp: "साइन अप",
        or: "या",
        demo: "🌾 डेमो डैशबोर्ड देखें",

        createAccount: "खाता बनाएँ",
        joinSmartAgri: "SmartAgri से जुड़ें और स्मार्ट खेती के उपकरण प्राप्त करें",
        fullName: "पूरा नाम",
        enterFullName: "अपना पूरा नाम दर्ज करें",
        mobile: "मोबाइल नंबर",
        mobilePlaceholder: "10 अंकों का मोबाइल नंबर दर्ज करें",
        state: "राज्य",
        selectState: "राज्य चुनें",
        city: "शहर",
        selectCity: "शहर चुनें",
        mandi: "पसंदीदा मंडी",
        selectMandi: "पसंदीदा मंडी चुनें",
        landArea: "भूमि क्षेत्र (एकड़)",
        landPlaceholder: "भूमि क्षेत्र दर्ज करें",
        role: "मैं हूँ:",
        farmer: "👨‍🌾 किसान",
        officer: "👨‍💼 कृषि अधिकारी",
        normalPerson: "👤 सामान्य व्यक्ति",
        cropQuestion: "आप कौन सी फसल उगाते हैं?",
        primaryCrop: "मुख्य फसल चुनें",
        confirmPassword: "पासवर्ड की पुष्टि करें",
        confirmPasswordPlaceholder: "पासवर्ड दोबारा दर्ज करें",
        alreadyAccount: "पहले से खाता है?",
        resetPassword: "पासवर्ड रीसेट करें",
        resetDescription:
            "अपना ईमेल दर्ज करें और हम आपको पासवर्ड रीसेट लिंक भेजेंगे।",
        sendReset: "रीसेट लिंक भेजें",
        rememberPassword: "पासवर्ड याद है?",

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
        logout: "🚪 लॉगआउट",

        online: "ऑनलाइन",
        offline: "ऑफलाइन",

        welcomeDashboard: "SmartAgri में आपका स्वागत है 🌱",
        agriculturalIntelligence:
            "कृषि संबंधी जानकारी अब आपकी उंगलियों पर।",

        locationTitle: "📍 अपना स्थान चुनें",
        locationDescription:
            "अपने स्थान के लिए मौसम और बाजार की जानकारी प्राप्त करें",
        getInformation: "जानकारी प्राप्त करें",

        liveMandi: "📊 लाइव मंडी भाव",
        currentPrices: "वर्तमान कृषि बाजार भाव",
        highest: "उच्चतम भाव",
        lowest: "न्यूनतम भाव",
        average: "औसत भाव",

        crop: "फसल",
        market: "बाज़ार",
        minPrice: "न्यूनतम भाव",
        maxPrice: "अधिकतम भाव",
        modalPrice: "मॉडल भाव",

        liveWeather: "🌦️ लाइव मौसम",
        weatherDescription:
            "आपके चुने हुए स्थान की मौसम जानकारी",
        humidity: "नमी",
        wind: "हवा",
        rain: "बारिश",

        featureDefault: "SmartAgri सुविधा",
        featureDefaultDescription:
            "यह सुविधा यहाँ उपलब्ध होगी।"
    },

    mr: {
        chooseLanguage: "तुमची भाषा निवडा",
        selectLanguage: "पुढे जाण्यासाठी तुमची पसंतीची भाषा निवडा",
        tagline: "स्मार्ट शेती, उत्तम शेती",
        empowering: "स्मार्ट तंत्रज्ञानाच्या मदतीने शेतकऱ्यांना सक्षम बनवणे 🌾",

        welcomeBack: "पुन्हा स्वागत आहे",
        signInContinue: "SmartAgri सुरू ठेवण्यासाठी साइन इन करा",
        email: "ईमेल पत्ता",
        password: "पासवर्ड",
        enterEmail: "तुमचा ईमेल टाका",
        enterPassword: "तुमचा पासवर्ड टाका",
        forgot: "पासवर्ड विसरलात?",
        signIn: "साइन इन",
        noAccount: "खाते नाही?",
        signUp: "साइन अप",
        or: "किंवा",
        demo: "🌾 डेमो डॅशबोर्ड पहा",

        createAccount: "खाते तयार करा",
        joinSmartAgri:
            "SmartAgri मध्ये सामील व्हा आणि स्मार्ट शेतीची साधने वापरा",
        fullName: "पूर्ण नाव",
        enterFullName: "तुमचे पूर्ण नाव टाका",
        mobile: "मोबाईल नंबर",
        mobilePlaceholder: "10 अंकी मोबाईल नंबर टाका",
        state: "राज्य",
        selectState: "राज्य निवडा",
        city: "शहर",
        selectCity: "शहर निवडा",
        mandi: "पसंतीची मंडी",
        selectMandi: "पसंतीची मंडी निवडा",
        landArea: "जमीन क्षेत्र (एकर)",
        landPlaceholder: "जमीन क्षेत्र टाका",
        role: "मी आहे:",
        farmer: "👨‍🌾 शेतकरी",
        officer: "👨‍💼 कृषी अधिकारी",
        normalPerson: "👤 सामान्य व्यक्ती",
        cropQuestion: "तुम्ही कोणते पीक घेता?",
        primaryCrop: "मुख्य पीक निवडा",
        confirmPassword: "पासवर्डची पुष्टी करा",
        confirmPasswordPlaceholder: "पासवर्ड पुन्हा टाका",
        alreadyAccount: "आधीच खाते आहे?",
        resetPassword: "पासवर्ड रीसेट करा",
        resetDescription:
            "तुमचा ईमेल टाका आणि आम्ही तुम्हाला पासवर्ड रीसेट लिंक पाठवू.",
        sendReset: "रीसेट लिंक पाठवा",
        rememberPassword: "पासवर्ड आठवतोय?",

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
        logout: "🚪 लॉगआउट",

        online: "ऑनलाइन",
        offline: "ऑफलाइन",

        welcomeDashboard: "SmartAgri मध्ये आपले स्वागत आहे 🌱",
        agriculturalIntelligence:
            "कृषीविषयक माहिती आता आपल्या हातात.",

        locationTitle: "📍 तुमचे स्थान निवडा",
        locationDescription:
            "तुमच्या स्थानासाठी हवामान आणि बाजाराची माहिती मिळवा",
        getInformation: "माहिती मिळवा",

        liveMandi: "📊 लाईव्ह मंडी भाव",
        currentPrices: "सध्याचे कृषी बाजार भाव",
        highest: "सर्वाधिक भाव",
        lowest: "सर्वात कमी भाव",
        average: "सरासरी भाव",

        crop: "पीक",
        market: "बाजार",
        minPrice: "किमान भाव",
        maxPrice: "कमाल भाव",
        modalPrice: "मोडल भाव",

        liveWeather: "🌦️ लाईव्ह हवामान",
        weatherDescription:
            "तुमच्या निवडलेल्या स्थानाची हवामान माहिती",
        humidity: "आर्द्रता",
        wind: "वारा",
        rain: "पाऊस",

        featureDefault: "SmartAgri सुविधा",
        featureDefaultDescription:
            "ही सुविधा येथे उपलब्ध असेल."
    }

};


/* =========================================================
   WHEN PAGE LOADS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("SmartAgri JavaScript loaded.");

    setupConnectionStatus();

    setupLocation();

    applyLanguage(currentLanguage);

    if (currentUser) {
        console.log("Previous session found.");
    }

});


/* =========================================================
   LANGUAGE SELECTION PAGE
========================================================= */

function selectLanguage(language) {

    if (!translations[language]) {
        language = "en";
    }

    currentLanguage = language;

    localStorage.setItem(
        "smartAgriLanguage",
        language
    );

    applyLanguage(language);

    showAuthPage();

}


/* =========================================================
   SHOW AUTH PAGE
========================================================= */

function showAuthPage() {

    document
        .getElementById("languagePage")
        .classList.add("hidden");

    document
        .getElementById("dashboardPage")
        .classList.add("hidden");

    document
        .getElementById("authPage")
        .classList.remove("hidden");

    showSignIn();

}


/* =========================================================
   SHOW SIGN IN
========================================================= */

function showSignIn() {

    document
        .getElementById("signInForm")
        .classList.remove("hidden");

    document
        .getElementById("signUpForm")
        .classList.add("hidden");

    document
        .getElementById("forgotPasswordForm")
        .classList.add("hidden");

}


/* =========================================================
   SHOW SIGN UP
========================================================= */

function showSignUp() {

    document
        .getElementById("signInForm")
        .classList.add("hidden");

    document
        .getElementById("signUpForm")
        .classList.remove("hidden");

    document
        .getElementById("forgotPasswordForm")
        .classList.add("hidden");

}


/* =========================================================
   SHOW FORGOT PASSWORD
========================================================= */

function showForgotPassword() {

    document
        .getElementById("signInForm")
        .classList.add("hidden");

    document
        .getElementById("signUpForm")
        .classList.add("hidden");

    document
        .getElementById("forgotPasswordForm")
        .classList.remove("hidden");

}


/* =========================================================
   SIGN UP
========================================================= */

function signUp() {

    const name =
        document.getElementById("signupName").value.trim();

    const mobile =
        document.getElementById("signupMobile").value.trim();

    const email =
        document.getElementById("signupEmail").value.trim();

    const state =
        document.getElementById("signupState").value;

    const city =
        document.getElementById("signupCity").value;

    const mandi =
        document.getElementById("signupMandi").value;

    const acres =
        document.getElementById("signupAcres").value;

    const password =
        document.getElementById("signupPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    const selectedRole =
        document.querySelector(
            'input[name="userRole"]:checked'
        );


    if (!name) {
        showMessage("Please enter your full name.");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        showMessage(
            "Please enter a valid 10-digit mobile number."
        );
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

    if (!acres || Number(acres) <= 0) {
        showMessage(
            "Please enter a valid land area."
        );
        return;
    }

    if (!selectedRole) {
        showMessage(
            "Please select your role."
        );
        return;
    }


    let crop = "";

    if (selectedRole.value === "farmer") {

        const cropElement =
            document.getElementById("signupCrop");

        crop =
            cropElement
                ? cropElement.value
                : "";

        if (!crop) {
            showMessage(
                "Please select your primary crop."
            );
            return;
        }

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


    const user = {

        name,
        mobile,
        email,
        state,
        city,
        mandi,
        acres,
        role: selectedRole.value,
        crop,
        password

    };


    localStorage.setItem(
        "smartAgriUser",
        JSON.stringify(user)
    );

    localStorage.setItem(
        "smartAgriCurrentUser",
        JSON.stringify(user)
    );


    currentUser = user;


    showMessage(
        "Account created successfully!"
    );


    setTimeout(function () {

        openDashboard();

    }, 600);

}


/* =========================================================
   SIGN IN
========================================================= */

function signIn() {

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;


    if (!isValidEmail(email)) {

        showMessage(
            "Please enter a valid email address."
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
                "smartAgriUser"
            )
        );


    if (!savedUser) {

        showMessage(
            "No account found. Please sign up first."
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
        "smartAgriCurrentUser",
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
   FORGOT PASSWORD
========================================================= */

function resetPassword() {

    const email =
        document.getElementById("resetEmail").value.trim();


    if (!isValidEmail(email)) {

        showMessage(
            "Please enter a valid email address."
        );

        return;
    }


    const savedUser =
        JSON.parse(
            localStorage.getItem(
                "smartAgriUser"
            )
        );


    if (
        !savedUser ||
        savedUser.email !== email
    ) {

        showMessage(
            "No account found with this email."
        );

        return;
    }


    showMessage(
        "Password reset will be connected to Supabase Auth."
    );

}


/* =========================================================
   DEMO DASHBOARD
========================================================= */

function openDemoDashboard() {

    currentUser = {

        name: "Demo Farmer",

        mobile: "",

        email: "",

        state: "Maharashtra",

        city: "Kopargaon",

        mandi: "Kopargaon Mandi",

        acres: "4.5",

        role: "farmer",

        crop: "onion",

        demo: true

    };


    openDashboard();

}


/* =========================================================
   OPEN DASHBOARD
========================================================= */

function openDashboard() {

    document
        .getElementById("languagePage")
        .classList.add("hidden");

    document
        .getElementById("authPage")
        .classList.add("hidden");

    document
        .getElementById("dashboardPage")
        .classList.remove("hidden");


    closeSidebar();


    if (currentUser) {

        const stateSelect =
            document.getElementById("stateSelect");

        const citySelect =
            document.getElementById("citySelect");


        if (stateSelect) {
            stateSelect.value =
                currentUser.state || "Maharashtra";
        }


        if (citySelect && currentUser.city) {
            citySelect.value =
                currentUser.city;
        }

    }


    applyLanguage(currentLanguage);

    updateLocation();

}


/* =========================================================
   LOGOUT
========================================================= */

function logout() {

    currentUser = null;

    localStorage.removeItem(
        "smartAgriCurrentUser"
    );


    document
        .getElementById("dashboardPage")
        .classList.add("hidden");

    document
        .getElementById("authPage")
        .classList.remove("hidden");


    showSignIn();

}


/* =========================================================
   FARMER ROLE
========================================================= */

function handleRoleChange() {

    const selectedRole =
        document.querySelector(
            'input[name="userRole"]:checked'
        );


    const cropSection =
        document.getElementById(
            "farmerCropSection"
        );


    if (!selectedRole || !cropSection) {
        return;
    }


    if (
        selectedRole.value === "farmer"
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
   SIDEBAR
========================================================= */

function openSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    const overlay =
        document.getElementById("sidebarOverlay");


    if (sidebar) {
        sidebar.classList.add("open");
    }

    if (overlay) {
        overlay.classList.remove("hidden");
    }

}


function closeSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    const overlay =
        document.getElementById("sidebarOverlay");


    if (sidebar) {
        sidebar.classList.remove("open");
    }

    if (overlay) {
        overlay.classList.add("hidden");
    }

}


/* =========================================================
   DASHBOARD HOME
========================================================= */

function showDashboardHome() {

    document
        .getElementById("marketPrices")
        .classList.remove("hidden");

    document
        .getElementById("weather")
        .classList.remove("hidden");

    document
        .getElementById("featureContent")
        .classList.add("hidden");


    setActiveMenu(0);

    closeSidebar();

}


/* =========================================================
   OPEN SIDEBAR FEATURE
========================================================= */

function openFeature(feature) {

    const market =
        document.getElementById("marketPrices");

    const weather =
        document.getElementById("weather");

    const featureContent =
        document.getElementById("featureContent");

    const featureTitle =
        document.getElementById("featureTitle");

    const featureDescription =
        document.getElementById("featureDescription");

    const featureIcon =
        document.getElementById("featureIcon");


    /*
       Hide normal dashboard sections
    */

    market.classList.add("hidden");

    weather.classList.add("hidden");

    featureContent.classList.remove("hidden");


    const featureData = {

        marketPrices: {
            title: "Market Prices",
            description:
                "Current agricultural market prices will be shown here.",
            icon: "📊"
        },

        weather: {
            title: "Weather",
            description:
                "Weather information for your selected location.",
            icon: "🌦️"
        },

        schemes: {
            title: "Government Schemes",
            description:
                "Agricultural government schemes and benefits will be available here.",
            icon: "🏛️"
        },

        cropScanner: {
            title: "Crop Scanner",
            description:
                "Upload a crop image to analyze crop health using AI.",
            icon: "🌱"
        },

        aiAssistant: {
            title: "AI Assistant",
            description:
                "Ask agriculture-related questions and get intelligent assistance.",
            icon: "🤖"
        },

        aiVoice: {
            title: "AI Voice Assistant",
            description:
                "Interact with SmartAgri using voice assistance.",
            icon: "🎙️"
        },

        labour: {
            title: "Labour",
            description:
                "Find agricultural labour information here.",
            icon: "👷"
        },

        machinery: {
            title: "Machinery",
            description:
                "Find agricultural machinery and equipment here.",
            icon: "🚜"
        },

        settings: {
            title: "Settings",
            description:
                "Manage your SmartAgri preferences and settings.",
            icon: "⚙️"
        },

        about: {
            title: "About SmartAgri",
            description:
                "SmartAgri helps farmers make smarter decisions using agricultural intelligence.",
            icon: "ℹ️"
        }

    };


    const data =
        featureData[feature];


    if (!data) {
        return;
    }


    featureTitle.textContent =
        data.title;

    featureDescription.textContent =
        data.description;

    featureIcon.textContent =
        data.icon;


    /*
       If user clicks Market Prices
    */

    if (feature === "marketPrices") {

        market.classList.remove(
            "hidden"
        );

        featureContent.classList.add(
            "hidden"
        );

    }


    /*
       If user clicks Weather
    */

    if (feature === "weather") {

        weather.classList.remove(
            "hidden"
        );

        featureContent.classList.add(
            "hidden"
        );

    }


    /*
       Active menu
    */

    const menuItems =
        document.querySelectorAll(
            ".menu-item"
        );


    menuItems.forEach(
        function (item) {

            item.classList.remove(
                "active"
            );

        }
    );


    const featureIndex = {

        marketPrices: 1,
        weather: 2,
        schemes: 3,
        cropScanner: 4,
        aiAssistant: 5,
        aiVoice: 6,
        labour: 7,
        machinery: 8,
        settings: 9,
        about: 10

    };


    if (
        featureIndex[feature] !== undefined
    ) {

        const item =
            menuItems[
                featureIndex[feature]
            ];

        if (item) {
            item.classList.add(
                "active"
            );
        }

    }


    closeSidebar();

}


/* =========================================================
   ACTIVE MENU
========================================================= */

function setActiveMenu(index) {

    const menuItems =
        document.querySelectorAll(
            ".menu-item"
        );


    menuItems.forEach(
        function (item, i) {

            if (i === index) {

                item.classList.add(
                    "active"
                );

            } else {

                item.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =========================================================
   CONNECTION STATUS
========================================================= */

function setupConnectionStatus() {

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


    const t =
        translations[currentLanguage];


    if (navigator.onLine) {

        dot.textContent = "●";

        text.textContent =
            t.online;

        dot.style.color =
            "#00b894";

    } else {

        dot.textContent = "●";

        text.textContent =
            t.offline;

        dot.style.color =
            "#d92d5c";

    }

}


/* =========================================================
   DASHBOARD LANGUAGE
========================================================= */

function changeDashboardLanguage(language) {

    if (!translations[language]) {
        return;
    }


    currentLanguage =
        language;


    localStorage.setItem(
        "smartAgriLanguage",
        language
    );


    applyLanguage(language);

}


/* =========================================================
   APPLY LANGUAGE TO WHOLE UI
========================================================= */

function applyLanguage(language) {

    const t =
        translations[language];


    if (!t) {
        return;
    }


    /* ---------------------------------------------
       LANGUAGE PAGE
    --------------------------------------------- */

    setText(
        ".language-selection h2",
        t.chooseLanguage
    );

    setText(
        ".language-selection > p",
        t.selectLanguage
    );

    setText(
        ".brand-section p",
        t.tagline
    );

    setText(
        ".language-container footer p",
        t.empowering
    );


    /* ---------------------------------------------
       AUTH PAGE
    --------------------------------------------- */

    setText(
        "#signInForm h2",
        t.welcomeBack
    );

    setText(
        "#signInForm .form-subtitle",
        t.signInContinue
    );

    setLabel(
        "loginEmail",
        t.email
    );

    setPlaceholder(
        "loginEmail",
        t.enterEmail
    );

    setLabel(
        "loginPassword",
        t.password
    );

    setPlaceholder(
        "loginPassword",
        t.enterPassword
    );

    setText(
        "#signInForm .forgot-password button",
        t.forgot
    );

    setButtonText(
        "#signInForm .primary-btn",
        t.signIn
    );

    setText(
        "#signInForm .auth-switch",
        t.noAccount
    );

    const signUpSwitch =
        document.querySelector(
            "#signInForm .auth-switch button"
        );

    if (signUpSwitch) {
        signUpSwitch.textContent =
            t.signUp;
    }

    setText(
        "#signInForm .divider span",
        t.or
    );

    setButtonText(
        "#signInForm .demo-btn",
        t.demo
    );


    /* ---------------------------------------------
       SIGN UP
    --------------------------------------------- */

    setText(
        "#signUpForm h2",
        t.createAccount
    );

    setText(
        "#signUpForm .form-subtitle",
        t.joinSmartAgri
    );

    setLabel(
        "signupName",
        t.fullName
    );

    setPlaceholder(
        "signupName",
        t.enterFullName
    );

    setLabel(
        "signupMobile",
        t.mobile
    );

    setPlaceholder(
        "signupMobile",
        t.mobilePlaceholder
    );

    setLabel(
        "signupEmail",
        t.email
    );

    setPlaceholder(
        "signupEmail",
        t.enterEmail
    );

    setLabel(
        "signupState",
        t.state
    );

    setOption(
        "signupState",
        0,
        t.selectState
    );

    setLabel(
        "signupCity",
        t.city
    );

    setOption(
        "signupCity",
        0,
        t.selectCity
    );

    setLabel(
        "signupMandi",
        t.mandi
    );

    setOption(
        "signupMandi",
        0,
        t.selectMandi
    );

    setLabel(
        "signupAcres",
        t.landArea
    );

    setPlaceholder(
        "signupAcres",
        t.landPlaceholder
    );


    const roleLabel =
        document.querySelector(
            "#signUpForm .form-group > label"
        );

    /*
       The first matching label here is Full Name,
       so role text is handled separately below.
    */

    const roleContainer =
        document.querySelector(
            "#signUpForm .role-options"
        );

    if (roleContainer) {

        const parentLabel =
            roleContainer.parentElement
                .querySelector(":scope > label");

        if (parentLabel) {
            parentLabel.textContent =
                t.role;
        }

    }


    const roles =
        document.querySelectorAll(
            "#signUpForm .role-option span"
        );


    if (roles[0]) {
        roles[0].textContent =
            t.farmer;
    }

    if (roles[1]) {
        roles[1].textContent =
            t.officer;
    }

    if (roles[2]) {
        roles[2].textContent =
            t.normalPerson;
    }


    setLabel(
        "signupCrop",
        t.cropQuestion
    );

    setOption(
        "signupCrop",
        0,
        t.primaryCrop
    );


    setLabel(
        "signupPassword",
        t.password
    );

    setPlaceholder(
        "signupPassword",
        t.password
    );

    setLabel(
        "confirmPassword",
        t.confirmPassword
    );

    setPlaceholder(
        "confirmPassword",
        t.confirmPasswordPlaceholder
    );

    setButtonText(
        "#signUpForm .primary-btn",
        t.createAccount
    );


    const signupSwitch =
        document.querySelector(
            "#signUpForm .auth-switch"
        );

    if (signupSwitch) {

        signupSwitch.childNodes[0].textContent =
            t.alreadyAccount + " ";

        const button =
            signupSwitch.querySelector("button");

        if (button) {
            button.textContent =
                t.signIn;
        }

    }


    /* ---------------------------------------------
       FORGOT PASSWORD
    --------------------------------------------- */

    setText(
        "#forgotPasswordForm h2",
        t.resetPassword
    );

    setText(
        "#forgotPasswordForm .form-subtitle",
        t.resetDescription
    );

    setLabel(
        "resetEmail",
        t.email
    );

    setPlaceholder(
        "resetEmail",
        t.enterEmail
    );

    setButtonText(
        "#forgotPasswordForm .primary-btn",
        t.sendReset
    );


    /* ---------------------------------------------
       DASHBOARD
    --------------------------------------------- */

    setText(
        ".dashboard-title h1",
        "SmartAgri"
    );

    setText(
        ".dashboard-title p",
        t.tagline
    );

    setText(
        ".welcome-section h2",
        t.welcomeDashboard
    );

    setText(
        ".welcome-section p",
        t.agriculturalIntelligence
    );


    setText(
        ".location-section h2",
        t.locationTitle
    );

    setText(
        ".location-section .section-heading p",
        t.locationDescription
    );

    setText(
        ".location-btn",
        t.getInformation
    );


    /* Market */

    setText(
        "#marketPrices .section-heading h2",
        t.liveMandi
    );

    setText(
        "#marketPrices .section-heading p",
        t.currentPrices
    );


    const summaryLabels =
        document.querySelectorAll(
            "#marketPrices .price-summary-card span"
        );

    if (summaryLabels[0]) {
        summaryLabels[0].textContent =
            t.highest;
    }

    if (summaryLabels[1]) {
        summaryLabels[1].textContent =
            t.lowest;
    }

    if (summaryLabels[2]) {
        summaryLabels[2].textContent =
            t.average;
    }


    const marketHeaders =
        document.querySelectorAll(
            "#marketPrices thead th"
        );

    if (marketHeaders[0])
        marketHeaders[0].textContent = t.crop;

    if (marketHeaders[1])
        marketHeaders[1].textContent = t.market;

    if (marketHeaders[2])
        marketHeaders[2].textContent = t.minPrice;

    if (marketHeaders[3])
        marketHeaders[3].textContent = t.maxPrice;

    if (marketHeaders[4])
        marketHeaders[4].textContent = t.modalPrice;


    /* Weather */

    setText(
        "#weather .section-heading h2",
        t.liveWeather
    );

    setText(
        "#weather .section-heading p",
        t.weatherDescription
    );


    const weatherLabels =
        document.querySelectorAll(
            ".weather-details p"
        );

    if (weatherLabels[0])
        weatherLabels[0].textContent =
            t.humidity;

    if (weatherLabels[1])
        weatherLabels[1].textContent =
            t.wind;

    if (weatherLabels[2])
        weatherLabels[2].textContent =
            t.rain;


    /* Sidebar */

    const menuItems =
        document.querySelectorAll(
            ".menu-item"
        );


    const menuTexts = [

        t.dashboard,
        t.marketPrices,
        t.weather,
        t.schemes,
        t.cropScanner,
        t.aiAssistant,
        t.aiVoice,
        t.labour,
        t.machinery,
        t.settings,
        t.about

    ];


    menuItems.forEach(
        function (item, index) {

            const text =
                item.querySelector(
                    "span:last-child"
                );

            if (
                text &&
                menuTexts[index]
            ) {

                text.textContent =
                    menuTexts[index];

            }

        }
    );


    setButtonText(
        ".logout-btn",
        t.logout
    );


    updateConnectionStatus();


    const dashboardLanguage =
        document.getElementById(
            "dashboardLanguage"
        );

    if (dashboardLanguage) {

        dashboardLanguage.value =
            language;

    }

}


/* =========================================================
   LOCATION
========================================================= */

function setupLocation() {

    const stateSelect =
        document.getElementById(
            "signupState"
        );

    const citySelect =
        document.getElementById(
            "signupCity"
        );


    if (stateSelect && citySelect) {

        stateSelect.addEventListener(
            "change",
            function () {

                populateSignupCities(
                    this.value
                );

            }
        );

    }

}


/* =========================================================
   SIGNUP CITY LIST
========================================================= */

const citiesByState = {

    Maharashtra: [

        "Kopargaon",
        "Ahmednagar",
        "Nashik",
        "Pune",
        "Nagpur",
        "Mumbai",
        "Chhatrapati Sambhajinagar",
        "Kolhapur",
        "Solapur",
        "Satara",
        "Sangli",
        "Jalgaon",
        "Dhule"

    ]

};


function populateSignupCities(state) {

    const citySelect =
        document.getElementById(
            "signupCity"
        );


    if (!citySelect) {
        return;
    }


    citySelect.innerHTML = "";


    const firstOption =
        document.createElement("option");

    firstOption.value = "";

    firstOption.textContent =
        translations[currentLanguage]
            .selectCity;

    citySelect.appendChild(
        firstOption
    );


    const cities =
        citiesByState[state] || [];


    cities.forEach(
        function (city) {

            const option =
                document.createElement("option");

            option.value =
                city;

            option.textContent =
                city;

            citySelect.appendChild(
                option
            );

        }
    );


    const mandiSelect =
        document.getElementById(
            "signupMandi"
        );


    if (mandiSelect) {

        mandiSelect.value = "";

    }

}


/* =========================================================
   DASHBOARD LOCATION
========================================================= */

function updateLocation() {

    const state =
        document.getElementById(
            "stateSelect"
        ).value;

    const city =
        document.getElementById(
            "citySelect"
        ).value;


    if (!city) {

        showMessage(
            "Please select a city."
        );

        return;

    }


    updateWeather(city);

    updateMarketPrices(
        state,
        city
    );

}


/* =========================================================
   MARKET DATA
========================================================= */

const marketData = {

    Kopargaon: [
        {
            crop: "Onion",
            market: "Kopargaon",
            min: 1800,
            max: 2400,
            modal: 2100
        },
        {
            crop: "Wheat",
            market: "Kopargaon",
            min: 2200,
            max: 2600,
            modal: 2400
        }
    ],

    Ahmednagar: [
        {
            crop: "Onion",
            market: "Ahmednagar",
            min: 1900,
            max: 2500,
            modal: 2200
        },
        {
            crop: "Wheat",
            market: "Ahmednagar",
            min: 2250,
            max: 2650,
            modal: 2450
        }
    ],

    Nashik: [
        {
            crop: "Onion",
            market: "Nashik",
            min: 2000,
            max: 2800,
            modal: 2400
        },
        {
            crop: "Wheat",
            market: "Nashik",
            min: 2300,
            max: 2700,
            modal: 2500
        }
    ],

    Pune: [
        {
            crop: "Onion",
            market: "Pune",
            min: 2100,
            max: 2900,
            modal: 2500
        },
        {
            crop: "Wheat",
            market: "Pune",
            min: 2350,
            max: 2750,
            modal: 2550
        }
    ],

    Nagpur: [
        {
            crop: "Onion",
            market: "Nagpur",
            min: 1900,
            max: 2700,
            modal: 2300
        },
        {
            crop: "Wheat",
            market: "Nagpur",
            min: 2200,
            max: 2600,
            modal: 2400
        }
    ]

};


/* =========================================================
   UPDATE MARKET PRICES
========================================================= */

function updateMarketPrices(state, city) {

    const table =
        document.getElementById(
            "marketPriceTable"
        );


    if (!table) {
        return;
    }


    let data =
        marketData[city];


    if (!data) {

        data = [

            {
                crop: "Onion",
                market: city,
                min: 1800,
                max: 2500,
                modal: 2150
            },

            {
                crop: "Wheat",
                market: city,
                min: 2200,
                max: 2700,
                modal: 2450
            }

        ];

    }


    table.innerHTML = "";


    let allPrices = [];


    data.forEach(
        function (item) {

            allPrices.push(
                item.min,
                item.max,
                item.modal
            );


            const row =
                document.createElement(
                    "tr"
                );


            row.innerHTML = `

                <td>${item.crop}</td>

                <td>${item.market}</td>

                <td>₹${item.min.toLocaleString("en-IN")}</td>

                <td>₹${item.max.toLocaleString("en-IN")}</td>

                <td>₹${item.modal.toLocaleString("en-IN")}</td>

            `;


            table.appendChild(row);

        }
    );


    const highest =
        Math.max(...allPrices);

    const lowest =
        Math.min(...allPrices);

    const average =
        Math.round(
            allPrices.reduce(
                (sum, value) =>
                    sum + value,
                0
            ) / allPrices.length
        );


    document.getElementById(
        "highestPrice"
    ).textContent =
        "₹" +
        highest.toLocaleString("en-IN");


    document.getElementById(
        "lowestPrice"
    ).textContent =
        "₹" +
        lowest.toLocaleString("en-IN");


    document.getElementById(
        "averagePrice"
    ).textContent =
        "₹" +
        average.toLocaleString("en-IN");

}


/* =========================================================
   WEATHER
========================================================= */

function updateWeather(city) {

    const weatherLocation =
        document.getElementById(
            "weatherLocation"
        );

    const temperature =
        document.getElementById(
            "temperature"
        );

    const condition =
        document.getElementById(
            "weatherCondition"
        );

    const humidity =
        document.getElementById(
            "humidity"
        );

    const wind =
        document.getElementById(
            "windSpeed"
        );

    const rain =
        document.getElementById(
            "rainChance"
        );


    if (!city) {
        city = "Kopargaon";
    }


    if (weatherLocation)
        weatherLocation.textContent =
            city;


    /*
       Demo weather values.
       We will replace these with a real
       weather API later.
    */

    if (temperature)
        temperature.textContent =
            "28°C";

    if (condition)
        condition.textContent =
            "Partly Cloudy";

    if (humidity)
        humidity.textContent =
            "68%";

    if (wind)
        wind.textContent =
            "14 km/h";

    if (rain)
        rain.textContent =
            "25%";

}


/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function setText(selector, text) {

    const element =
        document.querySelector(
            selector
        );

    if (element) {
        element.textContent =
            text;
    }

}


function setButtonText(selector, text) {

    const element =
        document.querySelector(
            selector
        );

    if (element) {
        element.textContent =
            text;
    }

}


function setLabel(inputId, text) {

    const label =
        document.querySelector(
            `label[for="${inputId}"]`
        );

    if (label) {
        label.textContent =
            text;
    }

}


function setPlaceholder(inputId, text) {

    const input =
        document.getElementById(
            inputId
        );

    if (input) {
        input.placeholder =
            text;
    }

}


function setOption(
    selectId,
    index,
    text
) {

    const select =
        document.getElementById(
            selectId
        );

    if (
        select &&
        select.options[index]
    ) {

        select.options[index]
            .textContent = text;

    }

}


function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}


/* =========================================================
   MESSAGE
========================================================= */

function showMessage(message) {

    console.log(
        "SmartAgri:",
        message
    );


    /*
       For now use a simple browser alert.
       Later we can replace this with a
       beautiful SmartAgri notification.
    */

    alert(message);

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeSidebar();

        }

    }
);


/* =========================================================
   FINAL
========================================================= */

console.log(
    "SmartAgri is ready."
);