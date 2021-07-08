# 数据模型设计

## 用户

```js
{
    _id:'',
    username:'13853529999',
    password:'153'
}
```

## 地址

```js
{
    _id:'',
    username:'13853529999',
    city:'beijing',
    department:'**小区',
    houseNumber:'门牌号',
    name:'zhangsa',
    phone:'13533555999'
}
```

## 商店

```js
{    
    _id:'shopid',
    name:'沃尔玛',
    imgUrl:'img url',
    sales:0,
    expressLimit:0,
    expressPrice:5,
    slogan:'VIP'
}   
```

## 商品

```js
{     
    _id:'goods id',
    shopId:'',  
    tabs:['all','seckill'] 
    name:'番茄',
    imgUrl:'img url',
    sales:19,
    price:33.5,
    oldPrice:66.3
}   
```

## 订单
```js
{  
    username:'',

    _id:'',
    shopId:'',  
    shopName:'沃尔玛',

    isCanceled:false,

    address:{
        username:'13853529999',
        city:'beijing',
        department:'**小区',
        houseNumber:'门牌号',
        name:'zhangsa',
        phone:'13533555999'
    },

    purchases:{
        goods:{
            shopId:'',  
            tabs:['all','seckill','fruit'] ,
            name:'番茄',
            imgUrl:'img url',
            sales:19,
            price:33.5,
            oldPrice:66.3
        },
        orderSales:3
    }
    
}   
```