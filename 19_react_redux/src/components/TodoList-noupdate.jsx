import { useSelector, useDispatch } from 'react-redux';
import { create, done } from '../store/module/todo';
import { useRef } from 'react';

// 수정 기능 추가 X
export default function TodoList() {
  // store에 저장된 전역 상태 전체 다 가져오면 warning 나옴 -> 필요한 것만 지정해서 가져오기
  // const state = useSelector((state) => state);
  // console.log(state);

  // 전체 목록
  const list = useSelector((state) => state.todo.list);
  console.log(list);

  // 할 일 목록: done이 false인 todo
  const todoList = list.filter((todo) => todo.done === false);
  console.log(todoList);

  // 할 일 목록 가져오고 done이 false인지 필터링까지 한 번에
  // const todoList = useSelector((state) => state.todo.list).filter((el) => el.done === false);

  // setter, dispatch 불러오기
  const dispatch = useDispatch();
  const inputRef = useRef();
  const nextID = useSelector((state) => state.todo.nextID);

  const createTodo = () => {
    dispatch(create({ id: nextID, text: inputRef.current.value }));
    inputRef.current.value = '';
  };

  return (
    <section className='TodoList'>
      <h3>할 일 목록</h3>
      <div>
        <input type='text' placeholder='Todo' ref={inputRef} />
        <button onClick={createTodo}>할 일 추가</button>
      </div>
      <ul>
        {todoList.map((li) => (
          <li key={li.id}>
            <span>{li.text}</span>
            <button onClick={() => dispatch(done(li.id))}>완료</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
