<template>
  <div class="home">
    <div class="search-box">
      <form action="">
        <input type="url" class="search" placeholder="URL検索">
        <button type="submit" class="submit-button">
          <font-awesome-icon icon="search" class="search-icon"/>
        </button>
      </form>
    </div>

    <div class="youtube-box">
      <div class="video-box">
        <div class="video">

        </div>
        <h1>タイトル</h1>
      </div>

      <div id="coment" class="coment-box">
        <div class="coment">
          <Coment />
        </div>
        <div class="stamp-box">
          <button class="stamp">スタンプ購入</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import StampButton from "@/components/StampButton.vue";
import Coment from "../components/coment.vue";

export default {
  name: "Home",
  components: {
    Coment
  }
};
</script>
