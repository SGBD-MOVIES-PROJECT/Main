import { Table } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

var url = 'http://127.0.0.1:8000/api/pelicula/filter/?';
export default function TableUrl() {
  const [dataSource, setDataSource] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRecords(1);
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "original_title",
    },
    {
      title: "Trips",
      dataIndex: "genre",
    },
  ];

  const fetchRecords = (page) => {
    setLoading(true);
    axios.get('http://127.0.0.1:8000/api/pelicula/filter/')
      .then((res) => {
        setDataSource(res.data.data);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 10,
          total: totalPages,
          onChange: (page) => {
            fetchRecords(page);
          },
        }}
      ></Table>
    </div>
  );
}