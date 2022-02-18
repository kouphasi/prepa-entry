<template>
  <h1>管理者ログイン</h1>
  <div>id</div>
  <div>
    <input type="text" v-model="id" />
  </div>
  <div>password</div>
  <div><input type="text" v-model="pwd" /></div>

  <button v-on:click="log" v-bind:disabled="notCorrect">ログイン</button>
  <!-- <div>{{ notCorrect }}</div> -->
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
      this.$router.push("/cp");
    },
  },
  computed: {
    notCorrect: function () {
      let flag = true;
      if (this.id === "disCheef" && this.pwd === "diSophia344") {
        flag = false;
      } else {
        flag = true;
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
