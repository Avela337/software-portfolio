<template>
  <main style="padding-top: var(--nav-h);">
    <section class="skills">
      <div class="container">

        
        <h2 style="margin-top: 8px; margin-bottom: 48px;">Skills &amp; Technologies</h2>

        <div class="skills-grid">
          <div v-for="group in skillGroups" :key="group.title" class="skill-card">
            <h3 class="group-title">{{ group.title }}</h3>
            <ul class="skill-list">
              <li v-for="skill in group.skills" :key="skill">
                <span class="skill-dot"></span>{{ skill }}
              </li>
            </ul>
            <div class="proficiency-bar">
              <span class="prof-label">PROFICIENCY</span>
              <div class="bar-track">
                <div class="bar-fill" :style="{ width: group.proficiency + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="recognition">
          
          <div class="rec-items">
            <div class="rec-item">
              <span class="rec-title">Full-Stack Web Development</span>
              <span class="rec-sub">HTML, CSS, JS, PHP, Vue 3, Node.js</span>
            </div>
            <div class="rec-item">
              <span class="rec-title">Deployed Production Apps</span>
              <span class="rec-sub">Vercel · Railway · Netlify · 2026</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
const skillGroups = [
  {
    title: 'Frontend',
    proficiency: 85,
    skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'Vue 3 & Vite','Vue Router', 'Bootstrap'],
  },
  {
    title: 'Backend',
    proficiency: 78,
    skills: ['Node.js & Express', 'PHP', 'RESTful API Design', 'JWT Authentication', 'MySQL'],
  },
  {
    title: 'Tools & DevOps',
    proficiency: 70,
    skills: ['Git & GitHub', 'Vercel', 'Railway', 'Netlify', 'Postman', 'VS Code'],
  },
]
</script>

<style scoped>
.skills { padding: 72px 0 96px; }
.skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 48px; }
.skill-card { background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 28px; display: flex; flex-direction: column; }
.group-title { font-size: 1rem; font-weight: 700; margin-bottom: 18px; }
.skill-list { display: flex; flex-direction: column; gap: 9px; margin-bottom: 28px; flex: 1; }
.skill-list li { display: flex; align-items: center; gap: 10px; font-size: 0.88rem; color: var(--text-muted); font-family: var(--mono); }
.skill-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
.proficiency-bar { margin-top: auto; }
.prof-label { display: block; font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.1em; color: var(--text-faint); margin-bottom: 8px; }
.bar-track { width: 100%; height: 5px; background: var(--border); border-radius: 99px; overflow: hidden; }
.bar-fill { height: 100%; background: linear-gradient(90deg, var(--accent-dark), var(--accent)); border-radius: 99px; transition: width 1s ease; }
.recognition { background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 28px 36px; display: flex; align-items: center; gap: 40px; flex-wrap: wrap; }
.rec-label { font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.12em; color: var(--accent); font-weight: 600; min-width: 160px; }
.rec-items { display: flex; gap: 40px; flex-wrap: wrap; }
.rec-item { display: flex; flex-direction: column; gap: 3px; }
.rec-title { font-size: 0.92rem; font-weight: 700; color: var(--text); }
.rec-sub { font-size: 0.78rem; color: var(--text-muted); }
@media (max-width: 860px) { .skills-grid { grid-template-columns: 1fr; } }
@media (max-width: 600px) { .recognition { flex-direction: column; padding: 22px; } .rec-items { flex-direction: column; gap: 18px; } }
</style>