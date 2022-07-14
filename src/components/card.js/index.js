import { useRecoilValue } from "recoil"
import { number } from "../../global/number"

import "./styles.css"

export const Card = () => {
    const someNumber = useRecoilValue(number)

    return <div className="card-container">
        {someNumber}
    </div>
}