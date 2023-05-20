import "./features.scss"
import dataFeatures from "./features.json"

const Features = () => {
    const feature = dataFeatures.map((feature) => {
            return (
                <article className="home__features__article" key={feature.title}>
                    <img className="home__features__article__icon" src={feature.img} alt={feature.title}/>
                    <h3 className="home__features__article__title">{feature.title}</h3>
                    <p className="home__features__article__text">{feature.text}</p>
                </article>
            )
        }
    )


    return (
        <section className="home__features">
            {feature}
        </section>
    );
};

export default Features;
