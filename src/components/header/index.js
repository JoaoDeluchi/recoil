import { useRecoilState } from 'recoil'
import { number } from '../../global/number'
import './styles.css'
export const Header = () => {
    const [value, setNumber] = useRecoilState(number)


    return (
        <div className='Header'>
        <button onClick={() => setNumber(value + 1)}>{'+'}</button>
        <button onClick={() => setNumber(value - 1)}>{'-'}</button>
        </ div>
    )
}