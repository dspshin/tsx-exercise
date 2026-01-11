import { create } from 'zustand' // "zustand"라는 도서관에서 'create'(만들기) 기능을 빌려와요. 이 기능으로 우리만의 데이터 저장소를 만들 거예요.
import { persist } from 'zustand/middleware' // "persist"(지속하다)라는 기능도 빌려와요. 이건 새로고침해도 데이터가 사라지지 않게 도와주는 마법 같은 도구예요.

// 저장소(Store)에 어떤 물건들이 들어갈지 미리 약속(Type)하는 설계도예요.
interface GoalStore {
    goals: string[] // 'goals'는 글자들의 목록(배열)이에요. 우리가 적은 목표들이 여기 담길 거예요.
    addGoal: (goal: string) => void // 'addGoal'은 새로운 목표(글자)를 받아서 목록에 추가하는 기능(함수)이에요.
    removeGoal: (index: number) => void // 'removeGoal'은 몇 번째(index) 목표를 지울지 숫자를 받아서 삭제하는 기능이에요.
    clearGoals: () => void // 'clearGoals'는 모든 목표를 싹 지워버리는 기능이에요.
}

// 자, 이제 진짜로 저장소를 만들어요! 'useGoalStore'라는 이름의 훅(Hook)을 만들어서 어디서든 꺼내 쓸 수 있게 할 거예요.
export const useGoalStore = create<GoalStore>()(
    // persist(저장하기 마법)로 한 번 감싸줄 거예요. 그래야 브라우저가 꺼져도 기억하니까요.
    persist(
        // set: 저장소의 상태를 '바꿔주는' 열쇠 같은 함수예요.
        (set) => ({
            goals: ['React 기초', '컴포넌트 분리', 'State 사용'], // 처음 앱을 켰을 때 기본으로 들어있을 목표들이에요.

            // 목표 추가하기 기능
            addGoal: (goal) => set((state) => ({
                // state: 현재 저장소의 상태
                // [...state.goals, goal]: 기존 목표들(...state.goals) 뒤에 새 목표(goal)를 붙여서 새로운 목록을 만들어요.
                goals: [...state.goals, goal]
            })),

            // 목표 삭제하기 기능
            removeGoal: (index) => set((state) => ({
                // filter: 거름망을 사용해서 내가 지우고 싶은 번호(index)가 아닌 것들만 남겨요.
                goals: state.goals.filter((_, i) => i !== index)
            })),

            // 모두 지우기 기능
            clearGoals: () => set({
                goals: [] // 목표 목록을 빈 상자([])로 바꿔버려요.
            }),
        }),
        {
            name: 'goal-storage', // 브라우저 창고(localStorage)에 저장할 때 붙일 이름표예요. 이 이름으로 데이터를 찾아요.
        },
    ),
)
