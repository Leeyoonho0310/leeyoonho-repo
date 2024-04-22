const initialState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '포폴이랑 이력서 쓰기',
      done: false,
    },
    {
      id: 2,
      text: '운동하기',
      done: true,
    },
  ],
};

const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';
const UPDATE = 'todo/UPDATE';

// id 중복으로 인해 nextID를 initialState에 추가하는 로직
let counts = initialState.list.length;
// initialState에 nextID 라는 키를 추가하고, 값으로는 initialState.list의 길이를 저장
initialState['nextID'] = counts;

export const create = (payload) => ({
  type: CREATE,
  payload, //object {id, text}
});
export const done = (id) => ({
  type: DONE,
  id, // number
});
export const update = (id, text) => ({
  type: UPDATE,
  id,
  text,
});

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      if (action.payload.text.trim() === '') return state;
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false, // 추가된 할 일은 아직 완료하지 않았기 때문에 done의 값이 false
        }),
        nextID: action.payload.id + 1, // id 중복 문제를 해결하기 위해 추가
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((li) => {
          if (li.id === action.id) {
            return {
              ...li, //기존 요소그대로
              done: true, // done만 false로 덮어쓰기
            };
          } else {
            return li; //action으로 전달된 아이디가 아니라면 원래값 사용하기
          }
        }),
      };
    case UPDATE:
      return {
        ...state,
        list: state.list.map((li) => {
          if (li.id === action.id)
            return {
              ...li,
              text: action.text,
            };
          return li;
        }),
      };
    default:
      return state;
  }
}
