<template>
  <v-container class="splash">
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
      </v-flex>
      <v-flex xs12 mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Welcome to {{ config.name }}</h1>
        <p class="subheading font-weight-regular">{{ config.name }} is {{ config.does }}.</p>
      </v-flex>

      <v-flex xs12 mb-4>
        <h3 class="display-0 font-weight-bold mb-3">Version 1.0.0</h3>
        <p class="subheading font-weight-regular">Created by Adam Foster &copy; 2019</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop, Model, Watch } from 'vue-property-decorator';
import Component from 'vue-class-component';
import config from '../config';

@Component
export default class extends Vue {
  private data() {
    return {
      config,
    };
  }
}
</script>

<style lang="scss">
</style>
