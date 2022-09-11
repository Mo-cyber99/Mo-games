import RickRoll from '../img/rick-astley-never-gonna-give-you-up.gif'
import '../css/ErrorPage.css'
export const ErrorPage = () => {
    return (
        <>
        <h1 color='beige'>404</h1>
        <img src={RickRoll} alt="Error" />
        <p className='errorHandle'>Page not found</p>
        </>
    )
}