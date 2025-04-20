import { Button, Form, Input, Space, Typography } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function NetworkList({ displayText = 'Social Networks', name = 'networks' }) {
  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => (
        <>
          <Text strong>{displayText}</Text>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              key={key}
              style={{ display: 'flex', marginBottom: 8 }}
              align="baseline"
            >
              <Form.Item
                {...restField}
                name={[name, 'icon']}
                rules={[{ required: true, message: 'Icon is required' }]}
              >
                <Input placeholder="Icon" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'link']}
                rules={[{ required: true, message: 'Link is required' }]}
              >
                <Input placeholder="Link" />
              </Form.Item>
              <Button
                icon={<DeleteOutlined />}
                onClick={() => remove(name)}
              />
            </Space>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Add {displayText}
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
}
