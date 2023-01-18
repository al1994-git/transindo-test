import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import Header from "./components/header";
import Filter from "./components/filter";
import List from "./components/list";

function App() {
  const urlAPI = "http://localhost:3005/data";
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);

  function getDataAPi() {
    fetch(urlAPI)
      .then((res) => {
        if (res.status === 200) return res.json();
      })
      .then((resdata) => {
        resdata.map((item, index) => {
          let combinedArray1 = [
            item.role,
            item.level,
            ...item.languages,
            ...item.tools,
          ];

          resdata[index]["filter"] = combinedArray1;
        });
        setData(resdata);
      });
  }

  function handleFilter(filt) {
    const temp = [...dataFilter];
    temp.push(filt);
    let uniq = [...new Set(temp)];
    setDataFilter(uniq);
  }

  useEffect(() => {
    getDataAPi();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Container>
        <Filter data={dataFilter} />
        {data.map((item, index) => {
          if (dataFilter.length > 0) {
            if (dataFilter.some((r) => item.filter.indexOf(r) >= 0)) {
              return <List key={index} data={item} action={handleFilter} />;
            }
          } else {
            return <List key={index} data={item} action={handleFilter} />;
          }
        })}
      </Container>
    </React.Fragment>
  );
}

export default App;
