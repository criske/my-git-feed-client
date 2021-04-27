import './about.css';

export default function About() {

    return (<div className="__about">
        <p>
            <strong>My-Git-Feed</strong> is an app that aggregates all my activity on different git version control providers: &nbsp;
            <a href="https://github.com/criske" target="_blank">Github</a>, <a href="https://bitbucket.org/cristianpela" target="_blank">Bitbucket</a> and <a href="https://gitlab.com/criske" target="_blank">Gitlab</a>.
        </p>
        <p>
            In order to extract relevant data, the app uses APIs offered by these providers. This data is then processed by the app's
            backed layer into a common REST API. This way, by keeping the domain logic on the backend, the front-end implementation is decoupled
            and can be any of a simple webpage, native mobile app or a desktop app.
            The backend layer also provides caching, leveraging <i>conditional-requests</i> imposed by providers and thus
            ensuring a better response and rate limit saves.
        </p>
        <p>The whole project's source code can be found <a href="https://github.com/criske?tab=projects">here</a>.</p>
        <p>
            <h3><a href="https://github.com/criske/my-git-feed-server">Backend</a></h3>
        </p>
        <p>
            The backend is written in Kotlin using Spring Framework and consists in three modules basically: the domain, implementation and presentation.
        </p>
        <p>
            The domain contains all the bussiness logic, unit testable, decoupled from implementation layer(caching and networking).
            Input validation is also performed here with the help of a functional validation library of mine called <a href="https://github.com/criske/inval-id">inval-id</a>.
            This module communicates with implementation layers via interfaces and DTOs (Data Transfer Objects).
            The DTOs are simple and easly serializable to JSON an vice-versa.
        </p>
        <p>
            The implementation, as the names says, implements the communication interfaces offered by the domain. These are mainly
            the cache (Redis and Ehcache clients) and networking with git providers (Spring RestTemplate). Right know the caching is managed by Ehcache, the Redis client being disabled.
        </p>
        <p>
            The presentation offers the REST endpoints and is representated by Spring Controllers. The Controllers communicates with domain via interfaces injected by Spring.
        </p>
        <p>For now only Github is fully supported, Bitbucket being in the works...</p>
        <p><h3><a href="https://github.com/criske/my-git-feed-client">Frontend</a></h3></p>
        <p>Frontend is a SPA (Single page application) written in Typescript using React Hooks.</p>
        <p>
            In the future there are plans for a Android native app, multiplatform Flutter app, and a
            Jetpack Compose Desktop app.
        </p>
        <p><h3>Hosting</h3></p>
        <p>
            <ul>
                <li>The backend REST API is hosted on heroku: <a href="https://my-git-feed.herokuapp.com/" target="_blank">https://my-git-feed.herokuapp.com/</a></li>
                <li>The frontend is hosted on Github pages: <a href="https://criske.github.io/" target="_blank">https://criske.github.io/</a></li>
            </ul>
        </p>
    </div>)

}