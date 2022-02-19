import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-portfolio",
  template: `
    <main>
      <header>
        <h1>Rashid Wassan</h1>
        <p>🚀 Welcome to my website!</p>
      </header>

      <blockquote>
        <p>CEO @ LabourOnline PK | GDSC Lead | Flutter Dev at IsaaTech | Blockchain | MLSA | Community Builder | Tech Evangelist!</p>
      </blockquote>

      <section>
        <h2>📜 Manifesto</h2>
        <p>
        'A young, passionate Software Developer & tech evangelist fascinated by new technology trends & filled with patriotism, giving his best to play his part in bringing digital change and tech awareness in Pakistan.'
        I am a perfectionist, having an obsession with beautiful user interface designs & graphics. I enjoy coding in Flutter, creating beautiful looking apps while being aware of UX as well. Blockchain engrossed me and, therefore, made me dig deeper into the world of Solidity.
        </p>

        <p>
        I am a nerd with great troubleshooting skills, who loves to play with different operating systems and explore them. Computer hardware fascinates me very much. Looking forward to having an understanding of DevOps & AWS while exploring advanced Dart & Flutter concepts!
        Apart from that, I'm a helping hand for the learners; helping them to learn and grow. I believe in quality education & am eager to promote it. I have been helping others by creating content on my YouTube channel & writing articles on various platforms.
        </p>

        <p>
        Thanks to my strong communication skills along with better team management guts, I have been leading Google Developer Students Club at my campus and serving as a Microsoft Learn Student Ambassador, meanwhile being an active and highlighted member of several societies i.e Strapi, SES MUET, & Appwrite, promoting pragmatic technical education. Having a deep understanding of computer hardware & software due to being in touch with technology since my very childhood, I know how technology can uplift a nation. Technology drives me crazy and I am a fan of innovations!

        On a journey to influence masses!
        </p>
      </section>

      <section class="light">
        <h2>👩🏽‍🚀 Projects</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2>🏆 Accomplishments</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <blockquote>
        <p>The best way out is always through <br />-Robert Frost</p>
      </blockquote>

      <section class="left">
        <h2>🌮 Work History</h2>

        <h3>McDonalds</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>Burger King</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>Taco Bell</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <blockquote>
        <p>Thanks for watching!</p>
      </blockquote>
    </main>
  `,
  styles: [
    `
      main {
        color: white;
        z-index: 99;
        position: absolute;
        width: 100%;
        margin: 0 auto;
        padding: 120px 0;

        display: grid;
        grid-template-columns: repeat(12, 1fr);
      }

      h1,
      h2,
      h3,
      blockquote {
        font-family: elevon, sans-serif;
        font-weight: 700;
        font-style: normal;
      }

      header {
        background: var(--dark-bg);
        grid-column: 2 / span 5;
        font-size: 2.5rem;
        padding: 2rem;
        margin-bottom: var(--spacing);
      }

      section {
        grid-column: 2 / 8;
        padding: 1rem;
        background: var(--dark-bg);
        font-size: 1.25rem;
        line-height: 1.5;
        margin-bottom: var(--spacing);
      }

      blockquote {
        padding: 0;
        grid-column: 2 / span 9;
        margin: 0 0 var(--spacing);
      }

      blockquote p {
        color: black;
        background-color: white;
        font-size: 4rem;
        display: inline;
        line-height: 1;
      }

      .left {
        grid-column: 6 / 12;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
