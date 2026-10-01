<template>
  <main style="padding-top: var(--nav-h);">
    <section class="contact">
      <div class="container">
        <div class="contact-grid">

          <div class="contact-info">
            
            <h2 style="margin-top: 8px; margin-bottom: 18px;">Get In Touch</h2>
            <p class="contact-sub">
              Have a project in mind, a role to fill, or just want to connect?
              I'm always open to new opportunities. Drop me a message and I'll get back to you.
            </p>
            <div class="contact-links">
              <div class="contact-row">
                <span class="c-label">EMAIL:</span>
                <a href="mailto:avelagxotiwe@gmail.com" class="c-link">avelagxotiwe@gmail.com</a>
              </div>
              <div class="contact-row">
                <span class="c-label">GITHUB:</span>
                <a href="https://github.com/Avela337" target="_blank" class="c-link">github.com/Avela337</a>
              </div>
              <div class="contact-row">
                <span class="c-label">LINKEDIN:</span>
                <a href="https://www.linkedin.com/in/avela-gxotiwe-674a942b9" target="_blank" class="c-link">avela-gxotiwe</a>
              </div>
            </div>
          </div>

          <div class="contact-form-wrap">
            <form @submit.prevent="handleSubmit" novalidate>

              <div class="form-group">
                <label for="name">NAME</label>
                <input id="name" v-model="form.name" type="text" placeholder="your name" :class="{ error: errors.name }" @input="errors.name = ''" />
                <span v-if="errors.name" class="err-msg">{{ errors.name }}</span>
              </div>

              <div class="form-group">
                <label for="email">EMAIL ADDRESS</label>
                <input id="email" v-model="form.email" type="email" placeholder="email@gmail.com" :class="{ error: errors.email }" @input="errors.email = ''" />
                <span v-if="errors.email" class="err-msg">{{ errors.email }}</span>
              </div>

              <div class="form-group">
                <label for="message">MESSAGE</label>
                <textarea id="message" v-model="form.message" placeholder="Tell me about your project or opportunity..." rows="5" :class="{ error: errors.message }" @input="errors.message = ''"></textarea>
                <span v-if="errors.message" class="err-msg">{{ errors.message }}</span>
              </div>

              <button type="submit" class="btn btn-primary submit-btn" :disabled="sending">
                {{ sending ? 'Sending...' : 'Send Message' }}
              </button>

              <div v-if="successMsg" class="success-msg">✅ {{ successMsg }}</div>
              <div v-if="errorMsg"   class="error-msg-box">⚠️ {{ errorMsg }}</div>

            </form>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const sending    = ref(false)
const successMsg = ref('')
const errorMsg   = ref('')

function validate() {
  let valid = true
  if (!form.name.trim())    { errors.name    = 'Name is required.';        valid = false }
  if (!form.email.trim())   { errors.email   = 'Email is required.';       valid = false }
  else if (!/\S+@\S+\.\S+/.test(form.email)) { errors.email = 'Enter a valid email.'; valid = false }
  if (!form.message.trim()) { errors.message = 'Message cannot be empty.'; valid = false }
  return valid
}

async function handleSubmit() {
  successMsg.value = ''
  errorMsg.value   = ''
  if (!validate()) return
  sending.value = true
  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
      { from_name: form.name, from_email: form.email, message: form.message },
      EMAILJS_PUBLIC_KEY
    )
    successMsg.value = "Message sent! I'll get back to you soon."
    form.name = form.email = form.message = ''
  } catch (err) {
    errorMsg.value = 'Something went wrong. Email me directly at avelagxotiwe@gmail.com'
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
.contact { padding: 72px 0 96px; }
.contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; align-items: start; }
.contact-sub { font-size: 0.95rem; margin-bottom: 36px; }
.contact-links { display: flex; flex-direction: column; gap: 14px; }
.contact-row { display: flex; align-items: center; gap: 14px; }
.c-label { font-family: var(--mono); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.09em; color: var(--accent); min-width: 80px; }
.c-link { font-size: 0.88rem; color: var(--text-muted); transition: color 0.2s; }
.c-link:hover { color: var(--accent); }
.contact-form-wrap { background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 36px; }
form { display: flex; flex-direction: column; gap: 22px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
label { font-family: var(--mono); font-size: 0.68rem; font-weight: 600; letter-spacing: 0.1em; color: var(--text-muted); }
input, textarea { width: 100%; padding: 13px 16px; border: 1.5px solid var(--border); border-radius: var(--radius); background: var(--bg); color: var(--text); font-family: var(--sans); font-size: 0.9rem; outline: none; transition: border-color 0.2s; }
input:focus, textarea:focus { border-color: var(--accent); }
input.error, textarea.error { border-color: #e05252; }
textarea { resize: vertical; min-height: 120px; }
.err-msg { font-size: 0.78rem; color: #e05252; font-family: var(--mono); }
.submit-btn { width: 100%; justify-content: center; padding: 14px; font-size: 0.95rem; }
.submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
.success-msg { background: var(--accent-bg); border: 1px solid var(--border); color: var(--accent-dark); border-radius: var(--radius); padding: 13px 16px; font-size: 0.88rem; }
.error-msg-box { background: #fff5f5; border: 1px solid #ffd0d0; color: #c0392b; border-radius: var(--radius); padding: 13px 16px; font-size: 0.88rem; }
@media (max-width: 820px) { .contact-grid { grid-template-columns: 1fr; gap: 40px; } }
@media (max-width: 500px) { .contact-form-wrap { padding: 22px; } }
</style>