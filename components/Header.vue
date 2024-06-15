<template>
<Container>
  <header class="w-full p-4 flex gap-4 justify-between">
    <h1 class="font-black">My App</h1>
    <nav class="flex gap-4">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <NotificationCenter />
    </nav>
  </header>
</Container>
</template>