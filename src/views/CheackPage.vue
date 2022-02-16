<template>
  <div>
    <table border="1">
      <tr>
        <th>名前</th>
        <th>年齢</th>
      </tr>
      <tr>
        <td>田中</td>
        <td>27</td>
      </tr>
    </table>
  </div>
  <div>{{ firedocs }}</div>
</template>

<script>
import { collection, /*addDoc,*/ getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
export default {
  data() {
    return {
      firedocs: [], //代入される値の型は[ { "id": "8CcycWJo8GDKB1LXPiEs", "name": "a", "date": "2022-02-15", "university": "慶應", "grade": 2 }, ... ]
    };
  },
  created: function () {
    getDocs(collection(db, "resists")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.firedocs.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    });
  },
};
</script>
