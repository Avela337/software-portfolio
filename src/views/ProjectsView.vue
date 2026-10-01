<template>
  <main style="padding-top: var(--nav-h);">
    <section class="projects">
      <div class="container">

        <div class="projects-header">
          <div>
            
            <h2>Featured Projects</h2>
          </div>
          <p class="header-sub">Production-ready applications built with real APIs, authentication, and full stack architecture.</p>
        </div>

        <div class="projects-list">
          <article v-for="project in projects" :key="project.id" class="project-card">

            <div class="card-header">
              <div class="card-meta">
                <span class="project-type">{{ project.type }}</span>
                <span class="project-year">{{ project.year }}</span>
                
              </div>
              
            </div>

            <div class="card-body">
              <h3 class="project-name">{{ project.name }}</h3>
              <p class="project-tagline">{{ project.tagline }}</p>
              <p class="project-desc">{{ project.description }}</p>
              <p v-if="project.teamNote" class="team-note"> {{ project.teamNote }}</p>

              <ul class="features-list">
                <li v-for="f in project.features" :key="f">
                  <span class="feat-dot"></span>{{ f }}
                </li>
              </ul>

              <div class="stack-tags">
                <span v-for="tech in project.stack" :key="tech" class="tag">{{ tech }}</span>
              </div>
            </div>

            <div class="card-links">
              <a :href="project.github" target="_blank" class="btn btn-outline link-btn">
                GitHub (Frontend)
              </a>
              <a v-if="project.githubApi" :href="project.githubApi" target="_blank" class="btn btn-outline link-btn">
                GitHub (API)
              </a>
              <a v-if="project.live" :href="project.live" target="_blank" class="btn btn-primary link-btn">
                Live Demo 
              </a>
            </div>

          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { projects } from '../data/projects.js'
</script>

<style scoped>
.projects { padding: 72px 0 96px; }
.projects-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; margin-bottom: 56px; flex-wrap: wrap; }
.projects-header h2 { margin-top: 8px; }
.header-sub { max-width: 320px; font-size: 0.92rem; text-align: right; }
.projects-list { display: flex; flex-direction: column; gap: 40px; }
.project-card { border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 36px; background: var(--bg); transition: box-shadow 0.25s, transform 0.25s; }
.project-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); }
.card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
.card-meta { display: flex; align-items: center; gap: 10px; }
.project-type { font-family: var(--mono); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.08em; color: var(--accent-dark); background: var(--accent-bg); border: 1px solid var(--border); border-radius: 99px; padding: 3px 10px; }
.project-year { font-family: var(--mono); font-size: 0.75rem; color: var(--text-faint); }
.team-badge { font-family: var(--mono); font-size: 0.68rem; background: #fff8e6; border: 1px solid #f0d88a; color: #8a6a00; border-radius: 99px; padding: 3px 10px; }
.status-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent-glow); }
.project-name { font-size: 1.5rem; margin-bottom: 4px; }
.project-tagline { font-size: 0.88rem; color: var(--accent-dark); font-weight: 600; margin-bottom: 14px; }
.project-desc { font-size: 0.93rem; margin-bottom: 18px; line-height: 1.7; }
.team-note { font-size: 0.82rem; color: var(--text-muted); background: var(--bg-card); border: 1px solid var(--border-light); border-radius: 8px; padding: 10px 14px; margin-bottom: 18px; }
.features-list { display: flex; flex-direction: column; gap: 7px; margin-bottom: 22px; }
.features-list li { display: flex; align-items: center; gap: 10px; font-size: 0.87rem; color: var(--text-muted); }
.feat-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
.stack-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tag { font-family: var(--mono); font-size: 0.72rem; font-weight: 500; background: var(--bg-card); border: 1px solid var(--border-light); border-radius: 6px; padding: 4px 10px; color: var(--text-muted); }
.card-links { display: flex; gap: 12px; flex-wrap: wrap; border-top: 1px solid var(--border-light); padding-top: 24px; margin-top: 24px; }
.link-btn { font-size: 0.85rem; padding: 9px 18px; }
@media (max-width: 600px) { .project-card { padding: 22px; } .projects-header { flex-direction: column; } .header-sub { text-align: left; } }
</style>