<template>
  <f7-page>
    <f7-navbar sliding title="Home"></f7-navbar>
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
      <f7-button raised fill @click="buy" >QR</f7-button>
    </f7-block>
  </f7-page>
</template>
<script>

export default {
  name: 'Home',
  data() {
    return {
     
      title: 'Hello World',
      product1: 'sku_add_mult',
      product3: 'sku_as_gt',
      product2: 'sku_as_basic ',
    };
  },
  methods:{
    buy(){
      console.log('buy')
      inAppPurchase
  .buy('sku_add_mult')
  .then(function (data) {
    console.log('inside buy')
    console.log(data);
    alert(JSON.stringify(products));
    /*
      {
        transactionId: ...
        receipt: ...
        signature: ...
      }
    */
  })
  .catch(function (err) {
    console.log(err);
  });
    }

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
