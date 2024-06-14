<script lang="ts" setup>
const subscriberId = import.meta.env.VITE_NOVU_SUBSRIBER_ID;
const applicationIdentifier = import.meta.env.VITE_NOVU_APP_ID;
const sessionLoaded = () => {
  console.log('Notification center session loaded successfully!');
};
</script>
<template>
  <p>ID: {{ subscriberId }}</p>
  <NotificationCenterComponent
    v-slot="slot"
    :subscriber-id="subscriberId"
    :application-identifier="applicationIdentifier"
    :session-loaded="sessionLoaded"
  >
    <button>Notifications: {{ slot.unseenCount || 0 }}</button>
  </NotificationCenterComponent>
</template>
