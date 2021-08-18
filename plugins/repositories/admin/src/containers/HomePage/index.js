import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import { Header } from '@buffetjs/custom';
import { Table } from '@buffetjs/core';
import axios from 'axios';

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }

`;


const HomePage = () => {

  const [rows, setRows] = useState([]);
  
  useEffect(() => {
    axios.get("https://api.github.com/users/React-avancado/repos")
    .then(response => setRows(response.data))
    .catch(err => strapi.notification.error(`Ops... Github API limit exceeded, ${err}`));
  }, []);

  const headers = [
    {
      name: 'Name',
      value: 'name',
    },
    {
      name: 'Description',
      value: 'description',
    },
    {
      name: 'Url',
      value: 'html_url',
    },
  ];


  
  return (
    <Wrapper>
      <Header 
        title={{ label: "React Avançado Repositories" }}
        content="A list of our repositories in React Avançado course."
      />
      <Table headers={headers} rows={rows}  />
    </Wrapper>
  );
};

export default memo(HomePage);
