import useRequest from "@ahooksjs/use-request";
import { Table } from "antd";
import React from "react";
import "./index.less";
const columns: {
  title: string;
  dataIndex: string;
  key: string;
  render?: (text: string) => JSX.Element;
}[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: string) => <a href="">{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Website",
    dataIndex: "website",
    key: "website",
  },
];
export const User: React.FC = (props: any) => {
  const { data, error, loading } = useRequest("/api/users");
  return (
    <div className="user-wrapper">
      <Table
        size="small"
        columns={columns}
        dataSource={data}
        rowKey={(record) => record.id}
        loading={loading}
      />
    </div>
  );
};
