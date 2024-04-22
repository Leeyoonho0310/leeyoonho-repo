import { useSelector, useDispatch } from 'react-redux';
import { create, done, update } from '../store/module/todo';
import { useEffect, useRef, useState } from 'react';

export default function TodoList() {
  // store에 저장된 상태 전체 다 가져오면 warning 나옴 -> 필요한 것만 지정해서 가져오기
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
  const createTodo = () => {
    dispatch(create({ id: nextID, text: inputRef.current.value }));
    inputRef.current.value = '';
  };

  // 추가기능 구현
  const inputRef = useRef();
  const nextID = useSelector((state) => state.todo.nextID);

  // 수정하기 버튼 클릭 시 수정창 열리는 로직 추가
  const [showUpdateInput, setShowUpdateInput] = useState([]);
  const [updatedText, setUpdatedText] = useState('');
  const updateRef = useRef();

  useEffect(() => {
    // fill 메서드 : fill(val, startIdx, endEdx) -> 배열의 요소를 startIdx 인덱스 요소부터 endEdx 인덱스 요소까지 val로 바꿈
    // mdn 참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
    // Array(todoList.length) -> todoList 배열의 길이만큼 요소를 가진 배열 생성 -> 요소 값 X
    // .fill(true) -> 배열의 요소를 모두 true로 바꿈
    setShowUpdateInput(Array(todoList.length).fill(true));
  }, [todoList.length]);

  // 수정 버튼 클릭 시 showUpdateInput 배열의 해당 요소만 input창 생성하는 함수
  const openUpdateWindow = (index, text) => {
    // const newArr=showUpdateInput; // 이건 state update라고 여겨지지 않음
    // const newArr = [...showUpdateInput]; // 모두 열기 하고 싶을 때
    const newArr2 = Array(todoList.length).fill(true); // 하나만 열기 하고 싶을 때
    newArr2[index] = !showUpdateInput[index]; // newArr2의 index 인덱스 요소만 showUpdateInput 배열의 index 요소 값을 반전한 값으로 저장

    setShowUpdateInput(newArr2);
    setUpdatedText(text);

    if (updateRef.current !== null && !showUpdateInput[index]) {
      updateRef.current.focus(); //input에 focus
    }
  };

  // 수정한 값으로 업데이트하는 함수
  const updateTodo = (id, text) => {
    dispatch(update(id, text));
    // console.log(text);
    setShowUpdateInput(Array(todoList.length).fill(true));
  };

  return (
    <section className='TodoList'>
      <h3>할 일 목록</h3>
      <div className='todoInput'>
        <input
          type='text'
          placeholder='Todo'
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') createTodo();
          }}
        />
        <button onClick={createTodo} className='btn--create'>
          +
        </button>
      </div>
      <ul>
        {todoList.map((li, listIndex) => (
          <li key={li.id}>
            {!showUpdateInput[listIndex] ? (
              <>
                <input
                  type='text'
                  defaultValue={li.text}
                  onChange={(e) => setUpdatedText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') updateTodo(li.id, updatedText);
                  }}
                  ref={updateRef}
                />
                <button
                  onClick={() => updateTodo(li.id, updatedText)}
                  className='btn--updateDone'
                >
                  수정완료
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => dispatch(done(li.id))}
                  className='btn--done'
                >
                  ✓
                </button>
                <span>{li.text}</span>
              </>
            )}
            <button
              onClick={() => openUpdateWindow(listIndex, li.text)}
              className={`btn--update ${
                showUpdateInput[listIndex]
                  ? 'btn--updateOpen'
                  : 'btn--updateClose'
              }`}
            >
              수정
              {showUpdateInput[listIndex] ? '하기' : '창닫기'}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
