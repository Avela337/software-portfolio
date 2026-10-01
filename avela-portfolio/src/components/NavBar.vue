<template>
  <nav class="navbar" :class="{ scrolled }">
    <div class="container nav-inner">
      <!-- Brand -->
      <router-link to="/" class="brand">
        
        
      </router-link>

      <!-- Desktop links -->
      <ul class="nav-links">
        <li v-for="link in links" :key="link.to">
          <router-link
            :to="link.to"
            class="nav-link"
            :class="{ active: $route.path === link.to }"
          >{{ link.label }}</router-link>
        </li>
      </ul>

      <!-- Mobile hamburger -->
      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <transition name="slide">
      <div v-if="menuOpen" class="mobile-menu">
        <ul>
          <li v-for="link in links" :key="link.to">
            <router-link
              :to="link.to"
              class="mobile-link"
              :class="{ active: $route.path === link.to }"
              @click="menuOpen = false"
            >{{ link.label }}</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills',   label: 'Skills' },
  { to: '/contact',  label: 'Contact' },
]

const scrolled  = ref(false)
const menuOpen  = ref(false)

function handleScroll() { scrolled.value = window.scrollY > 20 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.navbar.scrolled {
  border-bottom-color: var(--border-light);
  box-shadow: 0 1px 16px rgba(0,0,0,0.06);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-h);
}

/* Brand */
.brand {
  display: flex;
  align-items: center;
  gap: 9px;
  font-family: var(--mono);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  transition: opacity 0.2s;
}
.brand:hover { opacity: 0.75; }
.brand-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent-glow);
}
.cursor {
  color: var(--accent);
  animation: blink 1.1s step-end infinite;
}
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

/* Desktop nav */
.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}
.nav-link {
  padding: 7px 16px;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: all var(--transition);
}
.nav-link:hover { color: var(--text); background: var(--bg-soft); }
.nav-link.active {
  background: var(--accent-bg);
  color: var(--accent-dark);
  font-weight: 600;
  border: 1px solid var(--border);
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
}
.hamburger span {
  display: block;
  width: 22px; height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.25s;
}
.hamburger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger span.open:nth-child(2) { opacity: 0; }
.hamburger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  border-top: 1px solid var(--border-light);
  padding: 12px 0 20px;
  background: rgba(255,255,255,0.97);
}
.mobile-link {
  display: block;
  padding: 12px 24px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: all 0.18s;
}
.mobile-link:hover, .mobile-link.active { color: var(--accent); background: var(--accent-bg); }

.slide-enter-active, .slide-leave-active { transition: all 0.25s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-10px); }

@media (max-width: 700px) {
  .nav-links  { display: none; }
  .hamburger  { display: flex; }
}
</style>