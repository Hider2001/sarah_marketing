// Default values
const defaults = {
    clientName: 'نكهات كافية',
    proposalTitle: 'مقترح التسويق الرقمي',
    tagline: 'Smooth & Comfortable Experience',
    agencyName: 'MANJAM',
    agencyAddress: 'Algeria Street - in front of the Libyan Center - Al-Numan Tower - fourth floor, Apartment No. 403',
    agencyPhone: '00967 772 417 884',
    agencyEmail: 'info@manjam.agency',
    agencyWebsite: 'www.manjam.agency',
    year: '2024',
    priceMarketing: 300,
    priceDesign: 180,
    priceReels: 250,
    whyUsText: 'يجب عليك العمل معنا لأننا نركز على الفاعلية في اعمالنا ونعطيها الاولوية في كل أعمالنا. بالإضافة إلى ذلك، يتمتع فريقنا بخبرة واسعة وتقنيات متنوعة للتوصل إلى أفكار إبداعية فريدة، حيث أن كل عضو متخصص في مجاله. كما اننا نركز على خلق تجربة مثالية وسلسة للعميل، سواء في التواصل أو في العمل نفسه، وهذا هو وعد العلامة التجارية الذي نقدمه لعملاءنا.',
    whoWeAreText: 'نحن وكالة إبداعية، نقدم أعلى مستويات الإنتاج الفني والإبداعي. في وكالة منجم، نركز بشكل كبير على صياغة أفكار مميزة والاستفادة منها لحل المشكلات وتعزيز الجهود التسويقية لعملائنا. وفي هذا السياق، نعمل بدقة على بناء هوية علامة تجارية تتوافق مع الأهداف التسويقية الشاملة لكل نشاط نقوم بالعمل معه وذلك لغرض تمكين هذه الانشطة وبناء علامة تجارية صحيحة.'
};

// Update all content based on inputs
function updateContent() {
    // Get values from inputs
    const clientName = document.getElementById('clientNameInput').value;
    const proposalTitle = document.getElementById('proposalTitleInput').value;
    const tagline = document.getElementById('taglineInput').value;
    const agencyName = document.getElementById('agencyNameInput').value;
    const agencyAddress = document.getElementById('agencyAddressInput').value;
    const agencyPhone = document.getElementById('agencyPhoneInput').value;
    const agencyEmail = document.getElementById('agencyEmailInput').value;
    const agencyWebsite = document.getElementById('agencyWebsiteInput').value;
    const year = document.getElementById('yearInput').value;
    const priceMarketing = parseInt(document.getElementById('priceMarketingInput').value) || 0;
    const priceDesign = parseInt(document.getElementById('priceDesignInput').value) || 0;
    const priceReels = parseInt(document.getElementById('priceReelsInput').value) || 0;
    const whyUsText = document.getElementById('whyUsInput').value;
    const whoWeAreText = document.getElementById('whoWeAreInput').value;

    // Update cover page
    document.getElementById('coverClientName').textContent = clientName;
    document.getElementById('coverProposalTitle').textContent = proposalTitle;
    document.getElementById('coverAgencyName').textContent = agencyName;
    document.getElementById('coverAddress').textContent = agencyAddress;
    document.getElementById('coverYear').textContent = year;
    document.getElementById('coverPhone').textContent = agencyPhone;
    document.getElementById('coverWebsite').textContent = agencyWebsite;
    document.getElementById('coverEmail').textContent = agencyEmail;

    // Update tagline
    const taglineParts = tagline.split(/[&+]/);
    if (taglineParts.length >= 2) {
        const coverTagline = document.getElementById('coverTagline');
        const thankYouTagline = document.getElementById('thankYouTagline');
        
        const part1 = taglineParts[0].trim();
        const part2 = taglineParts.slice(1).join(' & ').trim();
        
        const taglineHTML = `
            <span>${part1}</span>
            <span>&</span>
            <span>${part2}</span>
        `;
        
        coverTagline.innerHTML = taglineHTML;
        if (thankYouTagline) thankYouTagline.innerHTML = taglineHTML;
    }

    // Update content sections
    document.getElementById('whyUsText').textContent = whyUsText;
    document.getElementById('whoWeAreText').textContent = whoWeAreText;

    // Update pricing
    document.getElementById('priceMarketing').textContent = '$' + priceMarketing;
    document.getElementById('priceDesign').textContent = '$' + priceDesign;
    document.getElementById('priceReels').textContent = '$' + priceReels;
    document.getElementById('priceTotal').textContent = '$' + (priceMarketing + priceDesign + priceReels);

    // Update footer
    document.getElementById('footerAddress').textContent = agencyAddress;
    document.getElementById('footerPhone').textContent = agencyPhone;
    document.getElementById('footerEmail').textContent = agencyEmail;
    document.getElementById('footerAgencyName').textContent = agencyName;
}

// Reset to defaults
function resetDefaults() {
    document.getElementById('clientNameInput').value = defaults.clientName;
    document.getElementById('proposalTitleInput').value = defaults.proposalTitle;
    document.getElementById('taglineInput').value = defaults.tagline;
    document.getElementById('agencyNameInput').value = defaults.agencyName;
    document.getElementById('agencyAddressInput').value = defaults.agencyAddress;
    document.getElementById('agencyPhoneInput').value = defaults.agencyPhone;
    document.getElementById('agencyEmailInput').value = defaults.agencyEmail;
    document.getElementById('agencyWebsiteInput').value = defaults.agencyWebsite;
    document.getElementById('yearInput').value = defaults.year;
    document.getElementById('priceMarketingInput').value = defaults.priceMarketing;
    document.getElementById('priceDesignInput').value = defaults.priceDesign;
    document.getElementById('priceReelsInput').value = defaults.priceReels;
    document.getElementById('whyUsInput').value = defaults.whyUsText;
    document.getElementById('whoWeAreInput').value = defaults.whoWeAreText;
    
    updateContent();
}

// Tab switching
function showTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab
    document.getElementById(tabId).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Toggle panel visibility
function togglePanel() {
    const panel = document.getElementById('controlPanel');
    const toggle = document.getElementById('togglePanel');
    
    if (panel.classList.contains('hidden')) {
        panel.classList.remove('hidden');
        toggle.classList.add('hidden');
    } else {
        panel.classList.add('hidden');
        toggle.classList.remove('hidden');
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    updateContent();
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
    
    // Ctrl/Cmd + H to toggle panel
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
        e.preventDefault();
        togglePanel();
    }
});