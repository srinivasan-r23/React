import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
        //redux tookit uses immer BTS to mutate the state. check the immer docs.
        //state = item.push() // this wont work. assigning will not work

      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //originalState = ['pizza']
    clearCart: (state) => { //here state is the local variable, thats why we need to mutate it directly, instead of assigning to it
        //console.log(state) //since the local state is pointing to originalState, our CL will be ['pizza']
        //console.log(current(state)) //current will give the current state, the above one will give some object wont be useful.
        //state = [] // if we do, then it will be assigned only to local var, not the originalstate, hence the originalstate will remain the same
        //console.log(state) // [], but the original state of the redux will not change
        
        state.items.length = 0;
        //either mutate the state like above or return a new state; 
        //return {items: []} //like so
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
