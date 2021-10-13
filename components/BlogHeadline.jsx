import { Col, Row } from "antd";

export default function BlogHeadline() {
  return (
    <Row
      align="middle"
      style={{
        height: 400,
        textAlign: "center",
      }}
    >
      <Col span={24}>
        <h1 style={{ fontSize: 70, fontWeight: "bold" }}>KH's Blog</h1>
        <p style={{ fontSize: 24 }}>
          Front-end Developer 조강훈의 블로그에 오신걸 환영합니다!
        </p>
      </Col>
    </Row>
  );
}
