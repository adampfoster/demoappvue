<template>
  <v-app>
    <Toolbar/>
    <v-content>
      <Splash/>
    </v-content>
  </v-app>
</template>

<script>
import Splash from './components/Splash';
import Toolbar from './components/Toolbar';

export default {
  name: 'App',
  components: {
    Splash,
    Toolbar,
  },
  data() {
    return {
      //
    };
  },
};
</script>
