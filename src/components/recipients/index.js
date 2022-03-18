import { Card, Col, Row } from "react-bootstrap"
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'

import * as styles from "./index.styled"

dayjs.extend(relativeTime)

const RecipientCard = ({ recipient, ...props }) => {

    const handleGetDate = (date) => {
        if (dayjs(date).diff(dayjs(), 'day') <= 1) {
            return dayjs(date).fromNow()
        } else {
            return "at " + dayjs(date).format('MMM D, YYYY h:mm A')
        }
    }

    return (
        <Card className="mb-2">
            <Card.Img src={recipient.image_thumbnail} />
            <Card.Body>
                <Card.Title>
                    {recipient.name}
                </Card.Title>
                <Card.Subtitle>
                    @{recipient.username}
                </Card.Subtitle>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-end">
                joined {handleGetDate(recipient.created_at)}
            </Card.Footer>
        </Card>
    )
}

export default RecipientCard