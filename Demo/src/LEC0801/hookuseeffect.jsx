import * as React from 'react';

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = React.useState(300); // 5 minutes in seconds

    React.useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);

            return () => clearTimeout(timer); // Cleanup timeout on re-render or unmount
        }
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div>
            <h2>Countdown Timer</h2>
            <h2>Time Left: {formatTime(timeLeft)}</h2>
        </div>
    );
}

export default CountdownTimer;
