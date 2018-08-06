<template>
  <f7-page>
    <f7-navbar sliding title="Home"></f7-navbar>
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Distinctio est aliquam officiis quaerat placeat, cum explicabo magni
      soluta totam maxime autem minima accusamus eos suscipit dignissimos
      corporis modi voluptatum fugiat!
    </f7-block>
  </f7-page>
</template>
<script>

export default {
  name: 'Home',
  data() {
    return {
      inAppPurchase:any,
      title: 'Hello World',
      product1: 'sku_add_mult',
      product3: 'sku_as_gt',
      product2: 'sku_as_basic ',
    };
  },
  methods:{

  },
  created(){

inAppPurchase
  .getProducts(['sku_add_mult', 'sku_as_gt', ])
  .then(function (products) {
    alert(JSON.stringify(products));
    console.log(products)
    /*
       [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', currency: '...', price: '...', priceAsDecimal: '...' }, ...]
    */
  })
  .catch(function (err) {
    console.log(err);
  });
  }
};
</script>
