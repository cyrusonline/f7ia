<template>
  <f7-page>
    <f7-navbar sliding title="Home"></f7-navbar>
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
      <f7-button raised fill @click="buy(sku_add_mult)" >QR</f7-button>
      <f7-list>
      <f7-list-button v-for="product in products" :title="product.name"  @click="buy(product.id)"></f7-list-button>
     
    </f7-list>
    </f7-block>
  </f7-page>
</template>
<script>

export default {
  name: 'Home',
  data() {
    return {
     
      title: 'Hello World',
      products:[
        
        {name: 'add multiple',
        id: 'sku_add_mult'},

        {name: 'as gs',
        id: 'sku_as_gt'},

        {name: 'as basic',
        id: 'sku_as_basic'},
          
      ],
      products_created:['sku_add_mult','sku_as_gt','sku_as_basic'],
      product1: 'sku_add_mult',
      product3: 'sku_as_gt',
      product2: 'sku_as_basic ',
    };
  },
  methods:{
    buy(product){
      console.log('buy')
      inAppPurchase
      .buy(product)
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
    },
    enableItems(id){

    }

  },
  created(){

inAppPurchase
  .getProducts(this.products_created)
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
