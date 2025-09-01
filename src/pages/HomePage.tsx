import React, { useEffect } from 'react';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Load CSS files dynamically
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = '/content/css/bootstrap.3.0.2.min.css';
    document.head.appendChild(link1);

    // Author name replacement (equivalent to jQuery)
    const authorElement = document.getElementById('author-name');
    if (authorElement) {
      authorElement.innerHTML = '<a href="mailto:btouellette+concarneau@gmail.com">Brian Ouellette</a>';
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div style={{ backgroundImage: 'url(/content/images/ui/bg.jpg)', minHeight: '100vh' }}>
      <style>{`
        body { padding-top: 40px; }

        @media (min-width: 768px) {
          body { padding-top: 80px; }
        }
        
        .fa-user, .fa-facebook, .fa-twitter, .fa-google {
          top: 2px;
          position: relative;
          width: 16px;
          height: 16px;
        }

        .privacy-link {
          font-size: small;
          float: right;
          background-color: rgb(238, 238, 238);
          border-radius: 6px;
          padding: 8px;
          width: fit-content;
        }

        .tooltip-wrapper {
          display: inline-block;
        }

        [data-tooltip] {
          position: relative;
          z-index: 2;
          cursor: pointer;
        }

        [data-tooltip]:before,
        [data-tooltip]:after {
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
        }

        [data-tooltip]:before {
          position: absolute;
          bottom: 100%;
          left: 50%;
          margin-bottom: 5px;
          margin-left: -80px;
          padding: 7px;
          width: 300px;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          border-radius: 3px;
          background-color: #000;
          color: #fff;
          content: attr(data-tooltip);
          text-align: center;
          font-size: 14px;
          line-height: 1.2;
        }

        [data-tooltip]:after {
          position: absolute;
          bottom: 100%;
          left: 50%;
          margin-left: -5px;
          width: 0;
          border-top: 5px solid #000;
          border-right: 5px solid transparent;
          border-left: 5px solid transparent;
          content: " ";
          font-size: 0;
          line-height: 0;
        }

        [data-tooltip]:hover:before,
        [data-tooltip]:hover:after {
          visibility: visible;
          opacity: 1;
        }
      `}</style>
      
      <div className="container">
        <div className="jumbotron text-center">
          <h1>Concarneau</h1>
          <p>
            An <a href="https://github.com/btouellette/concarneau">implementation</a> of{' '}
            <a href="https://en.wikipedia.org/wiki/Carcassonne_(board_game)">Carcassonne</a> using{' '}
            <a href="https://d3js.org">D3.js</a> and <a href="https://nodejs.org">Node.js</a> created by{' '}
            <span id="author-name">Brian Ouellette</span>
          </p>
          <p>
            Unfamiliar with Carcassonne? You can read the rules{' '}
            <a href="https://images.zmangames.com/filer_public/d5/20/d5208d61-8583-478b-a06d-b49fc9cd7aaa/zm7810_carcassonne_rules.pdf">
              here
            </a>
          </p>
          <a href="/login" className="btn btn-default">
            <svg className="fa-user">
              <use xlinkHref="#fa-user"></use>
            </svg>{' '}
            Local Login
          </a>
          <a href="/signup" className="btn btn-default">
            <svg className="fa-user">
              <use xlinkHref="#fa-user"></use>
            </svg>{' '}
            Local Signup
          </a>
          <a href="/auth/twitter" className="btn btn-info">
            <svg className="fa-twitter" fill="white">
              <use xlinkHref="#fa-twitter"></use>
            </svg>{' '}
            Twitter
          </a>
          <a href="/auth/google" className="btn btn-danger">
            <svg className="fa-google" fill="white">
              <use xlinkHref="#fa-google"></use>
            </svg>{' '}
            Google
          </a>
          <div
            className="tooltip-wrapper"
            data-tooltip="Meta is no longer providing Facebook login for non-business apps. Please login with a different linked account or request a password reset to your Facebook email via local login to regain access."
          >
            <a className="btn btn-primary" style={{ opacity: 0.6, cursor: 'not-allowed' }}>
              <svg className="fa-facebook" fill="white">
                <use xlinkHref="#fa-facebook"></use>
              </svg>{' '}
              Facebook
            </a>
          </div>
        </div>
        <div className="privacy-link">
          <a href="https://docs.google.com/document/d/1VLUBQsC2JbmLKAO-8xyxeyAfDzbUSoEQGtfxO65WjQY/edit?usp=sharing">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;