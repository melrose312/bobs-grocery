function Highlight({ image, title, subtitle, alt }) {
    return (
        <div className="highlight__card">
            <h3 className="highlight__title">{title}</h3>
            <p className="highlight__subtitle">{subtitle}</p>
            <img src={image} alt={alt} />
        </div>
    );
}

export default Highlight;