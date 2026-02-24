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
// function for updatejob counter 
function updateJobCount() {
    if (currentStatus === 'all-btn') {
        jobcount.innerHTML = `<p><span>${allcards.children.length}</span> Jobs</p>`;
    } else if (currentStatus === 'interview-btn') {
        jobcount.innerHTML = `<p><span>${interviewList.length}</span> of ${allcards.children.length} Jobs</p>`;
    } else if (currentStatus === 'rejected-btn') {
        jobcount.innerHTML = `<p><span>${rejectedList.length}</span> of ${allcards.children.length} Jobs</p>`;
    }
}

// update counter
function updatecounts() {
    total.innerText = allcards.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
    updateJobCount();
}
// call the function 
updatecounts();

// btn value toggle function 

function toggleStyle(id) {
    selected = document.getElementById(id);
    currentStatus = id;
    updateJobCount();
    if (id == 'interview-btn') {
        allcards.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterviewList();
        if (interviewList.length == 0) {
            filterSection.innerHTML = `
                <div class="card bg-base-100 w-full shadow-sm">
                <figure class="px-10 pt-10">
                    <img src="jobs.png" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title font-bold">No jobs available</h2>
                    <p>Check back soon for new job opportunities</p>
                </div>
            </div>
            `;
        }
    }
    else if (id == 'all-btn') {
        allcards.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if (id == 'rejected-btn') {
        allcards.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejectedList();
        if (rejectedList.length == 0) {
            filterSection.innerHTML = `
                <div class="card bg-base-100 w-full shadow-sm">
                <figure class="px-10 pt-10">
                    <img src="jobs.png" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title font-bold">No jobs available</h2>
                    <p>Check back soon for new job opportunities</p>
                </div>
            </div>
            `;
        }
    }
}