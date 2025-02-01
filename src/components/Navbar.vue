<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-3xl">daisyUI</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><RouterLink :to="{ name: 'home' }">Home</RouterLink></li>
        <li><RouterLink :to="{ name: 'about' }">About</RouterLink></li>
        <li><RouterLink :to="{ name: 'login' }">Login</RouterLink></li>
      </ul>
    </div>
  </div>
</template>
