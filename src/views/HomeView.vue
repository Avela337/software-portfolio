<template>
  <main class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="container">

        

        <!-- Headline -->
        <h1 class="headline fade-up visible" style="transition-delay:0.15s">
          Turning Complex<br>Problems into<br>
          <span ">Clean Code.</span>
        </h1>

        <!-- Sub -->
        <p class="sub fade-up visible" style="transition-delay:0.25s">
          I'm Avela, a Full Stack Developer from Cape Town building purposeful,
          production ready software from Vue frontends to Express APIs and everything in between.
        </p>

        <!-- CTA -->
        <div class="cta-row fade-up visible" style="transition-delay:0.35s">
          <router-link to="/projects" class="btn btn-primary">View My Work</router-link>
          <router-link to="/contact"  class="btn btn-outline">Get In Touch</router-link>
        </div>

        <!-- Stats -->
        <div class="stats-row fade-up visible" style="transition-delay:0.45s">
          <div class="stat dashed-border">
            <span class="stat-num">2</span>
            <span class="stat-label">SHIPPED PROJECTS</span>
          </div>
          <div class="stat dashed-border">
            <span class="stat-num">5+</span>
            <span class="stat-label">TECHNOLOGIES</span>
          </div>
          <div class="stat dashed-border">
            <span class="stat-num">100%</span>
            <span class="stat-label">COMMITTED</span>
          </div>
        </div>

        <!-- Terminal code block -->
        <div class="terminal fade-up visible" style="transition-delay:0.55s">
          <div class="terminal-bar">
            <span class="t-btn t-red"></span>
            <span class="t-btn t-yellow"></span>
            <span class="t-btn t-green"></span>
            
            <span class="t-enc">UTF-8</span>
          </div>
          <div class="terminal-body">
            <div><span class="t-key">const</span> <span class="t-str">developer</span> <span class="t-punct">= {</span></div>
            <div>&nbsp;&nbsp;<span class="t-key">name</span><span class="t-punct">:</span> <span class="t-item">"Avela Gxotiwe"</span><span class="t-punct">,</span></div>
            <div>&nbsp;&nbsp;<span class="t-key">role</span><span class="t-punct">:</span> <span class="t-item">"Full-Stack Developer"</span><span class="t-punct">,</span></div>
            <div>&nbsp;&nbsp;<span class="t-key">stack</span><span class="t-punct">:</span> <span class="t-arr">[</span><span class="t-item">"Vue 3"</span><span class="t-punct">,</span> <span class="t-item">"Node.js"</span><span class="t-punct">,</span> <span class="t-item">"PHP"</span><span class="t-punct">,</span> <span class="t-item">"MySQL"</span><span class="t-punct">,</span> <span class="t-item">"JavaScript"</span><span class="t-arr">]</span><span class="t-punct">,</span></div>
            <div>&nbsp;&nbsp;<span class="t-key">passion</span><span class="t-punct">:</span> <span class="t-item">"Building clean, purposeful software that solves real problems"</span></div>
            <div><span class="t-punct">};</span></div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<style scoped>
.home { padding-top: var(--nav-h); }
.hero { padding: 72px 0 96px; }

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  color: var(--accent-dark);
  background: var(--accent-bg);
  border: 1px solid var(--border);
  border-radius: 99px;
  padding: 6px 16px;
  margin-bottom: 28px;
}
.pulse {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--accent);
  position: relative;
}
.pulse::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.25;
  animation: pulse 1.6s ease-out infinite;
}
@keyframes pulse { 0%{transform:scale(1);opacity:0.25} 100%{transform:scale(2.2);opacity:0} }

.headline {
  font-size: clamp(2.6rem, 6vw, 4.2rem);
  line-height: 1.1;
  margin-bottom: 22px;
  max-width: 720px;
}
.accent-text { color: var(--accent); }

.sub {
  max-width: 560px;
  font-size: 1.05rem;
  margin-bottom: 36px;
}

.cta-row {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 52px;
}

.stats-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}
.stat {
  padding: 16px 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 140px;
}
.stat-num {
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1;
}
.stat-label {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: var(--text-faint);
}

.terminal { max-width: 680px; }

@media (max-width: 600px) {
  .stats-row { gap: 10px; }
  .stat { min-width: 100px; padding: 14px 18px; }
}
</style>