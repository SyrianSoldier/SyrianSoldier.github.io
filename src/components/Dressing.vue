<template>
  <div id="app1">
    <template v-for="item in json" :key="item.title + item.imgProto">
      <h2>{{ item.title }}</h2>

      <b>原始图: </b>
      <img
        :src="item.imgProto"
        class="img"
        @click="openPreview(item.imgProto)"
      />

      <div class="flex-container">
        <div v-for="(imgReal, index) in item.imgRealList" :key="imgReal">
          <b v-if="!!imgReal">
            {{
              index === 0
                ? "正面图"
                : index === 1
                ? "侧面图"
                : index === 2
                ? "背面图"
                : ""
            }}:</b
          >
          <img
            class="img"
            v-if="!!imgReal"
            :src="imgReal"
            width="200px"
            height="200px"
            @click="openPreview(imgReal)"
          />
        </div>
      </div>

      <div class="desc">{{ item.desc }}</div>
    </template>
  </div>
</template>

<script>
import img1 from "./imgs/1.jpg";
import img2 from "./imgs/3.jpg";
import img3 from "./imgs/2.jpg";

import img4 from "./imgs/6.jpg";

import img5 from "./imgs/5.jpg";

import img6 from "./imgs/4.jpg";

import img7 from "./imgs/7.jpg";
import img8 from "./imgs/9.jpg";

import img11 from "./imgs/11.jpg";
import img12 from "./imgs/12.jpg";
import img13 from "./imgs/13.jpg";
import img14 from "./imgs/14.jpg";

import img15 from "./imgs/15.jpg";
import img16 from "./imgs/16.jpg";
import img17 from "./imgs/17.jpg";
import img24 from "./imgs/24.jpg";

import img18 from "./imgs/18.jpg";
import img19 from "./imgs/19.jpg";
import img20 from "./imgs/20.jpg";
import img26 from "./imgs/26.jpg";

import img21 from "./imgs/21.jpg";
import img22 from "./imgs/22.jpg";
import img23 from "./imgs/23.jpg";
import img25 from "./imgs/25.jpg";

export default {
  name: "App",

  data() {
    return {
      previewImage: null,
      json: [
        {
          title: "长筒靴穿搭",
          imgProto: img1,
          //0 : 正面, 1: 侧面, 2: 背面
          imgRealList: [img2, "", img3],
          desc: "123123",
        },

        {
          title: "长筒靴穿搭-改善",
          imgProto: img1,
          //0 : 正面, 1: 侧面, 2: 背面
          imgRealList: [img4, img5, img6],
          desc: "123123",
        },

        {
          title: "长筒靴穿搭-改善",
          imgProto: img1,
          //0 : 正面, 1: 侧面, 2: 背面
          imgRealList: [img7, "", img8],
          desc: "123123",
        },

        {
          title: "毛衣穿搭",
          imgProto: img11,
          //0 : 正面, 1: 侧面, 2: 背面
          imgRealList: [img12, img13, img14],
          desc: `1. 裤子显垮大, 需要找到修饰胯的裤子 2.不修身的外衣显得壮 3. 前舌比较长的鞋需要搭配长裤子盖住 `,
        },

        {
          title: "白色针织长裙穿搭1",
          imgProto: img24,
          //0 : 正面, 1: 侧面, 2: 背面
          imgRealList: [img15, img16, img17],
          desc: `1. 针织长裙有褶皱折痕.偏硬,领子大不好看 2.`,
        },

        {
          title: "白色针织长裙穿搭2",
          imgProto: img26,
          //0 : 正面, 1: 侧面, 2: 背面
          imgRealList: [img18, img19, img20],
          desc: `1. 奶白色内衬需要搭配饱和度高一点的棉袄,版型不对,`,
        },

        {
          title: "白色针织长裙穿搭3",
          imgProto: img25,
          //0 : 正面, 1: 侧面, 2: 背面
          imgRealList: [img21, img22, img23],
          desc: `1. 质感不对,偏硬,原图软,毛茸茸的感觉, 帽子不行`,
        },
      ],
    };
  },

  methods: {
    openPreview(image) {
      this.previewImage = image;
    },
    closePreview() {
      this.previewImage = null;
    },
  },
};
</script>

<style>
#app1 {
  font-family: "Arial", sans-serif;
  margin: 20px;
  color: #333;
  line-height: 1.6;
}

b {
  display: block;
  margin: 10px 0 5px;
  font-weight: 600;
  color: #555;
}

.img {
  width: 200px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  transition: transform 0.2s ease;
}

.img:hover {
  transform: scale(1.05);
}

.flex-container {
  display: flex;
  gap: 20px;
  justify-content: space-around;
  margin: 15px 0;
}

.desc {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* 模态框样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
  transition: transform 0.3s;
}

.modal-content:hover {
  transform: scale(1.02);
}
</style>
