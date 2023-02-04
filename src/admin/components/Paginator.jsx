import { useEffect, useState } from "react"


export const Paginator = ({ paginationData: { count, limit, offset, onPageChange } }) => {
    const [enabledPreviousButton, setEnabledPreviousButton] = useState(offset > 0);
    const [enabledNextButton, setEnabledNextButton] = useState(offset > 0);
    const [currentPage, setCurrentPage] = useState(limit > 0 ? parseInt(offset / limit) + 1 : 0);
    const [pageCount, setPageCount] = useState(1);

    const pageLinks = (count) => {
        let pages = [];
        for (let i = 0; i < count; i++) {
            pages.push(i + 1);
        }
        return pages;
    }
    useEffect(() => {
        setEnabledPreviousButton(currentPage !== 1);
        setEnabledNextButton(currentPage !== pageCount);
    }, [currentPage, pageCount])

    useEffect(() => {
        if (limit > 0) {
            let pc = parseInt(count / limit);
            if (count % limit > 0) pc++;
            setPageCount(pc);
            loadPage(parseInt(offset / limit) + 1);
        }
    }, [limit, count])


    const loadPage = (page) => {
        setCurrentPage(page);
        onPageChange(page * limit - limit);
    }
    return (
        <>
            <div className="col-sm-12 col-md-6">
                {`Showing ${offset + 1} to ${offset + limit > count ? count : offset + limit} of ${count} entries`}
            </div>
            <div className="col-sm-12 col-md-6">
                <nav aria-label="...">
                    <ul className="pagination justify-content-end">
                        <li className={`page-item ${!enabledPreviousButton ? 'disabled' : ''}`}>
                            <a className="page-link" href="#!" onClick={() => loadPage(currentPage - 1)}>Previous</a>
                        </li>
                        {
                            pageLinks(pageCount).map((pageLink) => {
                                if (pageLink === currentPage) {
                                    return (
                                        <li className="page-item active" aria-current="page" key={pageLink}>
                                            <span className="page-link">{pageLink}</span>
                                        </li>
                                    )
                                }
                                return (
                                    <li className="page-item" key={pageLink}>
                                        <a className="page-link" href="#!" onClick={() => loadPage(pageLink)}>{pageLink}</a>
                                    </li>
                                )

                            })
                        }
                        <li className={`page-item ${!enabledNextButton ? 'disabled' : ''}`}>
                            <a className="page-link" href="#!" onClick={() => loadPage(currentPage + 1)} > Next</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </>
    )
}
