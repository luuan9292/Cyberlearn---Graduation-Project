import React from 'react';
import { Link } from "react-router-dom";

export default function Notfound() {
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>Oops!</h1>
                    <h2>404 - The Page can't be found</h2>
                </div>
                <div className="subscribe">
                    <form className="form">
                        <input type="email" className="form__field" placeholder="Your E-Mail Address" />
                        <button type="button" className="btn btn--primary btn--inside uppercase">Send</button>
                    </form>
                </div>
                <Link to="/">Go TO Homepage</Link>
            </div>
        </div>
    )
}
