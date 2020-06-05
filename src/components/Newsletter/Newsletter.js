import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import ReCAPTCHA from 'react-google-recaptcha';
import './Newsletter.css';
import Spinner from '../Spinner';

function Newsletter() {
  const recaptchaRef = React.createRef();
  const [email, setEmail] = useState('');
  const [state, setState] = useState({
    result: '',
    loading: false,
  });

  const alertResult = () => {
    if (state.result === 'success') {
      return (
        <div style={{ marginTop: '1rem' }}>
          <p style={{ fontSize: '1.5rem' }}>
            <b>Thanks for subscribing!</b>
            <span role="img" aria-label="party popper">
              🎉
            </span>
          </p>
        </div>
      );
    }
    if (state.result === 'error') {
      return (
        <div style={{ marginTop: '1rem' }}>
          <p style={{ fontSize: '1.5rem' }}>
            <b>
              Error{' '}
              <span role="img" aria-label="confused face">
                😕
              </span>
              , maybe you are subscribed already
            </b>
            <span role="img" aria-label="red exclamation mark">
              ❗️
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      ...state,
      loading: true,
    });
    if (recaptchaRef.current) {
      recaptchaRef.current.execute();
    }
    addToMailchimp(email) // listFields are optional if you are only capturing the email address.
      .then((data) => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data);
        setState({
          ...state,
          loading: false,
          result: data.result,
        });
      });
  };

  return (
    <section className="section-cta">
      <div style={{ maxWidth: '900px', margin: 'auto', padding: '0 20px' }}>
        <h2>Newsletter</h2>
        <p>
          If you like my blog and you want to be updated with my latest articles, please subscribe,
          I promise never send you spam
          <span role="img" aria-label="prohibited">
            🚫
          </span>
          . I would publish at least 1 post per month.
        </p>
        <form id="newsletter" onSubmit={handleSubmit}>
          <div className="subscribe-row">
            <div className="input-container">
              <label htmlFor="email">
                Your email
                <input
                  className="text-field"
                  type="email"
                  name="email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </label>
            </div>
            <button
              type="submit"
              id="newsletter-btn"
              className="button button-primary button-transparent"
              disabled={state.loading}
            >
              {state.loading ? <Spinner /> : 'Subscribe'}
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey="6Lc7nwAVAAAAAJl0UNwUIGpoJMIIH0mLPe2utY6M"
              />
            </button>
          </div>
          {alertResult()}
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
