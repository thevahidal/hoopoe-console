import { useEffect } from "react"
import useSetState from "react-use-setstate"
import { useSelector } from "react-redux"

import { listUpupasAPI } from "../../apis/organizations"



const Upupas = props => {
    const activeOrganization = useSelector(state => state.organizations.active)

    useEffect(() => {
        if (!activeOrganization) return

        listUpupasAPI(activeOrganization.uuid)
    }, [activeOrganization.uuid])


    return (
        <div style={{
        }}>
        </div>
    )
}

export default Upupas