import React from 'react';
import { useGoalStore } from '../store/useGoalStore'; // 보물창고 열쇠를 가져와요!

interface HeaderProps {
    color: string;
}

export default function Header({ color }: HeaderProps) {
    // 창고(useGoalStore)에서 'goals' 데이터만 딱 골라서 가져와요. (state => state.goals)
    // 이렇게 하면 goals가 바뀔 때만 이 Header가 다시 그려져요.
    const goals = useGoalStore((state) => state.goals);

    return (
        <header style={{ backgroundColor: color, padding: '10px' }}>
            <h1>React + TypeScript Study Playground Header</h1>
            <p>
                Edit <code>src/App.tsx</code> to start your React study.
            </p>
            {/* 가져온 goals의 개수(.length)를 화면에 보여줘요! */}
            <p><strong>Current Goals: {goals.length}</strong></p>
        </header>
    );
}
