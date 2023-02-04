

export const ModalWindow = ({ modalTitle, message, modalMessage }) => {

    return (
        <div ref={modalMessage} className="modal fade" id="modalMessage" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{modalTitle}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {message}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {/*<button type="button" className="btn btn-primary">Save changes</button>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
