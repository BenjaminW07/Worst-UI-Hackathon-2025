function goToForms() {
    // 30% chance of redirecting to wrong page
    if (Math.random() < 0.30) {
        alert("ERROR 418: I'm a teapot.");
    } else {
        window.location.href = "form.html";
    }
}

function goToAppointments() {
    alert("Processing your request... This may take 6–8 weeks.");
    window.location.href = "appointments.html";
}

function randomRedirect() {
    let pages = ["success.html", "form.html", "index.html", "appointments.html"];
    let page = pages[Math.floor(Math.random() * pages.length)];

    alert("Redirecting due to calendar malfunction...");
    window.location.href = page;
}

function startOver() {
    window.location.href = "index.html";
}

function validateForm() {
    const inputs = document.querySelectorAll('input[type="text"]');
    const fileInput = document.querySelector('input[type="file"]');
    const checkbox = document.querySelector('input[type="checkbox"]');
    const select = document.querySelector('select');
    
    let errors = [];
    
    // Check all text inputs
    inputs.forEach((input, index) => {
        if (!input.value.trim()) {
            errors.push(`Field ${index + 1} is required`);
            input.style.border = '2px solid red';
        } else {
            input.style.border = '';
        }
        
        // Check maxlength for specific fields
        if (input.maxLength && input.value.length !== input.maxLength) {
            errors.push(`Field must be exactly ${input.maxLength} character(s)`);
            input.style.border = '2px solid red';
        }
    });
    
    // Check checkbox (ironically, they must check "I do NOT want an appointment")
    if (checkbox.checked) {
        errors.push('You must confirm you do NOT want an appointment');
        checkbox.style.outline = '2px solid red';
    } else {
        checkbox.style.outline = '';
    }
    
    // Check major selection
    if (!select.value) {
        errors.push('Major selection is required');
        select.style.border = '2px solid red';
    } else {
        select.style.border = '';
    }
    
    if (errors.length > 0) {
        const errorMessage = "Please fix the following errors:\n\n" + errors.join('\n');
        alert(errorMessage);
        return false;
    }
    
    return true;
}

function goToAppointments() {
    if (validateForm()) {
        alert("Processing your request... This may take 6–8 weeks.");
        window.location.href = "appointments.html";
    }
}