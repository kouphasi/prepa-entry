<template>
  <div>
    <div>参加日</div>
    <input type="date" v-model="resister_day" />
    <div>氏名</div>
    <input type="text" v-model="inputName" />
    <div>大学</div>
    <select name="" id="" v-model="univ">
      <option value="">大学を選択してください</option>
      <option>慶應</option>
      <option>東女</option>
      <option>フェリス</option>
      <option>獨協</option>
      <option>立教</option>
      <option>早稲田</option>
      <option>青学</option>
      <option>明治</option>
      <option>その他</option>
    </select>
    <div>学年</div>
    <input type="number" v-model="inputGrade" />
    <div></div>
    <button v-on:click="resister">参加します！！！</button>

    <div v-for="output in outputs" v-bind:key="output">
      <div>
        <div class="display">
          {{ output.date }} {{ output.university }} {{ output.grade }}年
          {{ output.name }}さんですね！
        </div>
        <!-- <div class="display">{{ output.university }}の</div>
        <div class="display">{{ output.grade }}年</div>
        <div class="display">{{ output.name }}さんですね！</div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { collection, addDoc /*getDocs*/ } from "firebase/firestore";
import { db } from "../firebase.js";
export default {
  data() {
    return {
      resister_day: "",
      inputName: "",
      inputGrade: "",
      univ: "",
      outputs: [],
      output: "",
      resistered: [],
    };
  },
  methods: {
    resister() {
      if (
        this.inputName != "" &&
        this.resister_day != "" &&
        (this.inputGrade != 0 || this.inputGrade != "") &&
        this.univ != ""
      ) {
        const his_info = {
          date: this.resister_day,
          name: this.inputName,
          grade: this.inputGrade,
          university: this.univ,
        };
        this.postResister(his_info);
        this.outputs.push(his_info);
        this.resister_day = "";
        this.inputName = "";
        this.inputGrade = "";
        this.univ = "";
      }
    },
    postResister(info) {
      addDoc(collection(db, "resists"), info);
    },
  },
  computed: {},
  // created: function () {
  //   getDocs(collection(db, "resists")).then((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       this.resistered.push({
  //         id: doc.id,
  //         ...doc.data(),
  //       });
  //     });
  //   });
  // },
};
</script>
<style>
.display {
  display: inline-flex;
  justify-content: center;
}
</style>
