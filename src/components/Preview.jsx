export default function Preview({ formData, onSubmit }) {
    const sanitizeBase64Input = (input) => {
        if (!input || typeof input !== 'string') return null;
        const trimmed = input.trim();
        return trimmed.startsWith("data:image/")
            ? trimmed
            : `data:image/jpeg;base64,${trimmed}`;
    };

    const safeProfileImage = sanitizeBase64Input(formData?.hero?.ProfileImage);

    const handleClick = () =>{
        onSubmit();
    }

    return (
        <div className="preview-card">
            {safeProfileImage ? (
                <img src={safeProfileImage} alt="profile-image" />
            ) : (
                <div className="image-placeholder">No Image Provided</div>
            )}

            <h3>{formData?.hero?.name || 'Unnamed'}</h3>

            <div className="preview-role">
                <span>{formData?.hero?.title || 'No title'}</span>
            </div>

            <div className="preview-location">
                <img src="../src/assets/pin.png" alt="location-pin" />
                <span>{formData?.about?.location || 'Unknown location'}</span>
            </div>

            <div className="preview-bio">
                <span>{formData?.about?.bio || 'No bio provided'}</span>
            </div>

            <h2>{formData?.skills || 'No skills listed'}</h2>

            <div className="preview-email">
                <h4>Email: {formData?.contact?.email || 'No email'}</h4>
            </div>
            <button onClick={handleClick}> View Portfolio </button>
        </div>
    );
}