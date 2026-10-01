<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span class="copy">© {{ year }} Avela Gxotiwe</span>
      <a href="#" class="back-top" @click.prevent="scrollTop">BACK TO TOP ^</a>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
function scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
</script>

<style scoped>
.footer { border-top: 1px solid var(--border-light); padding: 22px 0; }
.footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
.copy { font-size: 0.82rem; color: var(--text-faint); font-family: var(--mono); }
.back-top { font-family: var(--mono); font-size: 0.78rem; font-weight: 600; color: var(--accent); letter-spacing: 0.05em; }
.back-top:hover { opacity: 0.7; }
</style>