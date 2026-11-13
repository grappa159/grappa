/* =========================================================
   НАСТРОЙКИ — правьте здесь
   ========================================================= */
const CONFIG = {
  whatsapp: '79091047212',          // номер ресторана для заявок
  // Плашка «Демо-версия» внизу слева. Уберите после согласования (showDemoBadge: false)
  showDemoBadge: false,
  devName: 'Разработчик: Иван',
  devLink: '',                      // например 'https://t.me/your_nick'
  // Часы работы: индекс 0 = воскресенье … 6 = суббота. null — нет данных
  hours: [
    null,            // Вс
    ['12:00', '23:00'], // Пн
    ['12:00', '23:00'], // Вт
    ['12:00', '23:00'], // Ср
    ['12:00', '23:00'], // Чт
    ['12:00', '01:00'], // Пт
    null,            // Сб
  ],
};

/* =========================================================
   МЕНЮ (по фото меню ресторана, ноябрь 2026)
   ========================================================= */
const MENU = [
  { id: 'antipasti', title: 'Закуски', it: 'Antipasti', groups: [
    { name: 'Холодные закуски', items: [
      ['Тартар из телятины со страчателлой', 890],
      ['Севиче из лосося', 890],
      ['Карпаччо из телятины', 760],
      ['Вителло тоннато', 890],
      ['Капрезе от шефа', 790],
    ]},
    { name: 'Брускетты', items: [
      ['С ростбифом и соусом тоннато', 530],
      ['С лососем и кремом из авокадо', 590],
      ['С томатами черри и живой моцареллой', 490],
    ]},
    { name: 'Горячие закуски', items: [
      ['Баклажан Пармиджано', 630],
      ['Аранчини с креветками', 590],
      ['Аранчини с рагу болоньезе и зелёным горошком', 590],
    ]},
    { name: 'Плато', items: [
      ['Сырное плато', 1790, '350 г'],
      ['Мясное плато', 1790, '300 г'],
    ]},
  ]},
  { id: 'pasta', title: 'Паста и ризотто', it: 'Pasta fatta a mano', groups: [
    { name: 'Паста ручной работы', items: [
      ['Тальятелле с тартаром из телятины', 1090],
      ['Лазанья аль Форно', 890],
      ['Каламарата с гуанчале', 670],
      ['Тальятелле Болоньезе', 790],
      ['Паппарделле с белыми грибами и Пармиджано Реджано', 790],
      ['Паппарделле с телятиной и белыми грибами', 990],
      ['Тальятелле с креветками и страчателлой из Апулии', 1090],
      ['Тальятелле с томатами конфи и страчателлой', 790],
      ['Казаречче с морепродуктами, шпинатом и белым вином', 1090],
    ]},
    { name: 'Равиоли', items: [
      ['С белыми грибами', 760],
      ['Со шпинатом и рикоттой', 690],
      ['С разварной телятиной', 890],
    ]},
    { name: 'Ризотто', items: [
      ['Ризотто по-милански с тигровыми креветками', 890],
      ['Ризотто с белыми грибами и трюфельным пате', 890],
    ]},
  ]},
  { id: 'pizza', title: 'Пицца', it: 'Pizza napoletana', groups: [
    { name: 'Неаполитанская пицца', items: [
      ['Маргарита Фиор ди латте', 830],
      ['Кватро Формаджи', 890],
      ['Пепперони', 860],
      ['Ростбиф тоннато', 1260],
      ['Палермо с тунцом', 890],
      ['С гуанчале и грибами', 890],
      ['С прошутто, страчателлой и рукколой', 1260],
      ['С грушей и горгонзолой', 890],
      ['С лососем и страчателлой', 1290],
      ['Грибная с трюфельным пате', 960],
    ]},
  ]},
  { id: 'salads', title: 'Салаты и супы', it: 'Insalate e zuppe', groups: [
    { name: 'Салаты', items: [
      ['Цезарь с индейкой', 690],
      ['Цезарь с креветками', 790],
      ['Зелёный салат', 660],
      ['Салат с ростбифом', 790],
      ['Стейк-салат с соусом ромеско', 920],
      ['Салат с тунцом и авокадо', 890],
      ['Салат с лососем', 890],
    ]},
    { name: 'Супы', items: [
      ['Тыквенный с креветкой', 690],
      ['Томатный со страчателлой', 690],
    ]},
  ]},
  { id: 'main', title: 'Горячее и гриль', it: 'Secondi', groups: [
    { name: 'Горячее', items: [
      ['Креветки Гамберетти', 960],
      ['Кальмар с картофельным муссом', 960],
      ['Индейка Аль Боско', 790],
      ['Мидии в соусе блю чиз', 1150],
      ['Мидии с томатами в белом вине', 1050],
      ['Томлёное оссобуко', 1390],
    ]},
    { name: 'Гриль', items: [
      ['Стейк лосося', 1290, '100 г'],
      ['Стейк тунца', 630, '100 г'],
      ['Кальмар', 490, '100 г'],
      ['Креветка', 690, '100 г'],
      ['Филе миньон', 1450, '200 г'],
    ]},
    { name: 'Гарниры', items: [
      ['Картофельное пюре', 290],
      ['Запечённый молодой картофель', 290],
      ['Батат фри с пармезаном и трюфелем', 460],
      ['Овощи гриль', 390],
      ['Свежие овощи', 310],
      ['Микс салата', 310],
      ['Хлебная корзина', 290],
    ]},
  ]},
  { id: 'dolci', title: 'Десерты', it: 'Dolci', groups: [
    { name: 'Десерты', items: [
      ['Тирамису', 690],
      ['Канноли по-сицилийски', 360],
      ['Лимонный поссет', 360],
      ['Чизкейк Сан Себастьян', 490],
      ['Джелато', 410],
      ['Штрудель с тыквой и смородиновым чатни', 420, 'осеннее меню'],
    ]},
  ]},
  { id: 'autunno', title: 'Осеннее меню', it: 'Autunno', groups: [
    { name: 'Сезонные блюда', items: [
      ['Салат с кальмаром, овощами и морковным кремом', 860],
      ['Тартар из креветок с грушей', 790],
      ['Рулетики из цукини с рикоттой и свежими травами', 460],
      ['Крем-суп из лесных грибов', 640],
      ['Суп минестроне с гуанчале', 520],
      ['Лингвини по-средиземноморски с морепродуктами', 1090],
      ['Ризотто с тыквой и горгонзолой', 990],
      ['Пицца Капричоза', 1390],
      ['Пиццетта с прошутто и рикоттой', 670],
      ['Штрудель с тыквой и смородиновым чатни', 420],
    ]},
  ]},
  { id: 'bar', title: 'Бар', it: 'Bar', groups: [
    { name: 'Настойки на граппе', items: [
      ['Лимончелло', 220],
      ['Смородина — грейпфрут', 220],
      ['Клубника — маракуйя', 220],
      ['Малина — мёд — алоэ — лемонграсс', 220],
    ]},
    { name: 'Aperitivo: сыры и салумерия', items: [
      ['Горгонзола', 350, '40 г'],
      ['Пекорино Романо', 370, '40 г'],
      ['Пармиджано Реджано', 250, '40 г'],
      ['Прошутто', 360, '30 г'],
      ['Брезаола', 400, '30 г'],
      ['Оливки Каламата', 250, '50 г'],
    ]},
  ]},
];

const LUNCH = [
  ['Капрезе с соусом песто', 340],
  ['Нисуаз с тунцом и картофелем бейби', 360],
  ['Брускетта с камамбером и вишнёвым конфи', 360],
  ['Суп дня', 240],
  ['Гратен с муссом из пармезана и запечённым цыплёнком', 390],
  ['Ризотто сливочное с грибами', 390],
  ['Паста Польпетте с соусом маринара', 390],
  ['Пиццетта с пастрами из индейки и брокколи', 360],
  ['Лимонный поссет', 230],
];

/* ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const rub = n => n.toLocaleString('ru-RU') + ' ₽';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---------- menu tabs ---------- */
function renderMenu() {
  const tabs = $('#menuTabs');
  const list = $('#menuList');
  tabs.innerHTML = MENU.map((c, i) =>
    `<button class="tab" role="tab" data-id="${c.id}" aria-selected="${i === 0}">${esc(c.title)}<small>${esc(c.it)}</small></button>`
  ).join('');
  const show = id => {
    const cat = MENU.find(c => c.id === id);
    $$('.tab', tabs).forEach(t => t.setAttribute('aria-selected', t.dataset.id === id));
    list.innerHTML = cat.groups.map(g => `
      <div class="menu__group">
        <h4>${esc(g.name)}</h4>
        ${g.items.map(([name, price, note]) => `
          <div class="menu-item">
            <span class="menu-item__name">${esc(name)}${note ? `<small>${esc(note)}</small>` : ''}</span>
            <span class="menu-item__dots"></span>
            <span class="menu-item__price">${rub(price)}</span>
          </div>`).join('')}
      </div>`).join('');
  };
  tabs.addEventListener('click', e => {
    const t = e.target.closest('.tab');
    if (t) show(t.dataset.id);
  });
  show(MENU[0].id);

  $('#lunchList').innerHTML = LUNCH.map(([n, p]) => `<li><span>${esc(n)}</span><b>${rub(p)}</b></li>`).join('');
}

/* ---------- hours ---------- */
function renderHours() {
  const names = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const order = [1, 2, 3, 4, 5, 6, 0];
  // группируем одинаковые дни подряд: «Пн–Чт 12:00–23:00»
  const rows = [];
  order.forEach(d => {
    const h = CONFIG.hours[d];
    const key = h ? h.join('–') : 'уточняйте по телефону';
    const last = rows[rows.length - 1];
    if (last && last.key === key) last.to = d; else rows.push({ from: d, to: d, key });
  });
  $('#hoursList').innerHTML = rows.map(r =>
    `${names[r.from]}${r.from !== r.to ? '–' + names[r.to] : ''}: ${r.key}`).join('<br>');

  // статус «открыто сейчас» по пермскому времени (UTC+5)
  const perm = new Date(Date.now() + (5 * 60 + new Date().getTimezoneOffset()) * 60000);
  const toMin = s => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };
  const now = perm.getHours() * 60 + perm.getMinutes();
  const today = CONFIG.hours[perm.getDay()];
  const yesterday = CONFIG.hours[(perm.getDay() + 6) % 7];
  const el = $('#openStatus');
  let text = 'Куйбышева, 56А · 2 этаж';
  let open = false;
  if (yesterday && toMin(yesterday[1]) < toMin(yesterday[0]) && now < toMin(yesterday[1])) {
    open = true; text = `Открыто до ${yesterday[1]}`;
  } else if (today) {
    const o = toMin(today[0]); let c = toMin(today[1]); if (c <= o) c += 1440;
    if (now >= o && now < c) { open = true; text = `Открыто до ${today[1]}`; }
    else if (now < o) text = `Откроемся сегодня в ${today[0]}`;
  }
  el.textContent = text;
  el.classList.toggle('is-open', open);
}

/* ---------- header & nav ---------- */
function initHeader() {
  const header = $('#header');
  const onScroll = () => header.classList.toggle('is-solid', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const burger = $('#burger'), nav = $('#nav');
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', e => {
    if (e.target.tagName === 'A') { burger.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
  });
}

/* ---------- WhatsApp forms ---------- */
const fmtDate = v => v ? new Date(v + 'T00:00').toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', weekday: 'short' }) : '';
const openWA = text => window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');

function initForms() {
  const modal = $('#bookModal');
  const form = $('#bookForm');
  const today = new Date().toISOString().slice(0, 10);
  $$('input[type=date]').forEach(i => { i.min = today; i.value = today; });

  $$('[data-book]').forEach(b => b.addEventListener('click', () => {
    form.comment.value = b.dataset.book || '';
    modal.showModal();
  }));
  modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });

  form.addEventListener('submit', e => {
    if (e.submitter && e.submitter.value === 'cancel') return;
    e.preventDefault();
    const f = form.elements;
    openWA(`Здравствуйте! Хочу забронировать стол в Grappa.\n` +
      `Дата: ${fmtDate(f.date.value)}, ${f.time.value}\nГостей: ${f.guests.value}\n` +
      `Имя: ${f.name.value}\nТелефон: ${f.phone.value}` + (f.comment.value ? `\nКомментарий: ${f.comment.value}` : ''));
    modal.close();
  });

  $('#eventForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target.elements;
    openWA(`Здравствуйте! Хочу провести мероприятие в Grappa.\n` +
      `Повод: ${f.type.value}\nДата: ${fmtDate(f.date.value)}\nГостей: ${f.guests.value}\n` +
      `Имя: ${f.name.value}\nТелефон: ${f.phone.value}`);
  });
}

/* ---------- gallery lightbox ---------- */
function initLightbox() {
  const lb = $('#lightbox'), img = $('img', lb);
  $('#masonry').addEventListener('click', e => {
    if (e.target.tagName !== 'IMG') return;
    img.src = e.target.src; img.alt = e.target.alt; lb.hidden = false;
  });
  const close = () => { lb.hidden = true; };
  lb.addEventListener('click', close);
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ---------- reveal on scroll ---------- */
function initReveal() {
  const els = $$('.section__head, .about__text, .about__photos, .dish, .menu__set, .lunch__grid > *, .events__grid > *, .reviews blockquote, .contacts__grid > *');
  if (!('IntersectionObserver' in window)) return;
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  els.forEach(el => io.observe(el));
}

/* ---------- demo badge ---------- */
function initDemoBadge() {
  const badge = $('#demoBadge');
  if (!CONFIG.showDemoBadge) { badge.remove(); return; }
  const a = $('#devLink');
  a.textContent = CONFIG.devName;
  if (CONFIG.devLink) a.href = CONFIG.devLink; else a.removeAttribute('href');
  $('#demoClose').addEventListener('click', () => { badge.hidden = true; });
}

renderMenu();
renderHours();
initHeader();
initForms();
initLightbox();
initReveal();
initDemoBadge();
