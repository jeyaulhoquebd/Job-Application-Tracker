let jobsData = [
    { id: 1, companyName: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York, NY", type: "Full-time", salary: "$130,000 - $170,000", description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation and health insurance.", status: "all" },
    { id: 2, companyName: "StartupXYZ", position: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120,000 - $160,000", description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required.", status: "all" },
    { id: 3, companyName: "TechCorp Industries", position: "Senior Frontend Developer", location: "San Francisco, CA", type: "Full-time", salary: "$130,000 - $175,000", description: "Looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript.", status: "all" },
    { id: 4, companyName: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130,000 - $175,000", description: "Build cross-platform mobile applications using React Native. Work on products used by millions worldwide.", status: "all" },
    { id: 5, companyName: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $120,000", description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern trends.", status: "all" },
    { id: 6, companyName: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125,000 - $165,000", description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status: "all" },
    { id: 7, companyName: "GreenTech Energy", position: "Junior Frontend Dev", location: "Austin, TX", type: "Hybrid", salary: "$70,000 - $95,000", description: "Help us build the future of renewable energy dashboards. Great mentorship program for juniors.", status: "all" },
    { id: 8, companyName: "Fintech Hub", position: "Software Architect", location: "London, UK", type: "Full-time", salary: "£90,000 - £120,000", description: "Lead the technical architecture for our next-gen banking platform. Strong focus on security and scalability.", status: "all" }
];

let activeTab = 'all';

function render() {
    const list = document.getElementById('jobs-list');
    const empty = document.getElementById('empty-state');
    const rightCount = document.getElementById('right-job-count');
    
    // Update Tab ui
    document.querySelectorAll('button[id^="btn-"]').forEach(btn => btn.classList.remove('tab-active'));
    document.getElementById(`btn-${activeTab}`).classList.add('tab-active');

    // Filter Logic 
    const filtered = jobsData.filter(job => activeTab === 'all' ? true : job.status === activeTab);
    rightCount.innerText = `${filtered.length} jobs`;

    list.innerHTML = '';
    if (filtered.length === 0) {
        empty.classList.remove('hidden');
    } else {
        empty.classList.add('hidden');
        filtered.forEach(job => {
            const card = document.createElement('div');
            card.className = "bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative group transition-all hover:shadow-md";
            card.innerHTML = `
                <button onclick="deleteJob(${job.id})" class="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors">
                    <i class="fa-solid fa-trash-can text-lg"></i>
                </button>
                <h3 class="text-xl font-bold text-[#003366]">${job.companyName}</h3>
                <p class="text-gray-500 font-medium">${job.position}</p>
                <div class="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-gray-400">
                    <span>${job.location}</span> • <span>${job.type}</span> • <span>${job.salary}</span>
                </div>
                <div class="mt-4">
                    <span class="px-3 py-1 bg-blue-50 text-blue-600 rounded text-xs font-bold uppercase tracking-wider">
                        ${job.status === 'all' ? 'Not Applied' : job.status}
                    </span>
                </div>
                <p class="mt-4 text-gray-600 text-sm leading-relaxed">${job.description}</p>
                <div class="mt-6 flex gap-3">
                    <button onclick="setStatus(${job.id}, 'interview')" class="px-6 py-2 rounded-md border-2 border-[#10b981] text-[#10b981] text-xs font-bold uppercase hover:bg-[#10b981] hover:text-white transition-all ${job.status === 'interview' ? 'bg-[#10b981] text-white' : ''}">Interview</button>
                    <button onclick="setStatus(${job.id}, 'rejected')" class="px-6 py-2 rounded-md border-2 border-[#ef4444] text-[#ef4444] text-xs font-bold uppercase hover:bg-[#ef4444] hover:text-white transition-all ${job.status === 'rejected' ? 'bg-[#ef4444] text-white' : ''}">Rejected</button>
                </div>
            `;
            list.appendChild(card);
        });
    }
    updateDashboard();
}

function setStatus(id, status) {
    const job = jobsData.find(j => j.id === id);
    // Toggle: if clicking same status, move back to 'all'
    job.status = (job.status === status) ? 'all' : status;
    render();
}

function deleteJob(id) {
    jobsData = jobsData.filter(j => j.id !== id);
    render();
}

function updateDashboard() {
    document.getElementById('total-count').innerText = jobsData.length;
    document.getElementById('interview-count').innerText = jobsData.filter(j => j.status === 'interview').length;
    document.getElementById('rejected-count').innerText = jobsData.filter(j => j.status === 'rejected').length;
}

function switchTab(tab) {
    activeTab = tab;
    render();
}

// Initial Load
window.onload = render;