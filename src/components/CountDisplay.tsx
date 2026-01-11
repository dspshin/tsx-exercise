export default function CountDisplay({ count }: { count: number }) {
    const isEven = count % 2 === 0;
    return (
        <>
            <p>Count is: {count}</p>
            {isEven ?
                <p style={{ color: 'blue' }}>짝수입니다.</p>
                :
                <p style={{ color: 'red' }}>홀수입니다.</p>
            }
        </>
    )
}