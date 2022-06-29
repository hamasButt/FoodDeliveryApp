export const BannerName = ({name, discount, link}) => {
    return (
        <>
            <div className="banner-content">
                <h3>Hello {name}</h3>
                <p>Get Free Discount For Every <span>${discount}</span> Purchase</p>
                <a href={link}>Learn More</a>
            </div>
        </>
    )
}
