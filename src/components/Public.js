import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
        <header>
            <h1>Welcome to <span className="nowrap">Cherry C. Repairs!</span>
            </h1>
        </header>
        <main className="public__main">
            <p>Located in Beautiful Downtown Woo City, Cherry C. Repairs provides a trained staff ready to meet your tech repair needs.</p>
            <address className="public__addr">
                Cherry C. Repairs<br />
                804 Woo Drive<br />
                Woo City, JK 028974<br />
                <a href="tel:+2555687451">(333) 444-8763</a>
            </address>
            <br />
            <p>Owner: Cherry Chowmsky</p>
        </main>
        <footer>
            <Link to="/login">Employee Login</Link>
        </footer>
    </section>
  )
  return content
}

export default Public