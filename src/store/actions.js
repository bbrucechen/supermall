// export default {
//   addCart(context,payload) {
//     let oldProduct = null;
//     oldProduct = context.state.cartList.filter(value => {
//       return value.iid == payload.iid
//     })
//     if(oldProduct.length != 0) {
//       console.log('addcount')
//       context.commit('addCount',payload)
//     } else {
//       context.commit('addToCart',payload);
//     }
//   }
// }

export default {
  addCart(context,payload) {
    return new Promise((res,rej) => {
      let oldProduct = null;
      oldProduct = context.state.cartList.filter(value => {
        return value.iid == payload.iid
      })
      if(oldProduct.length != 0) {
        context.commit('addCount',payload)
        res('商品数量+1')
      } else {
        context.commit('addToCart',payload);
        res('商品添加成功')
      }
    })
  }
}