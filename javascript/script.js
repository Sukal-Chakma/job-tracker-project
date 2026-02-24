console.log('connect')
// empty array for value get interview and rejected
let interviewList = [];
let rejectedList = [];
let currentList = [];
let currentStatus = 'all-btn';

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
const allcards = document.getElementById("all-card");
let jobcount = document.getElementById("job-count");
// function for btn toggle
const maincontainer = document.querySelector('main');
function getStatusBadge(status) {
    if (status === 'Interview') return '<div class="badge badge-success description rounded-md py-5 px-6 font-bold">Interview</div>';
    if (status === 'Rejected') return '<div class="badge badge-error description rounded-md py-5 px-6 font-bold">Rejected</div>';
    return '<div class="badge badge-md bg-primary-content rounded-md py-5 description">Not Applied</div>';
}