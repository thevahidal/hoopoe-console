import { useEffect } from "react"
import { organizationsAPI } from "../../apis/users"


const Recipients = props => {
    useEffect(() => {
        organizationsAPI().then(res => {
            console.log(res);
        })
    }, [])

    return (
        <div>

        </div>
    )
}

export default Recipients