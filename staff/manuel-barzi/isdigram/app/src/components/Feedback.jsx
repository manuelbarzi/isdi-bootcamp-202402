import RoundButton from './library/RoundButton'

function Feedback({ message, level }) {
    return <div className={`fixed w-full border-2 border-black ${level === 'error' ? 'bg-red-500' : level === 'warn' ? 'bg-yellow-500' : 'bg-green-500'} flex flex-col items-center`} >
        <h3>{message}</h3>
        <RoundButton>Accept</RoundButton>
    </div>
}

export default Feedback