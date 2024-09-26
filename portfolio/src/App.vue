<template>
  <TopPage />
  <router-view />
</template>

<script>
import TopPage from '@/components/TopPage';

export default {
  name: 'App',
  components: {
    TopPage
  }
}
</script>