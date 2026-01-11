import { useState } from "react";
import { useGoalStore } from "../store/useGoalStore"; // 우리가 만든 보물창고(Store)를 가져와요.

export default function GoalList() {
    // 창고에서 필요한 도구들을 꺼내와요.
    // goals: 목표 목록 데이터
    // addGoal, removeGoal, clearGoals: 데이터를 수정하는 함수들
    const { goals, addGoal, removeGoal, clearGoals } = useGoalStore();

    // 이 'inputVal'은 이 컴포넌트(입력창) 안에서만 쓸 거라 useState(내 주머니)에 둬요.
    const [inputVal, setInputVal] = useState<string>('input here');

    return (
        <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <ul>
                {goals.map((goal, index) => {
                    return <li key={index}>
                        {goal}
                        <button onClick={(e) => {
                            removeGoal(index);
                        }}>Delete</button>
                    </li>

                })}
            </ul>

            <input type="text" value={inputVal} onChange={(e) => {
                setInputVal(e.target.value)
            }} />
            <button onClick={(e) => {
                addGoal(inputVal);
                setInputVal('');
            }}>Push</button>
            <button onClick={(e) => {
                clearGoals();
            }}>Delete all items</button>
        </div>
    )
}