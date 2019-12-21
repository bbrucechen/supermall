export default {
  addToCart(state,payload) {
    payload.count = 1;
    state.cartList.push(payload);
  },
  addCount(state,payload) {
    const index = state.cartList.findIndex(value => {
      return value.iid == payload.iid
    })
    state.cartList[index].count += 1;
  },
  ItemChecked(state,iid) {
    const index = state.cartList.findIndex(value => {
      return value.iid == iid
    })
    state.cartList[index].checked = !state.cartList[index].checked
  },
  checkAll(state) {
    state.cartList.forEach(value => {
      value.checked = true;
    })
  },
  cancelAll(state) {
    state.cartList.forEach(value => {
      value.checked = false;
    })
  }
}