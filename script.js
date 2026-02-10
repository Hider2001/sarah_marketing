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

// Update all content based on inputs - targets only specific elements by ID or data-bind
const dynamicTextItems = [];
const fixedSectionSelector = '.distinguishes-page';
const controlledElementIds = new Set([
    'coverClientName',
    'coverProposalTitle',
    'coverAgencyName',
    'coverAddress',
    'coverYear',
    'coverPhone',
    'coverWebsite',
    'coverEmail',
    'footerAddress',
    'footerPhone',
    'footerEmail',
    'footerAgencyName',
    'whyUsText',
    'whoWeAreText',
    'priceMarketing',
    'priceDesign',
    'priceReels',
    'priceTotal'
]);

function normalizeTextareaValue(value) {
    return value.replace(/\r\n/g, '\n');
}

function escapeHtml(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function getElementEditableValue(element, usesLineBreaks) {
    return normalizeTextareaValue(usesLineBreaks ? element.innerText : element.textContent);
}

function applyDynamicValue(item, value) {
    const normalizedValue = normalizeTextareaValue(value);
    if (item.usesLineBreaks) {
        item.element.innerHTML = escapeHtml(normalizedValue).replace(/\n/g, '<br>');
    } else {
        item.element.textContent = normalizedValue;
    }
}

function buildDynamicTextEditor() {
    const container = document.getElementById('dynamicTextFields');
    if (!container) return;

    const candidates = document.querySelectorAll('.page h1, .page h2, .page h3, .page h4, .page p, .page span');
    let fieldIndex = 1;

    candidates.forEach(function(element) {
        if (element.closest(fixedSectionSelector)) return;
        if (controlledElementIds.has(element.id)) return;
        if (element.hasAttribute('data-bind')) return;
        if (element.closest('.service-icon')) return;
        if (element.closest('#coverTagline') || element.closest('#thankYouTagline')) return;

        const hasNonBrChild = Array.from(element.children).some(function(child) {
            return child.tagName !== 'BR';
        });
        if (hasNonBrChild) return;

        const textPreview = element.textContent.replace(/\s+/g, ' ').trim();
        if (!textPreview) return;

        const usesLineBreaks = /<br\s*\/?>/i.test(element.innerHTML);
        const defaultValue = getElementEditableValue(element, usesLineBreaks);
        const key = 'dynamicText_' + fieldIndex;
        const pageSection = element.closest('.page');
        const sectionTitle = pageSection ? pageSection.querySelector('.section-title') : null;
        const sectionName = sectionTitle ? sectionTitle.textContent.replace(/\s+/g, ' ').trim() : 'Content';

        const group = document.createElement('div');
        group.className = 'form-group';

        const label = document.createElement('label');
        label.textContent = fieldIndex + '. ' + sectionName;

        const textarea = document.createElement('textarea');
        textarea.rows = usesLineBreaks ? 4 : 3;
        textarea.value = defaultValue;
        textarea.setAttribute('data-dynamic-key', key);

        const item = {
            key: key,
            element: element,
            textarea: textarea,
            defaultValue: defaultValue,
            usesLineBreaks: usesLineBreaks
        };

        textarea.addEventListener('input', function() {
            applyDynamicValue(item, textarea.value);
        });

        group.appendChild(label);
        group.appendChild(textarea);
        container.appendChild(group);

        dynamicTextItems.push(item);
        fieldIndex += 1;
    });
}

function resetDynamicTextEditor() {
    dynamicTextItems.forEach(function(item) {
        item.textarea.value = item.defaultValue;
        applyDynamicValue(item, item.defaultValue);
    });
}

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

    // --- Update by specific IDs ---

    // Cover page
    document.getElementById('coverClientName').textContent = clientName;
    document.getElementById('coverProposalTitle').textContent = proposalTitle;
    document.getElementById('coverAgencyName').textContent = agencyName;
    document.getElementById('coverAddress').textContent = agencyAddress;
    document.getElementById('coverYear').textContent = year;
    document.getElementById('coverPhone').textContent = agencyPhone;
    document.getElementById('coverWebsite').textContent = agencyWebsite;
    document.getElementById('coverEmail').textContent = agencyEmail;

    // Footer (thank-you page)
    document.getElementById('footerAddress').textContent = agencyAddress;
    document.getElementById('footerPhone').textContent = agencyPhone;
    document.getElementById('footerEmail').textContent = agencyEmail;
    document.getElementById('footerAgencyName').textContent = agencyName;

    // Content sections
    document.getElementById('whyUsText').textContent = whyUsText;
    document.getElementById('whoWeAreText').textContent = whoWeAreText;

    // Pricing
    document.getElementById('priceMarketing').textContent = '$' + priceMarketing;
    document.getElementById('priceDesign').textContent = '$' + priceDesign;
    document.getElementById('priceReels').textContent = '$' + priceReels;
    document.getElementById('priceTotal').textContent = '$' + (priceMarketing + priceDesign + priceReels);

    // --- Update all data-bind spots ---
    // These are the inline <span data-bind="clientName"> etc. scattered in the body text
    document.querySelectorAll('[data-bind="clientName"]').forEach(function(el) {
        el.textContent = clientName;
    });
    document.querySelectorAll('[data-bind="agencyName"]').forEach(function(el) {
        el.textContent = agencyName;
    });
    document.querySelectorAll('[data-bind="agencyAddress"]').forEach(function(el) {
        el.textContent = agencyAddress;
    });
    document.querySelectorAll('[data-bind="agencyPhone"]').forEach(function(el) {
        el.textContent = agencyPhone;
    });
    document.querySelectorAll('[data-bind="agencyEmail"]').forEach(function(el) {
        el.textContent = agencyEmail;
    });
    document.querySelectorAll('[data-bind="agencyWebsite"]').forEach(function(el) {
        el.textContent = agencyWebsite;
    });

    // Tagline
    const taglineParts = tagline.split(/[&+]/);
    if (taglineParts.length >= 2) {
        const coverTagline = document.getElementById('coverTagline');
        const thankYouTagline = document.getElementById('thankYouTagline');

        const part1 = taglineParts[0].trim();
        const part2 = taglineParts.slice(1).join(' & ').trim();

        const taglineHTML = '<span>' + part1 + '</span><span>&</span><span>' + part2 + '</span>';

        if (coverTagline) coverTagline.innerHTML = taglineHTML;
        if (thankYouTagline) thankYouTagline.innerHTML = taglineHTML;
    }
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
    resetDynamicTextEditor();
}

// Tab switching
function showTab(tabId) {
    // Hide all tabs
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) { tab.classList.remove('active'); });

    // Remove active class from all buttons
    var buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(function(btn) { btn.classList.remove('active'); });

    // Show selected tab
    document.getElementById(tabId).classList.add('active');

    // Add active class to clicked button
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// Toggle panel visibility
function togglePanel() {
    var panel = document.getElementById('controlPanel');
    var toggle = document.getElementById('togglePanel');

    if (panel.classList.contains('hidden')) {
        panel.classList.remove('hidden');
        toggle.classList.add('show');
    } else {
        panel.classList.add('hidden');
        toggle.classList.remove('s');
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    updateContent();
    buildDynamicTextEditor();
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
