import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import ReCAPTCHA from 'react-google-recaptcha';
import './Newsletter.css';
import { formatMessage } from 'utils/i18n';
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
            <b>{formatMessage('tNewsletterSucces')}</b>
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
              {formatMessage('tNewsletterError')}
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
        setState({
          ...state,
          loading: false,
          result: data.result,
        });
      });
  };

  return (
    <section className="section-cta">
      <div style={{ maxWidth: '1100px', margin: 'auto', padding: '0 20px' }}>
        <h2>{formatMessage('tNewsletter')}</h2>
        <p>
          {formatMessage('tNewsletterDescription')}
          <span role="img" aria-label="prohibited">
            🚫
          </span>
          {formatMessage('tNewsletterDescription2')}
        </p>
        <form id="newsletter" onSubmit={handleSubmit}>
          <div className="subscribe-row">
            <div className="input-container">
              <label htmlFor="email">
                {formatMessage('tInputEmail')}
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
              {state.loading ? <Spinner /> : formatMessage('tNewsletterBtn')}
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
