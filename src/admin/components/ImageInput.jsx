import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { config, portfolioApi } from "../../api/portfolioApi";

export const ImageInput = ({ initialImg, classImg = 'rounded-circle col-6', onBeginUploading = () => { }, onEndUploading = (secure_url, formData) => { } }) => {
    const { userData } = useSelector((state) => state.auth);
    const [imgtmp, setImgtmp] = useState(initialImg);
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        setImgtmp(initialImg);
    }, [initialImg])


    const uploadTemp = async (event) => {
        onBeginUploading();
        const defaultConfig = { headers: { ...config(userData.token).headers, 'content-type': 'multipart/form-data' } };
        const photo = event.target.files[0];
        if (!photo) {
            onEndUploading('', null);
            return;
        }
        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', photo);
        portfolioApi.post('/files/tmp', formData, defaultConfig).then((result) => {
            setImgtmp(result.data.secure_url);
            setIsUploading(false);
            onEndUploading(result.data.secure_url, formData);
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <>
            <div className="d-flex justify-content-center mb-4">
                <img src={imgtmp} className={classImg} alt="example placeholder" />
            </div>
            <div className="d-flex justify-content-center">
                <div className="btn btn-primary btn-rounded">
                    <label className="form-label text-white m-1 d-flex gap-2" htmlFor="customFile2">
                        {
                            isUploading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        }
                        {
                            isUploading ? 'Uploading photo...' : 'Choose a picture'
                        }
                    </label>
                    <input type="file" className="form-control d-none" id="customFile2" name="file" onChange={uploadTemp} accept="image/*" disabled={isUploading} />
                </div>
            </div>
        </>
    )
}
