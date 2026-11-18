// ============================================
// ۱. انیمیشن ظاهر شدن المان‌ها با اسکرول (Reveal)
// ============================================
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // اجرای اولیه


// ============================================
// ۲. بخش تعامل با ایده‌ها (ایده‌ت چیه؟)
// ============================================
const submitBtn = document.getElementById('submitIdea');
const ideaInput = document.getElementById('ideaInput');
const ideaResponse = document.getElementById('ideaResponse');

if (submitBtn) {
    submitBtn.addEventListener('click', () => {
        if (ideaInput.value.trim() === '') {
            ideaResponse.textContent = 'لطفاً اول ایده‌ات رو بنویس! ✍️';
            ideaResponse.style.color = '#E76F51'; // نارنجی تیره
            ideaResponse.classList.add('show');
            return;
        }

        // لیست جملات تشویقی
        const responses = [
            'ایده‌ات ارزش شنیدن داره! به زودی باهات تماس می‌گیریم. 🌱',
            'چه شروع خوبی! این فقط اول راهه. 🚀',
            'جرقه‌ی یه پروژه‌ی بزرگ همینجا زده شد! ✨',
            'ایده‌ات رو باور کن، ما کنارتیم تا جدی‌اش کنیم. 🤝'
        ];
        
        // انتخاب یه جمله تصادفی
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        ideaResponse.textContent = randomResponse;
        ideaResponse.style.color = '#fc9d50'; // نارنجی روشن
        ideaResponse.classList.add('show');
        
        // پاک کردن تکست‌اریا بعد از ارسال
        ideaInput.value = '';
    });
}
/* ============================================
   بخش آمار و دستاوردها
   ============================================ */
.stats-section {
  padding: var(--space-8) 0;
  background-color: var(--bg-light); /* کرم روشن */
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-4);
}

.stat-card {
  background: #FFFFFF;
  padding: var(--space-6) var(--space-4);
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.08);
}

.stat-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(252, 157, 80, 0.1); /* نارنجی ملایم */
  color: var(--accent); /* نارنجی */
  border-radius: 16px;
  margin-bottom: var(--space-4);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--bg-dark); /* سرمه‌ای */
  margin-bottom: var(--space-2);
  font-family: inherit;
}

/* علامت + کنار اعداد */
.stat-number::after {
  content: '+';
  color: var(--accent);
  font-size: 1.5rem;
  vertical-align: super;
  margin-right: 2px;
}

.stat-title {
  font-size: 1rem;
  color: #666;
  font-weight: 600;
}
// ============================================
// ۴. فرم تماس (نمایشی)
// ============================================
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // جلوگیری از رفرش صفحه
        
        // نمایش پیام موفقیت
        formResponse.textContent = 'پیام شما با موفقیت ارسال شد. به زودی با شما تماس می‌گیریم. ✅';
        formResponse.classList.add('show');
        
        // پاک کردن فرم
        contactForm.reset();
        
        // مخفی کردن پیام بعد از ۳ ثانیه
        setTimeout(() => {
            formResponse.classList.remove('show');
        }, 3000);
    });
}
// ============================================
// ۵. فرم ثبت‌نام (نمایشی)
// ============================================
const joinForm = document.getElementById('joinForm');
const joinResponse = document.getElementById('joinResponse');

if (joinForm) {
    joinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        joinResponse.textContent = 'درخواست شما با موفقیت ثبت شد. تیم ما به زودی با شما تماس می‌گیرد. 🌱';
        joinResponse.classList.add('show');
        
        joinForm.reset();
        
        setTimeout(() => {
            joinResponse.classList.remove('show');
        }, 4000);
    });
}
// ============================================
// ۶. آکاردئون سوالات متداول (FAQ)
// ============================================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const parent = question.parentElement;
        
        // بستن بقیه سوال‌ها (اگر می‌خوای همزمان چندتا باز باشه، این بخش رو پاک کن)
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== parent) {
                item.classList.remove('active');
            }
        });

        // باز/بسته کردن سوال کلیک شده
        parent.classList.toggle('active');
    });
});
