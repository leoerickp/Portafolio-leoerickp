import { config, portfolioApi } from "../../api/portfolioApi";

export const getData = (token, url, sliceSource, params = '') => {
    const { startLoading, setData, throwError } = sliceSource;
    return async (dispatch) => {
        try {
            dispatch(startLoading());
            const results = await portfolioApi.get(
                `${url}${params}`,
                config(token)
            );
            dispatch(setData(results.data));
        } catch (error) {
            dispatch(throwError(error));
        }
    };
}

export const getDataByParent = (token, url, sliceSource, idParent, params = '') => {
    const { startLoading, setData, throwError } = sliceSource;
    return async (dispatch) => {
        try {
            dispatch(startLoading());
            const results = await portfolioApi.get(
                `${url}/${idParent}${params}`,
                config(token)
            );
            dispatch(setData({ ...results.data, idParent }));
        } catch (error) {
            dispatch(throwError(error));
        }
    };
}

export const updateData = (token, url, sliceSource, id, updatedData) => {
    const { startLoading, updateData, setBackendResult, throwError } = sliceSource;
    return async (dispatch) => {
        try {
            dispatch(startLoading());
            const results = await portfolioApi.patch(
                `${url}/${id}`,
                updatedData,
                config(token)
            );
            dispatch(updateData({ id, updatedData: results.data }));
            dispatch(setBackendResult(results.data));
        } catch (error) {
            dispatch(throwError(error));
        }
    };
}

export const removeData = (token, url, sliceSource, id) => {
    const { startLoading, deleteData, setBackendResult, throwError } = sliceSource;
    return async (dispatch) => {
        try {
            dispatch(startLoading());
            const results = await portfolioApi.delete(
                `${url}/${id}`,
                config(token)
            );
            dispatch(deleteData(id));
            dispatch(setBackendResult(results.data));
        } catch (error) {
            dispatch(throwError(error));
        }
    };
}

export const createData = (token, url, sliceSource, newData) => {
    const { startLoading, createData, setBackendResult, throwError } = sliceSource;
    return async (dispatch) => {
        try {
            dispatch(startLoading());
            const results = await portfolioApi.post(
                `${url}`,
                newData,
                config(token)
            );
            dispatch(createData(results.data));
            dispatch(setBackendResult(results.data));
        } catch (error) {
            dispatch(throwError(error));
        }
    };
}