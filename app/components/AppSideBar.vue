<template>
  <section class="flex flex-col items-center gap-16 pt-16">
    <!-- Hero -->
    <div class="flex flex-col gap-5">
      <img src="/images/hero.png" alt="omidreza shahbazi">
      <span class="text-center">
        <h2 class="text-h5 font-bold">امیدرضا شهبازی</h2>
        <h3 class="text-p">توسعه دهنده وب</h3>
      </span>
    </div>
    <!-- Menu -->
    <nav class="menu">
      <ul class="gap-14 grid">
        <li><NuxtLink to="/" class="text-h6 font-bold">خانه</NuxtLink></li>
        <li><NuxtLink to="/projects" class="text-h6 font-bold">نمونه کارها</NuxtLink></li>
        <li><NuxtLink to="/about" class="text-h6 font-bold">درباره من</NuxtLink></li>
        <li><NuxtLink to="/contacts" class="text-h6 font-bold">راه های ارتباطی</NuxtLink></li>
      </ul>
    </nav>
  </section>
</template>
