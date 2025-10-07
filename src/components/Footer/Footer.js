import React from 'react'
import styles from './Footer.module.scss'
import { Row, Col, Container } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa' // Import the heart icon

export default function Footer(props) {
  return (
    <Container fluid style={{ backgroundColor: 'var(--dark)' }}>
      <Container className={styles.footer}>
        <Row className="justify-content-center">
          <Col xs={12} md={10} className="text-center">
            {/* Main "Made with love" credit */}
            <p className={styles['main-credit']}>
              Made with <FaHeart color="red" /> by{' '}
              <a
                href="https://dear.is-a.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                dear
              </a>
            </p>
            {/* Low-contrast attribution */}
            <p className={styles['attribution']}>
              Based on the open-source project{' '}
              <a
                href="https://github.com/rawgraphs/rawgraphs-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                RAWGraphs
              </a>
              . Original work © 2013-2021 (Apache License 2.0).
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}