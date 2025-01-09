
function validateForm() {
    const name = document.getElementById('CustomerName');
    const phone = document.getElementById('phone_number');
    // const address = document.getElementById('Address');
    const issueType = document.querySelector('.form')?.value;
    const description = document.getElementById('Description');
    const images = document.getElementById('image');
    const street = document.getElementById('street');
    const cityField = document.getElementById('city');
    const state = document.getElementById('state');
    const zip = document.getElementById('zip');
    let isValid = true;

    // Reset error messages and styles
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

    // Validate fields with professional feedback
    if (!name.value.trim()) {
        showError(name, "Customer name is required");
        isValid = false;
    }

    if (!phone.value.trim()) {
        showError(phone, "Please enter a valid phone number");
        isValid = false;
    }

    if (!issueType) {
        showError(document.querySelector('.form'), "Please select an issue type");
        isValid = false;
    }
    if (!description.value.trim()) {
        showError(description, "Description is required");
        isValid = false;
    }

    if (images.files.length > 3) {
        showError(images, "You can upload up to 3 images only");
        isValid = false;
    }

    if (!street.value.trim()) {
        showError(street, "Street is required");
        isValid = false;
    }

    if (!cityField.value.trim()) {
        showError(cityField, "City is required");
        isValid = false;
    }

    if (!state.value.trim()) {
        showError(state, "State is required");
        isValid = false;
    }

    if (!zip.value.trim() || !/^\d{5,8}$/.test(zip.value)) {
        showError(zip, "Please enter a valid ZIP code (5 to 8 digits)");
        isValid = false;
    }


    return isValid;
}

function showError(element, message) {
    const error = document.createElement('small');
    error.classList.add('error-message');
    error.innerText = message;

    // Apply professional styles
    error.style.color = 'red';
    error.style.fontSize = '12px';
    error.style.marginTop = '5px';
    error.style.display = 'block';

    element.classList.add('error');
    element.style.borderColor = 'red';
    element.style.outline = 'none';

    // Append error message near the field
    element.parentNode.appendChild(error);

    // Scroll to the first invalid field
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Add real-time validation for better UX
document.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('input', () => {
        field.style.borderColor = '';
        const errorMessage = field.parentNode.querySelector('.error-message');
        if (errorMessage) errorMessage.remove();
    });
});

// validation contact form------------------
document.getElementById('submit_button').addEventListener('click', function (event) {
    event.preventDefault();
    // Collect form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;

    // Reset any previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    // Validate name
    if (!name) {
        showError(document.getElementById('name'), "Name is required");
        isValid = false;
    }

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        showError(document.getElementById('email'), "Please enter a valid email address");
        isValid = false;
    }

    // Validate message
    if (!message) {
        showError(document.getElementById('message'), "Message is required");
        isValid = false;
    }

    // If validation passes, send the email
    if (isValid) {
        // Create the parameters for EmailJS
        let templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        // Send the email using EmailJS
        emailjs.send('service_01osuqj', 'template_82xor65', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                // alert("Email sent successfully!");
            }, function (error) {
                console.error('FAILED...', error);
                // alert("Failed to send email.");
            });
    }
});

function showError(element, message) {
    const error = document.createElement('small');
    error.classList.add('error-message');
    error.style.color = 'red';
    error.style.display = 'block';
    error.innerText = message;
    element.parentNode.appendChild(error);
}

// -------------------------------------------------------
let ticket_type = [];
let images = [];
let available_slots

const checkboxes = document.querySelectorAll('.checkbox');
const selectedValues = document.getElementById('selectedValues');

// Add event listeners to checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Get the values of checked checkboxes
        const values = Array.from(checkboxes)
            .filter(chk => chk.checked) // Filter to get checked boxes
            .map(chk => chk.value);    // Extract the value of each checked box

        // Update the selected values text
        selectedValues.textContent = values.length ? values.join(', ') : 'Select Options';

        // Log the text content, not value, of selectedValues

        ticket_type.push(selectedValues.textContent)


    });
});
const checkboxes1 = document.querySelectorAll('.checkbox1');
const selectedValues1 = document.getElementById('selectedValues1');

// Add event listeners to checkboxes
checkboxes1.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const values = Array.from(checkboxes1)
            .filter(chk => chk.checked)
            .map(chk => chk.value);

        selectedValues1.textContent = values.length ? values.join(', ') : 'Select Options';
        console.log(selectedValues1.textContent);
        available_slots = selectedValues1.textContent;
    });
});




document.getElementById('image').addEventListener('change', function (event) {
    const files = event.target.files;
    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            if (files[i]) {
                images.push(files[i]);
            }
        }
    }

    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];

        }
    }
});

function mergeValues(values) {
    let result = new Set();

    values.forEach(item => {
        let parts = item.split(',').map(part => part.trim());
        parts.forEach(part => result.add(part));
    });
    return Array.from(result).join(', ');
}


async function imageLinkGet(files) {
    let imageList = [null, null, null];
    let i = 0;
    for (const file of files) {
        if (!file) { // Check if file is a valid Blob/File
            console.error("Invalid file object:", file);
            alert("Invalid file selected.");
            continue;
        }

        const base64Data = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result.split(",")[1]); // Extract Base64
            reader.onerror = (error) => reject(error); // Handle errors
            reader.readAsDataURL(file); // Start reading the file as a data URL
        });

        try {
            // Send Base64 data to the server
            const response = await fetch("https://m4j8v747jb.execute-api.us-west-2.amazonaws.com/dev/company_logo_upload", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    file_name: file.name,
                    file_data: base64Data,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                imageList[i++] = data.file_url;

                console.log("ghyygdhhgdfhjghsfdhsfdhgfds")
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred during the upload. Please try again.");
        }
        console.log(imageList)
    }

    console.log(imageList);
    return imageList;
}



// async function postData() {
//     if (!validateForm()) {
//         return;
//     }

//     const loadingIndicator = document.getElementById('l');
//     loadingIndicator.style.display = 'flex'



//     let resultString = document.querySelector('.form').value;
//     let imageInput = await imageLinkGet(images);

   
//     const today = new Date();
//     const complain_raised_date1 = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

//     const data = {
//         company_id: "ShddWeFGFGkk9b67STTJY4",
//         ticket_type: resultString,
//         name: document.getElementById("CustomerName")?.value || "",
//         phone_number: document.getElementById("phone_number")?.value || "",
//         ti_photo_1: imageInput[0],
//         ti_photo_2: imageInput[1],
//         ti_photo_3: imageInput[2],
//         status: 1,
//         complain_raised_date: complain_raised_date1,
//         description: document.getElementById("Description")?.value || "",
//         available_slots: available_slots,
//         street: document.getElementById("street")?.value || "",
//         city: document.getElementById("city")?.value || "",
//         state: document.getElementById("state")?.value || "",
//         zip: document.getElementById("zip")?.value || ""
//     };


//     try {
//         const response = await fetch(apiUrl, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(data)
//         });



//         if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

//         const responseData = await response.json();


//         loadingIndicator.style.display = 'none'
//         // Show success modal
//         const popupModal = document.getElementById('popupModal');
//         popupModal.style.display = 'block';
//         const closePopup = document.getElementById('closePopup');

//         closePopup.addEventListener('click', function () {
//             window.location.href = 'index.html';
//         });

//     } catch (error) {
//         console.error('Error:', error);
//         alert("An error occurred during submission post error. Please try again.");
//     }
// }
async function postData() {
    const apiUrl = `https://m4j8v747jb.execute-api.us-west-2.amazonaws.com/dev/ticket/create`;
    // Validate the form before proceeding
    if (!validateForm()) {
        return;
    }

    // Show loading indicator
    const loadingIndicator = document.getElementById('l');
    loadingIndicator.style.display = 'flex';

    try {
        // Get the form data
        const resultString = document.querySelector('.form').value;
        const imageInput = await imageLinkGet(images); // Ensure images is defined elsewhere in your code
        const today = new Date();
        const complainRaisedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

        // Create the data object to send
        const data = {
            company_id: "ShddWeFGFGkk9b67STTJY4",
            ticket_type: resultString,
            name: document.getElementById("CustomerName")?.value || "",
            phone_number: document.getElementById("phone_number")?.value || "",
            ti_photo_1: imageInput[0],
            ti_photo_2: imageInput[1],
            ti_photo_3: imageInput[2],
            status: 1,
            complain_raised_date: complainRaisedDate,
            description: document.getElementById("Description")?.value || "",
            available_slots: available_slots, // Ensure available_slots is defined elsewhere in your code
            street: document.getElementById("street")?.value || "",
            city: document.getElementById("city")?.value || "",
            state: document.getElementById("state")?.value || "",
            zip: document.getElementById("zip")?.value || ""
        };

        // Send the data using fetch API
        const response = await fetch(apiUrl, { // Ensure apiUrl is defined elsewhere in your code
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        // Check if the response is successful
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        // Parse the response
        const responseData = await response.json();

        // Hide loading indicator and show success modal
        loadingIndicator.style.display = 'none';
        const popupModal = document.getElementById('popupModal');
        popupModal.style.display = 'block';

        // Handle modal close button
        const closePopup = document.getElementById('closePopup');
        closePopup.addEventListener('click', function () {
            window.location.href = 'index.html';
        });

    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        alert("An error occurred during submission. Please try again.");
        loadingIndicator.style.display = 'none'; // Hide loading indicator on error
    }
}
// Add submit button event listener


// image file upload//

const fileInput = document.getElementById('image');
const preview = document.getElementById('preview');
const fileError = document.getElementById('fileError');
const fileMessage = document.getElementById('fileMessage');
let selectedFiles = [];


function updateMessage() {

    if (selectedFiles.length === 0) {
        fileMessage.style.display = 'block';
        fileError.style.display = 'none';
    } else if (selectedFiles.length > 3) {
        fileError.style.display = 'block';
        fileMessage.style.display = 'none';
    } else {
        fileMessage.style.display = 'none';
        fileError.style.display = 'none';
    }
}

fileInput.addEventListener('change', (event) => {
    const files = Array.from(event.target.files);
    if (selectedFiles.length + files.length > 3) {
        fileInput.value = "";
        updateMessage();
        return;
    }
    files.forEach((file, index) => {
        selectedFiles.push(file);


        const container = document.createElement('div');
        container.style.position = 'relative';
        container.style.width = '60px';
        container.style.height = '60px';


        const img = document.createElement('img');
        const reader = new FileReader();
        reader.onload = function (e) {
            img.src = e.target.result;
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.objectFit = "cover";
            img.alt = `Selected Image ${index + 1}`;
        };
        reader.readAsDataURL(file);

        // Create delete button
        const deleteBtn = document.createElement('span');
        deleteBtn.innerHTML = '&times;';
        deleteBtn.style.position = 'absolute';
        deleteBtn.style.top = '1px';
        deleteBtn.style.right = '1px';
        deleteBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        deleteBtn.style.color = 'blue';
        deleteBtn.style.borderRadius = '50%';
        deleteBtn.style.width = '20px';
        deleteBtn.style.height = '20px';
        deleteBtn.style.display = 'flex';
        deleteBtn.style.justifyContent = 'center';
        deleteBtn.style.alignItems = 'center';
        deleteBtn.style.cursor = 'pointer';

        // Delete functionality
        deleteBtn.addEventListener('click', () => {
            container.remove();
            selectedFiles = selectedFiles.filter((f) => f !== file);
            console.log("Remaining Files:", selectedFiles);

            // Re-enable the file input if less than 3 files remain
            if (selectedFiles.length < 3) {
                fileInput.disabled = false;
            }

            updateMessage(); // Update message visibility
        });

        // Append elements
        container.appendChild(img);
        container.appendChild(deleteBtn);
        preview.appendChild(container);
    });

    // Disable file input if 3 files are selected
    if (selectedFiles.length === 3) {
        fileInput.disabled = true;
    }

    updateMessage(); // Update message visibility
    console.log("Selected Files:", selectedFiles);
});

document.addEventListener('click', function (event) {
    const navbar = document.querySelector('.navbar-collapse');
    const toggleButton = document.querySelector('.navbar-toggler');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    // Check if the click is outside the navbar and toggle button
    if (!navbar.contains(event.target) && !toggleButton.contains(event.target)) {
        // Collapse the navbar if it is expanded
        if (navbar.classList.contains('show')) {
            toggleButton.click();
        }
    }

    // Prevent dropdown from closing when clicked
    dropdownMenus.forEach(menu => {
        if (menu.contains(event.target)) {
            event.stopPropagation();
        }
    });
});
