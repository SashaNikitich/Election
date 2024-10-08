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
        role: "Кандидат на пост голови",
        info: "Олександр, анімешник, дурачок і програміст, вирішив стати головою ради ліцеїстів. Уже бачить себе на нарадах з чашкою чаю, мріючи про НМТ на 200 і роботу програмістом. Хто сказав, що справжній лідер не може бути з почуттям гумору і програмувати на Scratch?"
    },
    "Максим Шапіренко": {
        role: "Зам голови ради ліцеїстів",
        info: "Я звичайний хлопець, зі звичайним життям, але дещо про мене не знає ніхто і це моя таємниця... А якщо серйозно то I'm batman. Ну все тепер точно жарти в сторону... Я трохи розумний, трохи спортивний, трохи активний, коротше всього потроху, ну це вдень а вночі I'm batman"
    },
    "Дідківський Андрій": {
        role: "Інформаційний сектор",
        info: "Тут має бути якась інформація про мене, але воно вам не потрібно і я сам не знаю про, що написати, загалом нічого цікавого, ну максимум хожу в зальчик і тіпа стрітфотографер"
    },
    "Дєдух Ілля": {
        role: "Спортивний сектор",
        info: "Істота роду приматів родини гомінід, виду Homo sapiens. Навички: вміє ходити, говорити, грати в ігри, але не вправний у цьому всьому. Знання: математика, англійська і українська мови(але це не точно). Потрібно бути з ним обережним, не завжди дружелюбний до інших."
    },
    "Смолянова Ніка": {
        role: "Green-сектор",
        info: "Я - Ніка, не Ніна :) Навчаюсь в 11-Б групі. Відношусь до того типу людей, який живе найближче до ліцею, але майже завжди не встигає і біжить на пару. Обожнюю ловити класні моментики на камеру, грати у бадмінтон. Та найбільша моя любов - то котики🫶🏻"
    },
    "Скримінська Оксана": {
        role: "Leader-сектор",
        info: "Привіт, я — Оксана, частина цієї команди, та за сумісництвом лідерка 11-Б групи ( і не питайте як це), тому із впевненістю скажу, що шарю за організацію😊. Як і дві мої колеги люблю котиків та беру участь у житті міста та ліцею. Загалом відкрита та добра, як не доведуть, і буду рада додати у цей новий навчальний рік яскравих фарб у життя ліцею та ліцеїстів."
    },
    "Башинська Вікторія": {
        role: "Благодійність",
        info: "Активна волонтерка на всіляких заходах міста - і спортивних, і патріотичних дуже творча особистість,отримала Грант та створила власний проєкт «Творча Вежа»💙 ну і ще з цікавенького – займається веслуванням на човнах «Дракон» та брала участь в Чемпіонаті України 2024🐉"
    },
    "Волинець Владік": {
        role: "Ліцеїст 11-Б групи",
        info: "Владік моя фанатка. Посів 3 місце в обласній олімпіаді з ГЕОГРАФІЇ!!!!!!!!. А ще не грав в доту з 9 вересня.",
    },
    "Парфенюк Вікторія": {
        role: "Культурно-масовий сектор",
        info: "Привітики! Мене звати Віка, не знаю як я тут опинилась. Займаюсь бадмінтоном, якщо не подружимось, можу зарядити воланчиком в око. Дуже дружелюбна і добра! Буду рада зробити свій вклад в життя ліцею)",
    },
    "Дергун Андрій": {
        role: "Інноваційний сектор",
        info: "Жоскій тіп, який залетів в нашу команду з ноги і буде відповідати за інновації в ліцеї.",
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