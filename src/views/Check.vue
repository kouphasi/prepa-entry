<template>
  <div>
    <h1>登録表</h1>
    <div>(名前がない場合は再登録してください)</div>
    <div>日付絞り込み</div>
    <div>今日は{{ today }}</div>
    <input type="date" name="" id="" v-model="day" />
    <table border="1" class="sheet">
      <tr>
        <th>日付</th>
        <th>大学</th>
        <th>学年</th>
        <th>名前</th>
      </tr>
      <tr v-for="firedoc in output_table" v-bind:key="firedoc">
        <td>{{ firedoc.date }}</td>
        <td>{{ firedoc.university }}</td>
        <td>{{ firedoc.grade }}</td>
        <td>{{ firedoc.name }}</td>
      </tr>
    </table>
  </div>
  <div>{{ resistered_dates }}</div>
  <!-- <div>{{ firedocs }}</div> -->
</template>

<script>
import { collection, /*addDoc,*/ getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
// import func from "vue-editor-bridge";
export default {
  data() {
    return {
      firedocs: [], //代入される値の型は[ { "id": "8CcycWJo8GDKB1LXPiEs", "name": "a", "date": "2022-02-15", "university": "慶應", "grade": 2 }, ... ]
      day: "",
      // today: 0,
    };
  },
  computed: {
    output_table: function () {
      let table = [];
      let from_today = [];
      const today = new Date();
      let month = today.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      let d = today.getDate();
      if (d < 10) {
        d = "0" + d;
      }
      const year = today.getFullYear();
      const str = year + "-" + month + "-" + d;
      const n = Number(str.split("-").join(""));
      for (let i = 0; i < this.firedocs.length; i++) {
        var x = Number(this.firedocs[i].date.split("-").join(""));
        if (x >= n) {
          from_today.push(this.firedocs[i]);
        }
      }
      if (this.day === "") {
        table = from_today;
      } else {
        for (let i = 0; i < from_today.length; i++) {
          if (this.day === from_today[i].date) {
            table.push(from_today[i]);
          }
        }
      }

      return table;
    },
    today: function () {
      const today = new Date();
      let month = today.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      let d = today.getDate();
      if (d < 10) {
        d = "0" + d;
      }
      const year = today.getFullYear();
      const str = year + "-" + month + "-" + d;
      const n = Number(str.split("-").join(""));
      return n;
    },
  },
  created: function () {
    getDocs(collection(db, "resists"))
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.firedocs.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      })
      .then(() => {
        //非同期処理だから処理の早いこっちの方が優先されてしまうので、.then(function)を使って後に実行されるようにすると並び替えが完了する
        this.firedocs.sort(function (a, b) {
          return (
            Number(a.date.split("-").join("")) -
            Number(b.date.split("-").join(""))
          );
        });
      });
  },
};
</script>
<style>
.sheet {
  margin-top: 2rem;
}
</style>
