import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const PaginationLink = styled.a`
    padding: 2%;
    margin: 1%;
    background: orange;
    cursor: pointer;
    color: white;
    text-decoration: none;
    border-radius: 5px;
`;

function Pagination({ currentPage, hasMore }) {
  return (
        <PaginationContainer>
            <Link>
                href={`?page=${parseInt(currentPage)-1}`}
                <PaginationLink>Previous</PaginationLink>
            </Link>
            <Link>
                href={`?page=${parseInt(currentPage)+1}`}
                <PaginationLink>Next</PaginationLink>
            </Link>
        </PaginationContainer>
    );
};

export default Pagination;