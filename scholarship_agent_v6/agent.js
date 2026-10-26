// Localization Translation Arrays
const translations = {
    en: {
        title: "Scholarship Eligibility Portal",
        secPersonal: "Personal Profile",
        secAcademic: "Academic Enrollment",
        secFinancial: "Financial Profile",
        secResults: "Applicable Scholarship Schemes",
        lblState: "Domicile State",
        lblCategory: "Category",
        lblDisability: "Disability Status (UDID)",
        lblCourse: "Course Type",
        lblYear: "Academic Year",
        lblCollege: "College/Institution Type",
        lblMarks: "Previous Academic Marks (%)",
        lblIncome: "Annual Family Income (₹)",
        btnSubmit: "Check Eligible Schemes",
        noResults: "Fill out your academic and financial profile above to query matched national and state schemes.",
        noMatch: "No explicitly matching targeted state schemes found for your metric boundaries. Central universal frameworks apply.",
        applyNow: "Official Portal Link"
    },
    ta: {
        title: "கல்வி உதவித்தொகை தகுதி போர்டல்",
        secPersonal: "தனிப்பட்ட விவரங்கள்",
        secAcademic: "கல்வி சேர்க்கை விவரங்கள்",
        secFinancial: "பொருளாதார நிலை",
        secResults: "பொருந்தக்கூடிய கல்வி உதவித்தொகை திட்டங்கள்",
        lblState: "இருப்பிட மாநிலம்",
        lblCategory: "பிரிவு (Category)",
        lblDisability: "மாற்றுத்திறனாளி நிலை (UDID)",
        lblCourse: "படிப்பு வகை",
        lblYear: "கல்வி ஆண்டு",
        lblCollege: "கல்லூரி / நிறுவன வகை",
        lblMarks: "முந்தைய கல்வி மதிப்பெண் (%)",
        lblIncome: "ஆண்டு குடும்ப வருமானம் (₹)",
        btnSubmit: "தகுதியான திட்டங்களைச் சரிபார்க்கவும்",
        noResults: "தேசிய மற்றும் மாநில உதவித்தொகை திட்டங்களை அறிய உங்கள் விவரங்களை மேலே உள்ளிடவும்.",
        noMatch: "உங்கள் தற்போதைய விவரங்களுக்கு பொருந்தக்கூடிய குறிப்பிட்ட மாநில திட்டங்கள் எதுவும் கண்டறியப்படவில்லை.",
        applyNow: "அதிகாரப்பூர்வ இணையதள இணைப்பு"
    },
    ml: {
        title: "സ്കോളർഷിപ്പ് യോഗ്യതാ പോർട്ടൽ",
        secPersonal: "വ്യക്തിഗത വിവരങ്ങൾ",
        secAcademic: "വിദ്യാഭ്യാസ വിവരങ്ങൾ",
        secFinancial: "സാമ്പത്തിക വിവരങ്ങൾ",
        secResults: "നിങ്ങൾക്ക് അർഹതയുള്ള സ്കോളർഷിപ്പ് പദ്ധതികൾ",
        lblState: "സ്വദേശി സംസ്ഥാനം",
        lblCategory: "വിഭാഗം (Category)",
        lblDisability: "ഭിന്നശേഷി പദവി (UDID)",
        lblCourse: "കോഴ്സ് തരം",
        lblYear: "അധ്യയന വർഷം",
        lblCollege: "കോളേജ്/സ്ഥാപന തരം",
        lblMarks: "മുൻവർഷത്തെ മാർക്ക് (%)",
        lblIncome: "വാർഷിക കുടുംബ വരുമാനം (₹)",
        btnSubmit: "യോഗ്യമായ പദ്ധതികൾ പരിശോധിക്കുക",
        noResults: "ദേശീയ, സംസ്ഥാന സ്കോളർഷിപ്പ് പദ്ധതികൾ കണ്ടെത്തുന്നതിനായി നിങ്ങളുടെ വിവരങ്ങൾ മുകളിൽ പൂരിപ്പിക്കുക.",
        noMatch: "നിങ്ങൾ നൽകിയ വിവരങ്ങളുമായി പൊരുത്തപ്പെടുന്ന സംസ്ഥാന സ്കോളർഷിപ്പുകൾ ഒന്നും നിലവിലില്ല.",
        applyNow: "ഔദ്യോഗിക പോർട്ടൽ ലിങ്ക്"
    }
};

// Master Repository for Pan-India State and Central Scholarships
const scholarshipDatabase = [
    // Central Universal Layouts
    {
        name: "PM-USP Central Sector Scheme (CSSS)",
        state: "All",
        category: "All",
        minMarks: 80,
        maxIncome: 450000,
        disability: "All",
        benefit: "₹12,000/yr for Graduation; ₹20,000/yr for Post-Graduation",
        portal: "https://scholarships.gov.in/"
    },
    {
        name: "National Fellowship for Persons with Disabilities",
        state: "All",
        category: "All",
        minMarks: 0,
        maxIncome: Infinity,
        disability: "Yes",
        benefit: "Full fee coverage + Monthly stipend allowance benefits",
        portal: "https://scholarships.gov.in/"
    },
    // Tamil Nadu State Specific Schemes
    {
        name: "TN SC/ST/SCC Post Matric Scholarship",
        state: "Tamil Nadu",
        category: ["SC", "ST"],
        minMarks: 0,
        maxIncome: 250000,
        disability: "All",
        benefit: "100% compulsory fee reimbursement + monthly maintenance allowance",
        portal: "https://ssp.tn.gov.in/"
    },
    {
        name: "TN BC/MBC/DNC Post-Matric Scholarship",
        state: "Tamil Nadu",
        category: ["OBC", "MBC/DNC"],
        minMarks: 0,
        maxIncome: 200000,
        disability: "All",
        benefit: "Full tuition and exam fee coverage + boarding charges mapping",
        portal: "https://www.tn.gov.in/"
    },
    // Kerala State Specific Schemes
    {
        name: "Kerala e-Grantz 3.0 Post-Matric Stipend",
        state: "Kerala",
        category: ["SC", "ST", "OBC"],
        minMarks: 0,
        maxIncome: 250000,
        disability: "All",
        benefit: "Compulsory tuition fee coverage + monthly boarding allowances",
        portal: "https://egrantz.kerala.gov.in/"
    },
    // Maharashtra State Specific Schemes
    {
        name: "MahaDBT Rajarshi Chhatrapati Shahu Maharaj Fee Reimbursement",
        state: "Maharashtra",
        category: ["General", "OBC"],
        minMarks: 50,
        maxIncome: 800000,
        disability: "All",
        benefit: "50% to 100% tuition and exam fee coverage matrix reimbursement",
        portal: "https://mahadbt.maharashtra.gov.in/"
    },
    // Uttar Pradesh State Specific Schemes
    {
        name: "UP Post-Matric Scholarship Dashboard Distribution",
        state: "Uttar Pradesh",
        category: "All",
        minMarks: 55,
        maxIncome: 200000,
        disability: "All",
        benefit: "Variable academic fee reimbursement allowances based on institution tier",
        portal: "https://scholarship.up.gov.in/"
    },
    // Karnataka State Specific Schemes
    {
        name: "Karnataka State SSP Post-Matric Scheme",
        state: "Karnataka",
        category: ["SC", "ST", "OBC"],
        minMarks: 0,
        maxIncome: 250000,
        disability: "All",
        benefit: "Comprehensive fee structure waivers and standard maintenance funds",
        portal: "https://ssp.postmatric.karnataka.gov.in/"
    }
];

// Handle structural dropdown adaptations depending on state selection
function handleStateChange() {
    const state = document.getElementById("state").value;
    const mbcOption = document.querySelector(".tn-specific");
    
    if (state === "Tamil Nadu") {
        mbcOption.style.display = "block";
    } else {
        mbcOption.style.display = "none";
        if (document.getElementById("category").value === "MBC/DNC") {
            document.getElementById("category").value = "OBC";
        }
    }
}

// Compute dynamic rule eligibility execution loops
function evaluateScholarships() {
    const state = document.getElementById("state").value;
    const category = document.getElementById("category").value;
    const disability = document.getElementById("disability").value;
    const marks = parseFloat(document.getElementById("marks").value) || 0;
    const income = parseFloat(document.getElementById("income").value) || 0;
    const currentLang = document.getElementById("lang-select").value;

    const wrapper = document.getElementById("results-wrapper");
    wrapper.innerHTML = "";

    // Filter validation logic
    const matchedSchemes = scholarshipDatabase.filter(scheme => {
        // State evaluation
        if (scheme.state !== "All" && scheme.state !== state) return false;
        
        // Category mapping bounds
        if (scheme.category !== "All") {
            if (Array.isArray(scheme.category)) {
                if (!scheme.category.includes(category)) return false;
            } else if (scheme.category !== category) {
                return false;
            }
        }

        // Disability flag checks
        if (scheme.disability !== "All" && scheme.disability !== disability) return false;

        // Marks matrix ceilings
        if (marks < scheme.minMarks) return false;

        // Household asset caps
        if (income > scheme.maxIncome) return false;

        return true;
    });

    if (matchedSchemes.length === 0) {
        wrapper.innerHTML = `<p style="color: #494D5F; font-style: italic;">${translations[currentLang].noMatch}</p>`;
        return;
    }

    // Build functional component cards inside the workspace wrapper
    matchedSchemes.forEach(scheme => {
        const card = document.createElement("div");
        card.className = "scholarship-card";
        
        card.innerHTML = `
            <div class="card-header-row">
                <div class="scholarship-title">${scheme.name}</div>
                <div class="badge">${scheme.state === "All" ? "Central" : "State App"}</div>
            </div>
            <div class="scholarship-desc"><strong>Benefits:</strong> ${scheme.benefit}</div>
            <a href="${scheme.portal}" target="_blank" class="portal-link">🔗 ${translations[currentLang].applyNow}</a>
        `;
        wrapper.appendChild(card);
    });
}

// Dynamic Client Side Language Switching Framework Handler
document.getElementById("lang-select").addEventListener("change", function(e) {
    const lang = e.target.value;
    const dict = translations[lang];

    document.getElementById("txt-title").innerText = dict.title;
    document.getElementById("txt-sec-personal").innerText = dict.secPersonal;
    document.getElementById("txt-sec-academic").innerText = dict.secAcademic;
    document.getElementById("txt-sec-financial").innerText = dict.secFinancial;
    document.getElementById("txt-sec-results").innerText = dict.secResults;

    document.getElementById("lbl-state").innerText = dict.lblState;
    document.getElementById("lbl-category").innerText = dict.lblCategory;
    document.getElementById("lbl-disability").innerText = dict.lblDisability;
    document.getElementById("lbl-course").innerText = dict.lblCourse;
    document.getElementById("lbl-year").innerText = dict.lblYear;
    document.getElementById("lbl-college").innerText = dict.lblCollege;
    document.getElementById("lbl-marks").innerText = dict.lblMarks;
    document.getElementById("lbl-income").innerText = dict.lblIncome;
    document.getElementById("btn-submit").innerText = dict.btnSubmit;

    const noResEl = document.getElementById("txt-no-results");
    if (noResEl) {
        noResEl.innerText = dict.noResults;
    }
    
    // Refresh calculations if form is already interacted with
    if (document.getElementById("state").value) {
        evaluateScholarships();
    }
});
