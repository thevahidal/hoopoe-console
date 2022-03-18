import { useEffect } from "react"
import useSetState from "react-use-setstate"
import { useSelector } from "react-redux"
import { Card, Col, Row, Pagination } from "react-bootstrap"

import { listRecipientsAPI } from "../../apis/organizations"
import RecipientCard from "../../components/recipients"

const Recipients = props => {
    const [state, setState] = useSetState({
        recipients: [],
        loading: true,
        page: 1,
        count: 0,
    })

    const activeOrganization = useSelector(state => state.organizations.active)

    useEffect(() => {
        if (!activeOrganization) return
        handleGetRecipientsData()
    }, [activeOrganization.uuid, state.page])

    const handleGetRecipientsData = async () => {
        setState({
            loading: true,
        })
        try {
            const { data: { results, count } } = await listRecipientsAPI(activeOrganization.uuid, state.page)
            setState({
                recipients: results,
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
        <Row className="mb-4">
                {
                    state.recipients.map(recipient => (
                        <Col lg="4" md="12">
                            <RecipientCard key={recipient.username} recipient={recipient} />
                        </Col>
                    ))
                }
        </Row>
        <Row>
            <Col>
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
                    {/* {
                            state.page !== Math.ceil(state.count / PAGINATION_LIMIT_SIZE) && <>
                                <Pagination.Next />
                                <Pagination.Last />
                            </>
                        } */}
                </Pagination>
            </Col>
        </Row>
    </>)
}

export default Recipients