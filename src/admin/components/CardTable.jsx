import { LabeledCardTable } from "./LabeledCardTable"
import { Paginator } from "./Paginator"
import { SearchBar } from "./SearchBar"


export const CardTable = ({ children, labeledCardData, searchBarData, paginationData }) => {
    const { limit } = paginationData;
    return (
        <LabeledCardTable labeledCardData={labeledCardData}>
            {
                limit > 0 && <div className="row">
                    <SearchBar searchBarData={searchBarData} />
                </div>
            }
            <div className="row">
                <div className="col-sm-12">
                    {children}
                </div>
            </div>
            {
                limit > 0 && <div className="row">
                    <Paginator paginationData={paginationData} />
                </div>
            }

        </LabeledCardTable>

    )
}
