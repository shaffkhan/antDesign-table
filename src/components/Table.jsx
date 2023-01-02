import React from "react";
import { Table, Input } from 'antd';    
export default function Tableant() {

    const dataSource= [
        {
          id: 1,
          firstName: "Renato",
          lastName: "Nunes",
          age: 27,
        },
        {
          id: 2,
          firstName: "Carol",
          lastName: "Souza",
          age: 25,
        },
        {
          id: 3,
          firstName: "John",
          lastName: "Doe",
          age: 33,
        },
      ];
    
    const [source, setSource] = React.useState(dataSource);

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
     
      width: "6%",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      width: "35%",
    },
    {
      title: "Last Name",
      render: (text, record) => {
        return (
          <Input
            type="text"
            value={record['firstName']}
            onChange={e => handleChange(record.id, e.target.value)}
          ></Input>
        )},
      dataIndex: "lastName",
      key: "lastName",
      width: "35%",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "24%",
    },
  ];

  const handleChange = (id, value) => {
    const newSource = source.map(item => item.id === id ? {...item, firstName: value } : item);
    setSource(newSource);
  }

  return (
    <div>
      <Table
        dataSource={source}
        columns={columns}
        bordered
        size={"middle"}
        rowKey={"id"}
      />
    </div>
  );
}
