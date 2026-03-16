// =============================================
// BRIGHTMIND ACADEMY — MAIN APP JS
// =============================================

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }
});

// Mobile nav toggle
function toggleNav() {
  const links = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  if (links) {
    links.classList.toggle('open');
    hamburger.textContent = links.classList.contains('open') ? '✕' : '☰';
  }
}

// WhatsApp popup
function toggleWA() {
  const popup = document.getElementById('wa-popup');
  if (popup) popup.classList.toggle('hidden');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ---- COURSE DATA ----
const COURSES = {
  english: {
    label: 'English',
    icon: '📖',
    color: '#7C3AED',
    classes: {
      1: { title: 'English — Class 1', desc: 'Letters, phonics, simple words and basic sentences.', modules: 5, thumb: 'thumb-english' },
      2: { title: 'English — Class 2', desc: 'Reading short stories, grammar basics and vocabulary building.', modules: 6, thumb: 'thumb-english' },
      3: { title: 'English — Class 3', desc: 'Comprehension, creative writing, adjectives and tenses.', modules: 6, thumb: 'thumb-english' },
      4: { title: 'English — Class 4', desc: 'Advanced grammar, essay writing and literature appreciation.', modules: 7, thumb: 'thumb-english' },
      5: { title: 'English — Class 5', desc: 'Complex texts, formal writing, and literary analysis.', modules: 7, thumb: 'thumb-english' },
    }
  },
  maths: {
    label: 'Mathematics',
    icon: '🔢',
    color: '#2563EB',
    classes: {
      1: { title: 'Maths — Class 1', desc: 'Counting, addition, subtraction and basic shapes.', modules: 5, thumb: 'thumb-maths' },
      2: { title: 'Maths — Class 2', desc: 'Tables, place value, measurement and patterns.', modules: 6, thumb: 'thumb-maths' },
      3: { title: 'Maths — Class 3', desc: 'Multiplication, division, fractions and geometry.', modules: 6, thumb: 'thumb-maths' },
      4: { title: 'Maths — Class 4', desc: 'Decimals, factors, area, perimeter and data handling.', modules: 7, thumb: 'thumb-maths' },
      5: { title: 'Maths — Class 5', desc: 'Percentages, averages, algebra basics and statistics.', modules: 7, thumb: 'thumb-maths' },
    }
  },
  science: {
    label: 'The World Around Us',
    icon: '🌍',
    color: '#059669',
    classes: {
      1: { title: 'Science — Class 1', desc: 'Myself, my family, plants, animals and seasons.', modules: 5, thumb: 'thumb-science' },
      2: { title: 'Science — Class 2', desc: 'Living and non-living, food, water and air.', modules: 6, thumb: 'thumb-science' },
      3: { title: 'Science — Class 3', desc: 'Plants, animals, materials, weather and environment.', modules: 6, thumb: 'thumb-science' },
      4: { title: 'Science — Class 4', desc: 'Human body, ecosystems, force, energy and matter.', modules: 7, thumb: 'thumb-science' },
      5: { title: 'Science — Class 5', desc: 'Earth, space, microorganisms, natural resources and conservation.', modules: 7, thumb: 'thumb-science' },
    }
  }
};

// Module data for courses (sample for English Class 3)
const SAMPLE_MODULES = {
  1: {
    title: 'The Alphabet & Phonics', theme: 'Sounds and Letters',
    lessons: [
      { title: 'Vowels and Consonants', topic: 'Identifying vowels (a,e,i,o,u) and consonants' },
      { title: 'Short Vowel Sounds', topic: 'CVC word patterns with short vowels' },
      { title: 'Long Vowel Sounds', topic: 'Silent-e and vowel teams' },
      { title: 'Consonant Blends', topic: 'Blends: bl, cl, fl, gl, pl, sl' },
      { title: 'Digraphs', topic: 'ch, sh, th, wh, ph sounds' }
    ]
  },
  2: {
    title: 'Reading Comprehension', theme: 'Understanding Stories',
    lessons: [
      { title: 'Story Elements', topic: 'Character, setting, plot and theme' },
      { title: 'Main Idea & Details', topic: 'Finding the central message in a passage' },
      { title: 'Sequence of Events', topic: 'Using first, next, then, last to order events' },
      { title: 'Making Predictions', topic: 'Using clues to predict what happens next' },
      { title: 'Drawing Conclusions', topic: 'Inferring meaning from text evidence' }
    ]
  },
  3: {
    title: 'Parts of Speech', theme: 'Words and Their Roles',
    lessons: [
      { title: 'Nouns', topic: 'Common, proper, concrete and abstract nouns' },
      { title: 'Pronouns', topic: 'Personal pronouns and their usage' },
      { title: 'Verbs & Tenses', topic: 'Past, present and future tense verbs' },
      { title: 'Adjectives', topic: 'Describing words and comparatives' },
      { title: 'Adverbs', topic: 'How, when and where adverbs modify verbs' }
    ]
  },
  4: {
    title: 'Creative Writing', theme: 'Expressing Ideas',
    lessons: [
      { title: 'Sentence Structure', topic: 'Simple, compound and complex sentences' },
      { title: 'Paragraph Writing', topic: 'Topic sentence, supporting details, concluding sentence' },
      { title: 'Descriptive Writing', topic: 'Using sensory details to paint a picture' },
      { title: 'Narrative Writing', topic: 'Writing personal stories with a beginning, middle and end' },
      { title: 'Proofreading Skills', topic: 'Checking for spelling, punctuation and grammar errors' }
    ]
  },
  5: {
    title: 'Vocabulary & Spelling', theme: 'Word Power',
    lessons: [
      { title: 'Context Clues', topic: 'Using surrounding text to find word meanings' },
      { title: 'Synonyms & Antonyms', topic: 'Words with similar and opposite meanings' },
      { title: 'Compound Words', topic: 'Combining two words to make a new one' },
      { title: 'Prefixes & Suffixes', topic: 'un-, re-, pre-, -ful, -less, -ing, -ed' },
      { title: 'Spelling Patterns', topic: 'Common spelling rules and tricky words' }
    ]
  },
  6: {
    title: 'Poetry & Literature', theme: 'Appreciating Language',
    lessons: [
      { title: 'Types of Poetry', topic: 'Rhyming poems, haiku, acrostic poetry' },
      { title: 'Figurative Language', topic: 'Similes, metaphors and personification' },
      { title: 'Reading Fables', topic: 'Moral lessons in classic fables' },
      { title: 'Book Reports', topic: 'How to summarize and review a book' },
      { title: 'Oral Storytelling', topic: 'Expressing a story clearly and confidently' }
    ]
  }
};

// ---- SESSION MANAGEMENT ----
function getStudent() {
  try {
    return JSON.parse(localStorage.getItem('bma_student') || 'null');
  } catch { return null; }
}

function setStudent(data) {
  localStorage.setItem('bma_student', JSON.stringify(data));
}

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem('bma_progress') || '{}');
  } catch { return {}; }
}

function setProgress(data) {
  localStorage.setItem('bma_progress', JSON.stringify(data));
}

function getLessonKey(subject, cls, module, lesson) {
  return `${subject}_c${cls}_m${module}_l${lesson}`;
}

function markLessonComplete(subject, cls, module, lesson) {
  const prog = getProgress();
  prog[getLessonKey(subject, cls, module, lesson)] = { completed: true, timestamp: Date.now() };
  setProgress(prog);
}

function isLessonComplete(subject, cls, module, lesson) {
  const prog = getProgress();
  return !!prog[getLessonKey(subject, cls, module, lesson)]?.completed;
}

function isModuleComplete(subject, cls, module, lessonCount) {
  for (let i = 1; i <= lessonCount; i++) {
    if (!isLessonComplete(subject, cls, module, i)) return false;
  }
  return true;
}

// ---- COURSE LISTING PAGE ----
function initCoursesPage() {
  const container = document.getElementById('courses-container');
  if (!container) return;

  const student = getStudent();
  if (!student) {
    window.location.href = 'signin.html';
    return;
  }

  // Update greeting
  const greeting = document.getElementById('student-greeting');
  if (greeting) greeting.textContent = `Welcome back, ${student.name}! 👋`;

  let activeClass = 1;

  function renderCourses(cls) {
    container.innerHTML = '';
    const subjects = ['english', 'maths', 'science'];
    subjects.forEach(subj => {
      const data = COURSES[subj].classes[cls];
      const prog = getProgress();
      const totalLessons = data.modules * 5;
      let completedLessons = 0;
      for (let m = 1; m <= data.modules; m++) {
        for (let l = 1; l <= 5; l++) {
          if (isLessonComplete(subj, cls, m, l)) completedLessons++;
        }
      }
      const pct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

      const card = document.createElement('div');
      card.className = 'course-card';
      card.innerHTML = `
        <div class="course-thumb ${data.thumb}">
          <span style="font-size:3.5rem">${COURSES[subj].icon}</span>
        </div>
        <div class="course-info">
          <div class="subject-tag">${COURSES[subj].label}</div>
          <h3>${data.title}</h3>
          <p>${data.desc}</p>
          ${pct > 0 ? `<div class="progress-label">${pct}% complete</div><div class="mini-progress"><div style="width:${pct}%"></div></div>` : ''}
          <div class="course-meta">
            <span class="modules">📚 ${data.modules} Modules · ${data.modules * 5} Lessons</span>
            <a href="course-detail.html?subject=${subj}&class=${cls}" class="start-btn">${pct > 0 ? 'Continue' : 'Start'} →</a>
          </div>
        </div>`;
      container.appendChild(card);
    });
  }

  // Class buttons
  document.querySelectorAll('.class-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.class-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeClass = parseInt(btn.dataset.class);
      renderCourses(activeClass);
    });
  });

  renderCourses(activeClass);
}

// ---- COURSE DETAIL PAGE ----
function initCourseDetailPage() {
  const container = document.getElementById('module-list');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const subject = params.get('subject') || 'english';
  const cls = parseInt(params.get('class')) || 3;
  const courseData = COURSES[subject]?.classes[cls];
  if (!courseData) return;

  // Fill hero info
  document.getElementById('course-title-hero').textContent = courseData.title;
  document.getElementById('course-desc-hero').textContent = courseData.desc;
  document.getElementById('course-class-pill').textContent = `Class ${cls}`;
  document.getElementById('course-subject-pill').textContent = COURSES[subject].label;
  document.getElementById('course-modules-pill').textContent = `${courseData.modules} Modules`;
  document.getElementById('course-lessons-pill').textContent = `${courseData.modules * 5} Lessons`;
  document.getElementById('course-modules-stat').textContent = courseData.modules;
  document.getElementById('course-lessons-stat').textContent = courseData.modules * 5;
  document.getElementById('breadcrumb-subject').textContent = courseData.title;

  // Calculate overall progress
  let totalLessons = courseData.modules * 5;
  let completedLessons = 0;
  for (let m = 1; m <= courseData.modules; m++) {
    for (let l = 1; l <= 5; l++) {
      if (isLessonComplete(subject, cls, m, l)) completedLessons++;
    }
  }
  const pct = Math.round((completedLessons / totalLessons) * 100);
  const progBar = document.getElementById('overall-progress-bar');
  const progLabel = document.getElementById('overall-progress-label');
  if (progBar) progBar.style.width = pct + '%';
  if (progLabel) progLabel.textContent = pct + '%';

  // Render modules
  const modules = SAMPLE_MODULES;
  let allModules = {};
  for (let i = 1; i <= courseData.modules; i++) {
    allModules[i] = modules[i] || { title: `Module ${i}`, theme: 'Core Concepts', lessons: Array.from({length:5}, (_,j) => ({ title: `Lesson ${j+1}`, topic: `Topic ${j+1} of Module ${i}` })) };
  }

  container.innerHTML = '';
  Object.entries(allModules).forEach(([mNum, mod]) => {
    const m = parseInt(mNum);
    const modComplete = isModuleComplete(subject, cls, m, 5);
    const inProgress = !modComplete && mod.lessons.some((_, li) => isLessonComplete(subject, cls, m, li + 1));
    const statusClass = modComplete ? 'status-done' : inProgress ? 'status-progress' : 'status-locked';
    const statusText = modComplete ? '✅ Completed' : inProgress ? '▶ In Progress' : '🔒 Locked';

    const el = document.createElement('div');
    el.className = 'module-item unlocked';
    el.innerHTML = `
      <div class="module-header" onclick="toggleModule(this)">
        <div class="module-title">
          <div class="module-num">${m}</div>
          <div>
            <div>${mod.title}</div>
            <span class="module-theme">${mod.theme}</span>
          </div>
        </div>
        <span class="module-status ${statusClass}">${statusText}</span>
      </div>
      <div class="module-lessons" style="display:none">
        ${mod.lessons.map((lesson, li) => {
          const lessonNum = li + 1;
          const done = isLessonComplete(subject, cls, m, lessonNum);
          return `<div class="lesson-row">
            <div class="lesson-icon ${done ? 'done' : ''}">
              ${done ? '✓' : lessonNum}
            </div>
            <span>${lesson.title}</span>
            <a href="lesson.html?subject=${subject}&class=${cls}&module=${m}&lesson=${lessonNum}">
              ${done ? 'Review' : 'Start'} →
            </a>
          </div>`;
        }).join('')}
      </div>`;
    container.appendChild(el);
  });

  // Check if all modules done → show assessment
  const assessBtn = document.getElementById('assessment-btn');
  if (assessBtn) {
    if (pct === 100) {
      assessBtn.style.display = 'block';
      assessBtn.href = `assessment.html?subject=${subject}&class=${cls}`;
    }
  }
}

function toggleModule(header) {
  const lessons = header.nextElementSibling;
  if (lessons) {
    lessons.style.display = lessons.style.display === 'none' ? 'block' : 'none';
    const arrow = header.querySelector('.module-toggle');
    if (arrow) arrow.textContent = lessons.style.display === 'none' ? '▼' : '▲';
  }
}

// ---- LESSON PAGE ----
function initLessonPage() {
  if (!document.getElementById('quiz-container')) return;

  const params = new URLSearchParams(window.location.search);
  const subject = params.get('subject') || 'english';
  const cls = parseInt(params.get('class')) || 3;
  const module = parseInt(params.get('module')) || 1;
  const lesson = parseInt(params.get('lesson')) || 1;

  const mod = SAMPLE_MODULES[module] || {};
  const lessonData = mod.lessons?.[lesson - 1] || { title: `Lesson ${lesson}`, topic: 'Learning topic' };

  // Update title
  const titleEl = document.getElementById('lesson-title');
  if (titleEl) titleEl.textContent = lessonData.title;
  const topicEl = document.getElementById('lesson-topic');
  if (topicEl) topicEl.textContent = lessonData.topic;

  // Render sidebar
  const sidebar = document.getElementById('lessons-sidebar');
  if (sidebar && mod.lessons) {
    sidebar.innerHTML = '';
    mod.lessons.forEach((l, i) => {
      const num = i + 1;
      const done = isLessonComplete(subject, cls, module, num);
      const active = num === lesson;
      const item = document.createElement('div');
      item.className = `sidebar-lesson-item ${active ? 'active' : ''} ${done ? 'completed' : ''}`;
      item.innerHTML = `<span class="icon">${done ? '✓' : num}</span> ${l.title}`;
      item.onclick = () => { window.location.href = `lesson.html?subject=${subject}&class=${cls}&module=${module}&lesson=${num}`; };
      sidebar.appendChild(item);
    });
  }

  // Quiz setup
  const quizData = generateQuiz(lessonData.topic);
  renderQuiz(quizData);

  // Already done?
  if (isLessonComplete(subject, cls, module, lesson)) {
    showCompletedState();
  }

  // Submit quiz
  const submitBtn = document.getElementById('submit-quiz');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const score = evaluateQuiz(quizData);
      const pct = Math.round((score / quizData.length) * 100);
      const resultEl = document.getElementById('quiz-result');
      resultEl.style.display = 'block';
      if (pct >= 60) {
        resultEl.className = 'quiz-result pass';
        resultEl.textContent = `🎉 Great job! You scored ${score}/${quizData.length} (${pct}%). Lesson complete!`;
        markLessonComplete(subject, cls, module, lesson);
        document.getElementById('btn-next').style.display = 'inline-block';
        submitBtn.disabled = true;
      } else {
        resultEl.className = 'quiz-result fail';
        resultEl.textContent = `📚 You scored ${score}/${quizData.length} (${pct}%). Review the lesson and try again.`;
      }
    });
  }

  // Next lesson
  const nextBtn = document.getElementById('btn-next');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const nextLesson = lesson + 1;
      if (nextLesson <= 5) {
        window.location.href = `lesson.html?subject=${subject}&class=${cls}&module=${module}&lesson=${nextLesson}`;
      } else {
        // check if next module
        const maxMod = COURSES[subject]?.classes[cls]?.modules || 5;
        if (module < maxMod) {
          window.location.href = `lesson.html?subject=${subject}&class=${cls}&module=${module + 1}&lesson=1`;
        } else {
          window.location.href = `assessment.html?subject=${subject}&class=${cls}`;
        }
      }
    });
  }
}

function generateQuiz(topic) {
  // Returns sample quiz with MCQ and fill-in-the-blank
  return [
    {
      type: 'mcq',
      q: `Which of the following best describes: "${topic}"?`,
      options: ['It is related to the lesson theme', 'It has nothing to do with this subject', 'It is a mathematical concept', 'It is a historical event'],
      correct: 0
    },
    {
      type: 'mcq',
      q: 'What is the main purpose of studying this lesson?',
      options: ['To memorize random facts', 'To build understanding and apply knowledge', 'To skip to the next chapter', 'To complete homework only'],
      correct: 1
    },
    {
      type: 'fill',
      q: 'Complete the sentence: Learning new topics helps us build our ___.',
      answer: 'knowledge'
    },
    {
      type: 'mcq',
      q: 'After completing a lesson, what should a student do?',
      options: ['Move on immediately without reviewing', 'Take the quiz to check understanding', 'Skip to the final assessment', 'Ask someone else for the answers'],
      correct: 1
    },
    {
      type: 'fill',
      q: 'A quiz at the end of a lesson helps ___ your understanding.',
      answer: 'check'
    }
  ];
}

function renderQuiz(quizData) {
  const container = document.getElementById('quiz-container');
  if (!container) return;
  container.innerHTML = quizData.map((q, i) => {
    if (q.type === 'mcq') {
      return `<div class="question-block" data-index="${i}">
        <div class="question-text">Q${i+1}. ${q.q}</div>
        <div class="options-list">
          ${q.options.map((opt, oi) => `
            <label class="option-item">
              <input type="radio" name="q${i}" value="${oi}"/>
              ${opt}
            </label>`).join('')}
        </div>
      </div>`;
    } else {
      return `<div class="question-block" data-index="${i}">
        <div class="question-text">Q${i+1}. ${q.q}</div>
        <div class="fill-blank">
          <input type="text" placeholder="Type your answer..." data-fill="${i}" autocomplete="off"/>
        </div>
      </div>`;
    }
  }).join('');
}

function evaluateQuiz(quizData) {
  let score = 0;
  quizData.forEach((q, i) => {
    if (q.type === 'mcq') {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected && parseInt(selected.value) === q.correct) score++;
    } else {
      const input = document.querySelector(`input[data-fill="${i}"]`);
      if (input && input.value.trim().toLowerCase() === q.answer.toLowerCase()) score++;
    }
  });
  return score;
}

function showCompletedState() {
  const badge = document.getElementById('lesson-complete-badge');
  if (badge) { badge.style.display = 'flex'; }
  const nextBtn = document.getElementById('btn-next');
  if (nextBtn) nextBtn.style.display = 'inline-block';
  const submitBtn = document.getElementById('submit-quiz');
  if (submitBtn) submitBtn.disabled = true;
}

// ---- FINAL ASSESSMENT ----
function initAssessmentPage() {
  const form = document.getElementById('assessment-form');
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const subject = params.get('subject') || 'english';
  const cls = parseInt(params.get('class')) || 3;

  // 20 question assessment
  const questions = Array.from({length: 20}, (_, i) => ({
    type: i % 4 === 3 ? 'fill' : 'mcq',
    q: `Assessment Question ${i + 1}: Which statement is correct about ${COURSES[subject]?.label} Class ${cls}?`,
    options: ['Option A — Correct answer', 'Option B — Incorrect', 'Option C — Incorrect', 'Option D — Incorrect'],
    correct: 0,
    answer: 'correct'
  }));

  const container = document.getElementById('assessment-questions');
  if (container) {
    container.innerHTML = questions.map((q, i) => {
      if (q.type === 'mcq') {
        return `<div class="question-block" data-index="${i}">
          <div class="question-text">Q${i+1}. ${q.q}</div>
          <div class="options-list">
            ${q.options.map((opt, oi) => `
              <label class="option-item">
                <input type="radio" name="aq${i}" value="${oi}"/>
                ${opt}
              </label>`).join('')}
          </div>
        </div>`;
      } else {
        return `<div class="question-block" data-index="${i}">
          <div class="question-text">Q${i+1}. ${q.q}</div>
          <div class="fill-blank">
            <input type="text" placeholder="Your answer..." data-afill="${i}" autocomplete="off"/>
          </div>
        </div>`;
      }
    }).join('');
  }

  const submitAssessBtn = document.getElementById('submit-assessment');
  if (submitAssessBtn) {
    submitAssessBtn.addEventListener('click', () => {
      let score = 0;
      questions.forEach((q, i) => {
        if (q.type === 'mcq') {
          const sel = document.querySelector(`input[name="aq${i}"]:checked`);
          if (sel && parseInt(sel.value) === q.correct) score++;
        } else {
          const inp = document.querySelector(`input[data-afill="${i}"]`);
          if (inp && inp.value.trim().toLowerCase() === q.answer) score++;
        }
      });
      const pct = Math.round((score / 20) * 100);
      const resultDiv = document.getElementById('assessment-result');
      if (resultDiv) {
        resultDiv.style.display = 'block';
        if (pct >= 75) {
          resultDiv.className = 'quiz-result pass';
          resultDiv.innerHTML = `🎓 Congratulations! You scored <strong>${score}/20 (${pct}%)</strong> — Course Passed!<br/><a href="certificate.html?subject=${subject}&class=${cls}&score=${pct}" style="display:inline-block;margin-top:12px;background:var(--primary);color:#fff;padding:10px 22px;border-radius:8px;font-weight:700;">🏆 Get Your Certificate</a>`;
          submitAssessBtn.disabled = true;
        } else {
          resultDiv.className = 'quiz-result fail';
          resultDiv.textContent = `You scored ${score}/20 (${pct}%). You need 75% to pass. Review the modules and try again.`;
        }
      }
    });
  }
}

// ---- CERTIFICATE ----
function initCertificatePage() {
  const cert = document.getElementById('certificate');
  if (!cert) return;

  const params = new URLSearchParams(window.location.search);
  const subject = params.get('subject') || 'english';
  const cls = parseInt(params.get('class')) || 3;
  const score = params.get('score') || '80';

  const student = getStudent();
  const studentName = student?.name || 'Student Name';
  const courseTitle = COURSES[subject]?.classes[cls]?.title || 'Course Title';
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  document.getElementById('cert-student-name').textContent = studentName;
  document.getElementById('cert-course-title').textContent = courseTitle;
  document.getElementById('cert-date').textContent = dateStr;
  document.getElementById('cert-score').textContent = `Score: ${score}%`;

  // Download
  const dlBtn = document.getElementById('download-cert');
  if (dlBtn) {
    dlBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

// ---- SIGN UP ----
function initSignup() {
  const form = document.getElementById('signup-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-auth');
    btn.textContent = 'Creating account...';
    btn.disabled = true;

    const name = form.querySelector('[name="fullname"]').value;
    const email = form.querySelector('[name="email"]').value;
    const cls = form.querySelector('[name="class"]').value;

    // Generate credentials
    const username = name.toLowerCase().replace(/\s+/g, '.') + Math.floor(Math.random() * 100);
    const password = 'BMA@' + Math.random().toString(36).slice(2, 7).toUpperCase();

    // Send via Formspree
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name, email, class: cls, username, password,
          subject: `Welcome to BrightMind Academy — Your Login Credentials`,
          message: `Hi ${name},\n\nYour account has been created!\n\nUsername: ${username}\nPassword: ${password}\n\nLogin at: brightmindacademy.com/signin\n\nHappy Learning!\nBrightMind Academy Team`
        })
      });

      // Save locally
      setStudent({ name, email, cls, username, password });
      document.getElementById('success-msg').style.display = 'block';
      form.style.display = 'none';
    } catch (err) {
      // Even if formspree fails, save locally for demo
      setStudent({ name, email, cls, username, password });
      document.getElementById('success-msg').style.display = 'block';
      document.getElementById('success-creds').textContent = `Username: ${username} | Password: ${password}`;
      form.style.display = 'none';
    }
  });
}

// ---- SIGN IN ----
function initSignin() {
  const form = document.getElementById('signin-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.querySelector('[name="username"]').value;
    const password = form.querySelector('[name="password"]').value;
    const student = getStudent();

    if (student && (student.username === username || student.email === username) && student.password === password) {
      window.location.href = 'courses.html';
    } else {
      const err = document.getElementById('login-error');
      if (err) { err.style.display = 'block'; err.textContent = 'Invalid username or password.'; }
    }
  });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  initCoursesPage();
  initCourseDetailPage();
  initLessonPage();
  initAssessmentPage();
  initCertificatePage();
  initSignup();
  initSignin();
});
