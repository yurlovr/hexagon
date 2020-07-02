<template>
  <div id="app">
    <router-view></router-view>
    <Spinner :isLoading="getIsLoading"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Spinner from './components/Spinner'
export default {
  name: 'App',
  components: {
    Spinner
  },
  computed: {
    ...mapGetters('ui', [
      'getIsLoading'
    ])
  }
}
</script>
