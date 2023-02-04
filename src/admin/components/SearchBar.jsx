
export const SearchBar = ({ searchBarData: { limit, onLimitChange } }) => {
    const setValue = (event) => {
        onLimitChange(+event.target.value)
    }
    return (
        <>
            <div className="col-sm-12 col-md-6">
                <label className="col-md-6 col-form-label d-flex gap-2">
                    Show
                    <select aria-controls="dataTable"
                        className="form-select form-select-sm" aria-label=".form-select-sm example"
                        onChange={setValue}
                        defaultValue={limit}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select> entries
                </label>

            </div>
            <div className="col-sm-12 col-md-6">
                <label className="col-md-10 col-form-label d-flex gap-2">
                    Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="dataTable" />
                </label>
            </div>
        </>
    )
}
