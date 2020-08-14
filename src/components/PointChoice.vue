<template>
  <div class="item">
    <div class="price">{{ point }}ポイント</div>
    <!-- TODO: v-onで購入処理を追加 -->
    <br />
    <input
      type="button"
      value="購入"
      v-on:click="buyPoint(point, 3)"
      class="buyPointBtn"
    />
  </div>
</template>

<script>
export default {
  name: "PointChoice",
  props: {
    point: Number
  },
  methods: {
    // TODO: ボタンクリック時のイベントを追加
    buyPoint: (point, id) => {
      console.log(`${point}Ptを購入しました`);
      fetch(
        "https://91ss8vtva7.execute-api.ap-northeast-1.amazonaws.com/mytubeapi?id=" +
          id
      )
        .then(response => {
          console.log(response.status);
          if (!response.ok) {
            console.log("error response");
          } else {
            return response.json().then(userInfo => {
              console.log(userInfo);

              let ownPoint = Number.parseInt(userInfo.point);
              let rem = ownPoint + point;
              userInfo.point = rem.toString();

              window.alert(
                `userID: ${id}は${point}Pt購入しました\n現在${userInfo.point}Pt所持しています`
              );

              // TODO: サーバーにポイント情報を送る
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scped>
.price {
  font-size: 30px;
}
.item {
  margin: 50px;
  display: inline-block;
}
</style>
