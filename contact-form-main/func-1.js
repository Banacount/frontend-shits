
const generalEnq = document.getElementById("generalEnquiryCon");
const supportRequest = document.getElementById("supportRequestCon");
const consentBox = document.getElementById("consentBoxContain")

const generalEnqRadio = document.getElementById("generalEnquiry");
const supportRequestRadio = document.getElementById("supportRequest");
const consentBoxRadio = document.getElementById("consentCheckbox");

let general_enquiry_switch = false;
let support_request_switch = false;
let consent_box_switch = false;

// Radio elements
generalEnqRadio.checked = general_enquiry_switch;
generalEnq.addEventListener('click', () => {
    general_enquiry_switch = !general_enquiry_switch;
    generalEnqRadio.checked = general_enquiry_switch;
});

supportRequestRadio.checked = support_request_switch;
supportRequest.addEventListener('click', () => {
    support_request_switch = !support_request_switch;
    supportRequestRadio.checked = support_request_switch;
});

consentBoxRadio.checked = general_enquiry_switch;
consentBox.addEventListener('click', () => {
    consent_box_switch = !consent_box_switch;
    consentBoxRadio.checked = consent_box_switch;
});
