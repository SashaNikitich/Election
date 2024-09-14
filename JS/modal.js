// Get all buttons that open the modal
const modalButtons = document.querySelectorAll('.team button');

// Get the modal
const modal = document.createElement('div');
modal.classList.add('modal');

// Get the <span> element that closes the modal
const closeButton = document.createElement('span');
closeButton.classList.add('close');
closeButton.innerHTML = '&times;';

// Create modal content
const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

// Append close button and content to modal
modalContent.appendChild(closeButton);
modal.appendChild(modalContent);

// Append modal to body
document.body.appendChild(modal);

// Team member information
const teamInfo = {
    "Нікітіч Олександр": {
        role: "Ліцеїст 11-Б групи",
        info: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    "Максим Шапіренко": {
        role: "Ліцеїст 11-Б групи",
        info: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    "Артем Тищенко": {
        role: "Ліцеїст 11-Б групи",
        info: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    "Дідківський Андрій": {
        role: "Ліцеїст 11-Г групи",
        info: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    "Смолянова Ніка": {
        role: "Ліцеїстка 11-Б групи",
        info: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    "Скримінська Оксана": {
        role: "Ліцеїстка 11-Б групи",
        info: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    "Башинська Вікторія": {
        role: "Ліцеїстка 11-Б групи",
        info: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    "Волинець Владік": {
        role: "Ліцеїст 11-Б групи",
        info: "Владік моя фанатка. Посів 3 місце в обласній олімпіаді з ГЕОГРАФІЇ!!!!!!!!. А ще не грав в доту з 9 вересня.",
    }
};

// Function to open the modal with specific content
function openModal(content) {
    modalContent.innerHTML = '';
    modalContent.appendChild(closeButton);
    modalContent.insertAdjacentHTML('beforeend', content);
    modal.style.display = 'block';
    modal.style.overflow = 'hidden';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Add click event to all modal buttons
modalButtons.forEach(button => {
    button.addEventListener('click', function() {
        const teamMember = this.closest('.team');
        const name = teamMember.querySelector('.endorser').textContent;
        const imageSrc = teamMember.querySelector('img').src;

        const memberInfo = teamInfo[name] || { role: "Член команди", info: "Інформація про цього члена команди ще не додана." };

        const modalHTML = `
            <h2>${name}</h2>
            <img src="${imageSrc}" alt="${name}" style="max-width: 100%; border-radius: 5px; margin-bottom: 15px;">
            <p><strong>Роль:</strong> ${memberInfo.role}</p>
            <p>${memberInfo.info}</p>
        `;

        openModal(modalHTML);
    });
});

// Close the modal when clicking on <span> (x)
closeButton.onclick = closeModal;

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}