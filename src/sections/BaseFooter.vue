<template>
  <footer class="pt-5 pb-3">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <h3>Mahmoud Ahmed</h3>
          <p class="mt-2 mb-0 text-white-50">
            Thanks for visiting my personal portofolio, don't forget to contact me whenever you need any help.
          </p>
        </div>
        <div class="col-lg-4">
          <h3>Quick Links</h3>
          <div class="links">
            <a href="#"><i class="fa-solid fa-angles-right"></i>Home</a>
            <a href="#about" class="mt-1"><i class="fa-solid fa-angles-right"></i>About</a>
            <a href="#skills" class="mt-1"><i class="fa-solid fa-angles-right"></i>Skills</a>
            <a href="#projects" class="mt-1"><i class="fa-solid fa-angles-right"></i>Projects</a>
          </div>
        </div>
        <div class="col-lg-4">
          <h3>Contact Info</h3>
          <div class="info">
            <span class="d-block mb-1"><i class="fa-solid fa-envelope"></i> mahmoudfarghly519@gmail.com</span>
            <span class="d-block mb-1"><i class="fa-solid fa-phone"></i> +201020069196</span>
            <span class="d-block"><i class="fa-solid fa-location-dot"></i> Egypt</span>
          </div>
          <div class="icons mt-2">
            <a href="https://www.facebook.com/mahmoud.farghly.353" target="_blank" class="icon facebook" aria-label="Facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="mailto:mahmoudfarghly519@gmail.com" class="icon gmail" aria-label="Gmail">
              <i class="fa-brands fa-google"></i>
            </a>
            <a href="https://wa.me/+201020069196" target="_blank" class="icon whatsapp" aria-label="WhatsApp">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#" class="icon linkedin" aria-label="Linkedin">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <hr>
      <p class="text-center m-0 footer-p">Made With <i class="fa-solid fa-heart red"></i> By <a href="https://wa.me/01020069196" target="_blank">Mahmoud Ahmed</a> &copy; 2023</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #191919;
  color: #fff;
}
.red {
  color: red;
}
.footer-p a {
  text-decoration: none;
  color: var(--blue-color);
}

.links a {
  display: block;
  text-decoration: none;
  color: #ffffffc6;
  font-size: 17px;
  width: fit-content;
}

.links a i {
  margin-right: 5px;
  transition: .3s;
  color: var(--blue-color);
}

.links a:hover {
  color: #fff;
}

.links a:hover i {
  margin-right: 10px;
}

.info i {
  color: var(--blue-color);
  width: 20px;
}
.icons {
  display: flex;
  gap: 7px;
}
.icons .icon {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 50%;
  color: #fff;
  transition: .3s;
}
.icons .icon:hover {
  transform: scale(1.1);
}
.icon.facebook {
  background-color: #1877f2;
}
.icon.gmail {
  background-color: #ea4335;
}
.icon.whatsapp {
  background-color: #25d366;
}
.icon.linkedin {
  background-color: #0a66c2;
}
</style>