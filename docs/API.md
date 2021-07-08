# API接口设计

## 注册

### URL

### `api/user/register`

 method

`post`

### request body

```js
{
    username:'13853529999',
    password:'153'
}
```

### response body

```js
{
    errno:0,
    message:'when errno!=0,show this message'
}
```

## 登录

### URL

`api/user/login`

### method

`post`

### request body

```js
{
    username:'13853529999',
    password:'153'
}
```

### response body

```js
{
    errno:0,
    message:'when errno!=0,show this message'
}
```

## 获取用户信息

### URL

`api/user/info`

### method

`get`

### request body

none

### response body

```js
{
    errno:0,
    data:{
        username:''
    }
    message:'when errno!=0,show this message'
}
```

## 创建收货地址

### URL

`api/user/address`

### method

`post`

### request body

```js
{
    city:'beijing',
    department:'**小区',
    houseNumber:'门牌号'，
    name:'zhangsa',
    phone:'13533555999'
}
```

### response body

```js
{
    errno:0,
    message:'when errno!=0,show this message'
}
```

## 创建收货地址

### URL

`api/user/address`

### method

`post`

### request body

```js
{
    city:'beijing',
    department:'**小区',
    houseNumber:'门牌号'，
    name:'zhangsa',
    phone:'13533555999'
}
```

### response body

```js
{
    errno:0,
    data:{
        _id:'收货地址id',
        city:'beijing',
        department:'**小区',
        houseNumber:'门牌号'，
        name:'zhangsa',
        phone:'13533555999',
        createdAt:date,
        updatedAt:date

    },
    message:'when errno!=0,show this message'
}
```

## 获取收货地址

### URL

`api/user/address`

### method

`get`

### request body


### response body

```js
{
    errno:0,
    data:[{
        _id:'收货地址id',
        city:'beijing',
        department:'**小区',
        houseNumber:'门牌号'，
        name:'zhangsa',
        phone:'13533555999'
    }    ],
    message:'when errno!=0,show this message'
}
```

## 获取单个收货地址

### URL

`api/user/address/:id`

### method

`get`

### request body


### response body

```js
{
    errno:0,
    data:{
        _id:'收货地址id',
        city:'beijing',
        department:'**小区',
        houseNumber:'门牌号'，
        name:'zhangsa',
        phone:'13533555999'
    }, 
    message:'when errno!=0,show this message'
}
```

## 更新收货地址

### URL

`api/user/address/:id`

### method

`patch`

### request body

```js
{
    city:'beijing',
    department:'**小区',
    houseNumber:'门牌号'，
    name:'zhangsa',
    phone:'13533555999'
}
```

### response body

```js
{
    errno:0, 
    message:'when errno!=0,show this message'
}
```


## 附近店铺（热门店铺）

### URL

`api/shop/hot-list`

### method

`get`

### request body


### response body

```js
{
    errno:0, 
    data:[
        {
            _id:'shopid',
            name:'沃尔玛',
            imgUrl:'img url',
            expressLimit:0,
            expressPrice:5,
            slogan:'VIP'
        }
    ]
    message:'when errno!=0,show this message'
}
```


## 店铺详情

### URL

`api/shop/:id`

### method

`get`

### request body


### response body

```js
{
    errno:0, 
    data:
        {
            _id:'shopid',
            name:'沃尔玛',
            imgUrl:'img url',
            expressLimit:0,
            expressPrice:5,
            slogan:'VIP'
        },   
    message:'when errno!=0,show this message'
}
```

## 查询某个店铺的商品列表

### URL

`api/shop/:id/goods`

### query 

`tab=all`

举例：`api/shop/:id/goods?tab=all`

### method

`get`

### request body

none

### response body

```js
{
    errno:0, 
    data:[
        {
            _id:'goods id',
            name:'番茄',
            imgUrl:'img url',
            sales:19,
            price:33.5,
            oldPrice:66.3
        }],   
    message:'when errno!=0,show this message'
}
```

## 创建订单

### URL

`api/order`

### method

`post`

### request body

```js
{
    addressId:'receive address id',
    shopId:'',
    shopName:'',
    isCanceled:false,
    goods:[{
        id:'goods1 id',
        num:3
    },{
        id:'goods2 id',
        num:5
    },
    ]
}
```

### response body

```js
{
    errno:0, 
    data:{
        _id:'order id'
    }
    message:'when errno!=0,show this message'
}
```

## 获取订单列表

### URL

`api/order`

### method

`get`

### request body

none

### response body

```js
{
    errno:0, 
    data:[{
        _id:'order id'
        addressId:'receive address id',
        shopId:'',
        shopName:'',
        isCanceled:false,
        goods:[{
            id:'goods1 id',
            num:3
        },{
            id:'goods2 id',
            num:5
        },
    ]
    }],
    message:'when errno!=0,show this message'
}
```