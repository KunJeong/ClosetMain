/**
 * @flow
 */

const LEFT_STACK = 'LEFT_STACK';
const RIGHT_STACK = 'RIGHT_STACK';
// const NORMAL_LAYOUT = 'NORMAL_LAYOUT';
// const SWITCH_LAYOUT = 'SWITCH_LAYOUT';

export function addToLeft(value: number, index: number, status){
  return {
    type: LEFT_STACK,
    value,
    index,
    status
  }
}

export function addToRight(value: number, index: number, status) {
  return {
    type: RIGHT_STACK,
    value,
    index,
    status
  }
}

// export function normalLayout() {
//   return {
//     type: NORMAL_LAYOUT
//   }
// }

// export function switchLayout() {
//   return {
//     type: SWITCH_LAYOUT
//   }
// }

type State = {
	leftMinusRight: number,
  cache: number,
  index: number,
  layout: Array<number>
}
const initialState = {
  leftMinusRight : 0,
  cache: 0,
  index: 0,
	layout: []
};

export default function reducer(state:State = initialState, action: Object){
  switch (action.type){
  case LEFT_STACK:
    if(action.index != state.index) return state;
    if(action.status){
      return Object.assign(
        {},
        state,
        {
          leftMinusRight: state.leftMinusRight + action.value,
          cache: action.value,
          index: state.index + 1,
          layout: [...state.layout, state.leftMinusRight + action.value]
        }
      );
    }
    else{
      return Object.assign(
        {},
        state,
        {
          leftMinusRight: state.leftMinusRight + action.value,
          cache: action.value,
          index: state.index + 1
        }
      );
    }
    
  case RIGHT_STACK:
    if(action.index != state.index) return state;
    if(action.status){
      return Object.assign(
        {},
        state,
        {
          leftMinusRight: state.leftMinusRight - action.value,
          cache: action.value,
          index: state.index + 1,
        }
      );
    }
    else{
      return Object.assign(
        {},
        state,
        {
          leftMinusRight: state.leftMinusRight - action.value,
          cache: action.value,
          index: state.index + 1,
          layout: [...state.layout, state.leftMinusRight - action.value]
        }
      );
    }
  default:
    return state;
  }
}