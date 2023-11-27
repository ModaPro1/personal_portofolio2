<script setup>
import MainTitle from '@/components/MainTitle.vue';
import { reactive, ref } from 'vue';
import emailjs from '@emailjs/browser';

const data = reactive({
  name: {
    val: '',
    error: null
  },
  email: {
    val: '',
    error: null
  },
  message: {
    val: '',
    error: null
  }
})
const formIsValid = ref(true)
const isLoading = ref(false)
const messageSent = ref(false)

function validate() {
  formIsValid.value = true; // Assume the form is valid initially

  if(messageSent.value) {
    return;
  }

  // Name
  if (data.name.val === '') {
    data.name.error = 'Name is required.';
    formIsValid.value = false;
  } else if (data.name.val.length < 2 || data.name.val.length > 25) {
    data.name.error = 'Name must be at least 2-25 characters.';
    formIsValid.value = false;
  } else {
    data.name.error = null;
  }

  // Email
  let emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (data.email.val === '') {
    data.email.error = 'Email is required.';
    formIsValid.value = false;
  } else if (!data.email.val.match(emailFormat)) {
    data.email.error = 'Email must be valid.';
    formIsValid.value = false;
  } else {
    data.email.error = null;
  }

  // Message
  if (data.message.val === '') {
    data.message.error = 'Message is required.';
    formIsValid.value = false;
  } else if (data.message.val.length < 15 || data.message.val.length > 255) {
    data.message.error = 'Message must be 15-255 characters.';
    formIsValid.value = false;
  } else {
    data.message.error = null;
  }
}


function submit() {
  validate()
  if (!formIsValid.value || messageSent.value) {
    return;
  }

  isLoading.value = true
  emailjs.send('service_ptwlrew', 'template_rszccuf', {
    name: data.name.val,
    email: data.email.val,
    message: data.message.val
  }, 'VxCg8rrlk5orwSnbS')
  .then(() => {
    isLoading.value = false
    messageSent.value = true
    data.name.val = ''
    data.email.val = ''
    data.message.val = ''
  }, () => {
    isLoading.value = false
    alert("There was an error please try again later.")
  });
}
</script>

<template>
  <div class="contact pt-4 pb-5" id="contact">
    <div class="container">
      <MainTitle title="Contact Me" icon="fa-solid fa-headset" class="text-white" />
      <form class="form bg-white p-4 rounded d-flex gap-5" @submit.prevent="submit">
        <div class="img">
          <img src="@/assets/contact1.png" alt="Contact Image">
        </div>
        <div class="content mt-4">
          <div class="input-box">
            <label for="name">Name</label>
            <input type="text" id="name" class="form-control" autocomplete="off" v-model.trim="data.name.val"
              :class="{ 'is-invalid': data.name.error }">
            <Transition name="error">
              <div v-if="data.name.error" class="error text-danger">{{ data.name.error }}</div>
            </Transition>
          </div>

          <div class="input-box mt-3">
            <label for="email">Email Address</label>
            <input type="text" id="email" class="form-control" autocomplete="off" v-model.trim="data.email.val"
              :class="{ 'is-invalid': data.email.error }">
            <Transition name="error">
              <div v-if="data.email.error" class="error text-danger">{{ data.email.error }}</div>
            </Transition>
          </div>

          <div class="input-box mt-3">
            <label for="message">Message</label>
            <textarea id="message" class="form-control" rows="5" v-model.trim="data.message.val"
              :class="{ 'is-invalid': data.message.error }"></textarea>
            <Transition name="error">
              <div v-if="data.message.error" class="error text-danger">{{ data.message.error }}</div>
            </Transition>
          </div>

          <button class="mt-4 send" :disabled="isLoading" v-if="!messageSent">
            <i v-if="!isLoading" class="fa-solid fa-paper-plane me-1"></i>
            <span v-else class="spinner-border spinner-border-sm me-1" aria-hidden="true"></span>
            Send
          </button>
          <button class="mt-4 send success" v-else>
            <i class="fa-solid fa-check me-1"></i>
            Sent
          </button>
          <Transition name="success">
            <span v-if="messageSent" class="text-success ms-3">Message Successfully Sent !</span>
          </Transition>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact {
  background: linear-gradient(45deg, var(--blue-color), #0d62a5);
}

.form {
  width: fit-content;
  margin: auto;
  width: 800px;
}
@media (max-width: 991px) {
  .form {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .form {
    flex-direction: column;
  }
}
.img img {
  max-width: 100%;
}

.form .img,
.form .content {
  flex: 1;
}

.input-box {
  position: relative;
}

.error {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
}

.error-enter-from,
.error-leave-to {
  opacity: 0;
}

.error-enter-active,
.error-leave-active {
  transition: .15s;
}


.success-enter-from,
.success-leave-to {
  opacity: 0;
}

.success-enter-active,
.success-leave-active {
  transition: .3s;
}

.form-control:not(.is-invalid):focus {
  box-shadow: 0 0 0 0.15rem rgba(13, 110, 253, .25);
}

.form-control.is-invalid:focus {
  box-shadow: 0 0 0 0.15rem rgba(var(--bs-danger-rgb), .25);
}

.send {
  padding: 10px;
  background-color: var(--blue-color);
  border-radius: 6px;
  color: #fff;
  font-weight: 600;
  transition: .3s;
  border: none;
}
.send.success {
  background-color: var(--bs-success);
}

.send i {
  transition: .3s;
}

.send:not(.success):hover i {
  transform: translate(3px, -3px);
}

.send:disabled {
  opacity: .6;
}
</style>