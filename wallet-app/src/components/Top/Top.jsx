import './Top.scss';

function Top(props) {
    return (
        <section className='header'>
            <h1 className='header__heading'>{props.title}</h1>
            <p className='header__desc'>{props.description}</p>
        </section>
    )
}

export default Top;
