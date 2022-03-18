import { useEffect } from "react"
import useSetState from "react-use-setstate"
import { useSelector } from "react-redux"
import { Card, Col, Row, Pagination } from "react-bootstrap"

import { listUpupasAPI, PAGINATION_LIMIT_SIZE } from "../../apis/organizations"
import UpupaCard from "../../components/upupas"


const Upupas = props => {
    const [state, setState] = useSetState({
        upupas: [],
        loading: true,
        page: 1,
        count: 0,
    })

    const activeOrganization = useSelector(state => state.organizations.active)

    useEffect(() => {
        if (!activeOrganization) return
        handleGetUpupasData()
    }, [activeOrganization.uuid, state.page])

    const handleGetUpupasData = async () => {
        setState({
            loading: true,
        })
        try {
            const { data: { results, count } } = await listUpupasAPI(activeOrganization.uuid, state.page)
            setState({
                upupas: results,
                loading: false,
                count,
            })
        } catch (error) {
            setState({
                loading: false,
            })
            console.log(error)
        }
    }


    return (<>
        <Row>
            <Col lg="8" md="12">
                <div className="mb-4">
                    {
                        state.upupas.map(upupa => (
                            <UpupaCard key={upupa.uuid} upupa={upupa} />
                        ))
                    }
                </div>
                <div>
                    <Pagination>
                        {state.page !== 1 && <>
                            <Pagination.First />
                            <Pagination.Prev />
                        </>}
                        {
                            [...Array(state.count)].map((p, index) => {

                                return (
                                    <Pagination.Item
                                        key={index}
                                        active={index + 1 === state.page}
                                    >{index + 1}</Pagination.Item>
                                )
                            })
                        }
                        {/* <Pagination.Ellipsis /> */}
                        {
                            state.page !== Math.ceil(state.count / PAGINATION_LIMIT_SIZE) && <>
                                <Pagination.Next />
                                <Pagination.Last />
                            </>
                        }
                    </Pagination>
                </div>
            </Col>
            <Col lg="4" md="12">
                <Card>
                    <Card.Body>
                        <Card.Title>
                            Upupas
                        </Card.Title>
                        <Card.Text>
                            {state.loading ? "Loading..." : "No Upupas"}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>)
}

export default Upupas