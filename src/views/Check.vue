<template>
  <div>
    <h1>登録表</h1>
    <div>(名前がない場合は再登録してください)</div>
    <div>絞り込み</div>
    <!-- <div>今日は{{ today }}</div> -->
    <input type="date" name="" id="" v-model="day" />
    <div>
      <select name="" id="" v-model="univ">
        <option value="">大学を選択してください</option>
        <option>上智</option>
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
    </div>

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
      univ: "",
    };
  },
  computed: {
    output_table: function () {
      let table = [];
      let table_date = [];
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
        table_date = from_today;
      } else {
        for (let i = 0; i < from_today.length; i++) {
          if (this.day === from_today[i].date) {
            table_date.push(from_today[i]);
          }
        }
      }
      if (this.univ === "") {
        table = table_date;
      } else {
        for (let i = 0; i < table_date.length; i++) {
          if (this.univ === table_date[i].university) {
            table.push(table_date[i]);
          }
        }
      }

      return table;
    },
    // today: function () {
    //   const today = new Date();
    //   let month = today.getMonth() + 1;
    //   if (month < 10) {
    //     month = "0" + month;
    //   }
    //   let d = today.getDate();
    //   if (d < 10) {
    //     d = "0" + d;
    //   }
    //   const year = today.getFullYear();
    //   const str = year + "-" + month + "-" + d;
    //   const n = Number(str.split("-").join(""));
    //   return n;
    // },
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
