import { Card, Col, Row } from "react-bootstrap"
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'

import * as styles from "./index.styled"

dayjs.extend(relativeTime)

const Upupa = ({ upupa, ...props }) => {

    const handleGetDate = (date) => {
        if (dayjs(date).diff(dayjs(), 'day') <= 1) {
            return dayjs(date).fromNow()
        } else {
            return dayjs(date).format('MMM D, YYYY h:mm A')
        }
    }

    return (
        <Card className="mb-2">
            <Card.Body>
                <Card.Title>
                    {upupa.message}
                </Card.Title>
                <styles.Extra as="div">
                    <pre>
                        {JSON.stringify(upupa.extra, null, 2)}
                    </pre>
                </styles.Extra>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-end">
                {handleGetDate(upupa.created_at)}
            </Card.Footer>
        </Card>
    )
}

export default Upupa