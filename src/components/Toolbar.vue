<template>
  <v-toolbar app :color="config.brand_primary">
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->

    <img class="logo" :src="config.logo_path" :alt="config.name">
    <v-toolbar-title class="headline text-uppercase">
      <!-- <v-img :src="config.logo_path" class="logo" aspect-ratio="1.7"></v-img> -->
      <!-- <v-btn fab class="logo"></v-btn> -->
      {{ config.name }}
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>-->

    <!-- <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>-->

    <!-- <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>-->

    <v-menu bottom offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <!-- <v-btn v-on="on" dark class="rnd5">
          <strong>Menu</strong>
        </v-btn>-->
      </template>
      <v-list>
        <v-list-tile
          v-for="(item, i) in [{title:'blah',value:0},{title:'blah',value:1},{title:'blah',value:2},{title:'blah',value:3}]"
          :key="i"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

    <!-- <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">
          <v-img
            :src="require('./assets/logo.png')"
            alt="Pocket Payday"
            height="50"
            width="50"
            aspect-ratio="1.7"
          ></v-img>Pocket Payday
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn small>
        <v-icon>fas fa-bars</v-icon>
    </v-btn>-->
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop, Model, Watch } from 'vue-property-decorator';
import Component from 'vue-class-component';
import config from '../config';

@Component
export default class Toolbar extends Vue {
  private data() {
    return {
      config,
    };
  }
}
</script>

<style lang="scss">
.headline.headline {
  margin-left: 2em;
}
.logo {
  position: absolute;
  top: 0;
  left: 0.5em;
  height: 100%;
  padding: 0.5em;
  // background: red url({{config.logo_path}}) no-repeat left top;
  // float:left;
  // margin: 10px;
  // max-width: 60px;
  // height: 60px;
}
</style>
