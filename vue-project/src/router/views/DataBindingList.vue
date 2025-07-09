<template>
  <h3>List 랜더링</h3>
  <!-- v-if 조건문 -->
  <div v-if="productList.length == 0">
    <span>** No Data **</span>
  </div>
  <div v-else>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <!-- index값을 v-for에 (product, i)의 i에 바인딩-->
        <tr v-bind:key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          product_name: "기계식키보드",
          price: 25000,
          category: "컴퓨터/주변기기",
          delivery_price: 3000,
        },
        {
          product_name: "마우스",
          price: 12000,
          category: "컴퓨터/주변기기",
          delivery_price: 3000,
        },
        {
          product_name: "노트북",
          price: 300000,
          category: "컴퓨터/노트북",
          delivery_price: 3000,
        },
      ],
    };
  }, // end of data()
  // hook
  mounted() {
    this.productList = [];
  },
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
