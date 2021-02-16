/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Documentoss</h5>
            <a href={this.docUrl('docCIM.html')}>Docmuneto 1</a>
            <a href={this.docUrl('doc2.html')}>Guides (or other categories)</a>
            <a href={this.docUrl('doc3.html')}>API Reference (or other categories)</a>
          </div>
          
          

          <div>
            <h5>Communidad</h5>
            <a
              href="https://stackoverflow.com/questions/tagged/"
              target="_blank"
              rel="noreferrer noopener">
              Link Externo 1
            </a>
            <a
              href="https://stackoverflow.com/questions/tagged/"
              target="_blank"
              rel="noreferrer noopener">
              Link Externo 2
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener">
              Link Externo 3
            </a>
          </div>
          
          
          <div>
            <h5>Mas</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a 
              href="https://github.com/Darrencillo/cimtest.git"
              target="_blank"
              rel="noreferrer noopener"
              
              className="fbOpenSource">
              <img
                src={`${this.props.config.baseUrl}img/Git_logo.png`}
                width="35"
                height="35"
              />
            </a>
            

            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>

        <a
          href="https://cloudinformationmodel.org/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/logo_cim.svg`}
            width="200"
            height="60"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
