import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = (props) => {
    const {page, totalPages, handlePaginationClick} = props;
   
    return(
        <div className="Pagination">
            <button
                onClick={() => handlePaginationClick('prev')}
                disabled={page <= 1}
                className="Pagination-button"
            >
                &larr;
            </button>
            <span className="Pagination-info">
                page <b>{page}</b> of <b>{totalPages}</b>
            </span>
            <button 
                onClick={() => handlePaginationClick('next')} 
                disabled={page >= totalPages}
                className="Pagination-button"
            >
                &rarr;
            </button>
        </div>
    )
}
Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    handlePaginationClick: PropTypes.func,
}
export default Pagination;