import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';

const ProgressBar = () => {
    const progressPercent = useSelector((state) => state.courses.progressPercent);

    return (
        <div style={{ width: '70px', height: '70px', margin: '10px' }}>
            <CircularProgressbar
                value={progressPercent}
                text={`${progressPercent}%`}
                styles={{
                    path: {
                        // Path color
                        stroke: `rgba(255, 255, 255, ${progressPercent / 100})`,
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',
                        // Customize transition animation
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        // Rotate the path
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                        // Trail color
                        stroke: '#3e98c7',
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',
                        // Rotate the trail
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    },
                    text: {
                        // Text color
                        fill: '#fff',
                        // Text size
                        fontSize: '22px',
                    }
                }}
            />
        </div>
    )
}
export default ProgressBar;