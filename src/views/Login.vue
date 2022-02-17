<template>
  <h1>管理者ログイン</h1>
  <div>
    <input type="text" v-model="id" />
  </div>
  <div><input type="text" v-model="pwd" /></div>
  <!-- <div v-bind:disabled="notCorrect">
    <router-link to="/cp" v-bind:disabled="notCorrect">ログイン</router-link>
  </div> -->
  <button v-on:click="log">ログイン</button>
  <div>{{ notCorrect }}</div>
  <div>{{ infos[0].id }}</div>
</template>
<script>
import { collection, /*addDoc,*/ getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
export default {
  data() {
    return {
      id: "",
      pwd: "",
      infos: [],
    };
  },
  methods: {
    log() {
      this.notCorrect;
    },
  },
  computed: {
    notCorrect: function () {
      let flag = true;
      let he = { id: this.id, pwd: this.pwd };
      for (let i = 0; i < this.infos.length; i++) {
        if (this.infos[i].id === he.id && this.infos[i].pwd === he.id) {
          flag = false;
          break;
        } else {
          flag = true;
        }
      }
      return flag;
    },
  },
  created: function () {
    getDocs(collection(db, "login")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.infos.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    });
  },
};
</script>
