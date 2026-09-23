<script lang="ts">
  import WhatsAppPreview from "./WhatsAppPreview.svelte";
  import CheckoutPreview from "./CheckoutPreview.svelte";
  import { plans } from "./offers";
  const comparisons = [
    {
      question: "A practice shaped for you",
      claude: "You choose the instructions, context and way of working.",
      coon: "My coaching approach, prepared and maintained around the work we agree to continue.",
    },
    {
      question: "A thread to return to",
      claude: "Projects and memory can build on the context you share.",
      coon: "The goals, history and commitments from our coaching that you choose to include.",
    },
    {
      question: "Room for another perspective",
      claude: "You can ask it to challenge your thinking.",
      coon: "Designed to ask for evidence, notice patterns and help you reach your own conclusions.",
    },
    {
      question: "A connection to your coach",
      claude: "No included relationship with me.",
      coon: "An extension of our work, with personal notes when I can and sessions when I am available.",
    },
    {
      question: "A place in your day",
      claude: "A general-purpose assistant in Claude’s interfaces.",
      coon: "A dedicated coaching conversation, right in WhatsApp.",
    },
  ];
  const questions = [
    {
      q: "Is this you, Fatma?",
      a: "No. It is an AI companion built around my coaching approach. It asks questions in the spirit of our work, but it does not have my judgement, presence or lived relationship with you. Any personal message from me will be clearly identified.",
    },
    {
      q: "What does a companion reply mean?",
      a: "One completed coaching response, even if it arrives as several WhatsApp bubbles. Your own messages, failed requests, retries and usage notices do not count. The proposed allowances reset monthly and do not roll over. Text conversations are included; voice-note support is not part of this initial offer.",
    },
    {
      q: "What happens if I use my allowance?",
      a: "The intended service will let you know as you approach the limit. You can choose a larger plan or wait for the next month. There will be no automatic overage bill. Essential safety guidance will remain available. These allowances are proposed for the pilot and will be confirmed before payment.",
    },
    {
      q: "Will you read or reply to my conversations?",
      a: "We will agree what I may review before you begin. While I am on maternity leave, I may send a text or voice note when I am able, but there is no scheduled review or promised response time. The companion is not monitored in real time, and live coaching is separate.",
    },
    {
      q: "What will it remember, and who can access it?",
      a: "Only the coaching history and goals we agree to include should be used. The live service will need AI, messaging and hosting providers to process messages, including Anthropic. Before activation, we will explain coach and administrator access, storage, retention and deletion, and ask for your consent. This preview collects no coaching conversations.",
    },
    {
      q: "Can I cancel?",
      a: "The proposed plans are monthly. Cancel before the next renewal to prevent the next charge, with access through the paid period. Final cancellation and refund terms will be shared before any real payment.",
    },
    {
      q: "How would I pay from Tunisia?",
      a: "We are exploring card payment through Stripe in USD or EUR, or an invoice for bank transfer to Pravos LLC. TND prices are the proposed reference prices; the exact foreign-currency amount and any applicable taxes will be shown before payment. Your bank must permit the international payment and may apply exchange fees. The payment flow here is only a preview.",
    },
    {
      q: "What if I need a person now?",
      a: "Please contact someone available to support you. This companion is not therapy, an emergency service or a substitute for human care. Neither it nor this page guarantees that I will see a message or respond. If there is immediate danger, contact local emergency services.",
    },
  ];
</script>

<svelte:head>
  <title>Coaching Companion · Coon Circles</title>
  <meta
    name="description"
    content="The questions Fatma would ask you, between your sessions. Explore a coaching companion on WhatsApp, shaped by your work together."
  />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="companion-page">
  <div class="preview-ribbon">
    <span>AN EARLY LOOK</span> A proposed offer. Payments and activation are not
    yet live.
  </div>
  <section class="hero wrap" aria-labelledby="companion-title">
    <div class="hero-copy">
      <div class="eyebrow">
        <span class="small-circle" aria-hidden="true"></span> COON COACHING COMPANION
      </div>
      <h1 id="companion-title">
        The questions I would ask you,<br /><em>between our sessions.</em>
      </h1>
      <figure class="fatma-note">
        <blockquote>
          <p class="hero-intro">
            “I am going on maternity leave. Your business is not.
          </p>
          <p class="hero-body">
            So I built a companion on WhatsApp, shaped by my questions, my
            directness, and the work we choose to carry forward together. A
            little space to pause, find your own clarity, and decide what comes
            next.”
          </p>
        </blockquote>
        <figcaption class="signature">
          <span class="profile-photo"
            ><img src="/hero-fatma.webp" alt="" width="72" height="72" /></span
          >
          <span>Fatma Ghedira</span>
        </figcaption>
      </figure>
      <div class="hero-actions">
        <a class="button primary" href="#plans"
          >Find your rhythm
          <span aria-hidden="true">↗</span></a
        ><a class="text-link" href="#how-it-works"
          >How it works <span aria-hidden="true">↓</span></a
        >
      </div>
      <p class="hero-footnote">
        An AI companion, not me. Personal notes when I can.<br />No promised
        response time while I am on leave.
      </p>
    </div>
    <div class="hero-visual">
      <div class="orbit orbit-one" aria-hidden="true"></div>
      <div class="orbit orbit-two" aria-hidden="true"></div>
      <WhatsAppPreview />
    </div>
  </section>

  <div class="principles">
    <div class="wrap">
      <span>Rooted in our work</span><span class="dot" aria-hidden="true"
        >·</span
      ><span>With you on WhatsApp</span><span class="dot" aria-hidden="true"
        >·</span
      ><span>Space to find your own answers</span>
    </div>
  </div>

  <section class="section wrap moments" aria-labelledby="moments-title">
    <div class="section-heading">
      <p class="eyebrow">LIFE BETWEEN THE SESSIONS</p>
      <h2 id="moments-title">
        The hardest moments do not wait<br />for <em>Thursday at four.</em>
      </h2>
    </div>
    <div class="moment-grid">
      <article>
        <span class="chapter">01 / THE MOMENT</span>
        <h3>Before you react.</h3>
        <p>
          A message lands. Your jaw tightens. You want to fix it now. Sometimes
          one good question gives you enough room to choose your response.
        </p>
      </article>
      <article>
        <span class="chapter">02 / THE WEIGHT</span>
        <h3>When you carry it alone.</h3>
        <p>
          You are the owner. Everyone brings you their problems. Here is a place
          to put down what you are carrying and hear your own thinking.
        </p>
      </article>
      <article>
        <span class="chapter">03 / THE PRACTICE</span>
        <h3>When knowing is not doing.</h3>
        <p>
          You already know a lot. The work is noticing what happens when the
          stakes rise, and bringing your next action closer to what matters to
          you.
        </p>
      </article>
    </div>
  </section>

  <section class="relationship" aria-labelledby="relationship-title">
    <div class="wrap relationship-grid">
      <div class="portrait">
        <img
          src="/hero-fatma.webp"
          alt="Fatma in a sunlit courtyard, holding a frame drum"
          width="900"
          height="1125"
          loading="lazy"
        /><span>FATMA GHEDIRA · COACH & FACILITATOR</span>
      </div>
      <div class="relationship-copy">
        <p class="eyebrow">THE RELATIONSHIP IS THE STARTING POINT</p>
        <h2 id="relationship-title">
          A companion that coaches like me,<br /><em>and knows it is not me.</em
          >
        </h2>
        <p>
          My voice, my questions. Built around how I work as your leadership
          coach and organisational development consultant. How I ask one
          question and wait. How I bring you back to what is yours to own.
        </p>
        <p>
          With your agreement, it can draw on the goals, commitments and history
          of our work. You do not have to start from zero every time something
          happens.
        </p>
        <blockquote>
          “What do you already know,<br />and what are you avoiding?”
        </blockquote>
        <p class="small-copy">
          It is designed to offer a question before an answer, and a different
          perspective before easy agreement. It can still get things wrong. Your
          judgement stays at the centre.
        </p>
      </div>
    </div>
  </section>

  <section id="how-it-works" class="section wrap" aria-labelledby="how-title">
    <div class="section-heading">
      <p class="eyebrow">SIMPLE ENOUGH FOR A REAL DAY</p>
      <h2 id="how-title">
        One familiar place.<br /><em>A different kind of conversation.</em>
      </h2>
    </div>
    <ol class="steps">
      <li>
        <span>01</span>
        <h3>We say yes together.</h3>
        <p>
          We agree what the companion is, what it remembers, who can access your
          words, and what it cannot do.
        </p>
      </li>
      <li>
        <span>02</span>
        <h3>You save one number.</h3>
        <p>
          A dedicated WhatsApp conversation. No new coaching app to fit into
          your day.
        </p>
      </li>
      <li>
        <span>03</span>
        <h3>You write when it is alive.</h3>
        <p>
          Before a hard meeting. After a difficult decision. It asks. You
          answer. There is room to go deeper.
        </p>
      </li>
      <li>
        <span>04</span>
        <h3>You take it into your life.</h3>
        <p>
          A clearer question. A conversation to have. A commitment to return to.
          The next step stays yours.
        </p>
      </li>
    </ol>
  </section>

  <section
    class="comparison-section section"
    aria-labelledby="comparison-title"
  >
    <div class="wrap">
      <div class="comparison-intro">
        <div>
          <p class="eyebrow">A FAIR QUESTION</p>
          <h2 id="comparison-title">
            “Why not just<br /><em>use Claude?”</em>
          </h2>
        </div>
        <p>
          You can. Claude can be a thoughtful partner, and you can customise it.
          This companion is for continuing the work you and I have already
          begun, with the approach and context prepared for that purpose.
        </p>
      </div>
      <div
        class="comparison-table"
        role="region"
        aria-label="Claude and Coon Companion comparison"
      >
        <table>
          <caption class="sr-only"
            >What is different about the Coon Coaching Companion</caption
          ><thead
            ><tr
              ><th scope="col">What matters</th><th scope="col"
                >Claude, used directly</th
              ><th scope="col">Coon Companion</th></tr
            ></thead
          ><tbody
            >{#each comparisons as item}<tr
                ><th scope="row">{item.question}</th><td>{item.claude}</td><td
                  >{item.coon}</td
                ></tr
              >{/each}</tbody
          >
        </table>
      </div>
      <div class="mobile-comparison">
        {#each comparisons as item}<article>
            <h3>{item.question}</h3>
            <dl>
              <div>
                <dt>Claude, used directly</dt>
                <dd>{item.claude}</dd>
              </div>
              <div>
                <dt>Coon Companion</dt>
                <dd>{item.coon}</dd>
              </div>
            </dl>
          </article>{/each}
      </div>
      <p class="comparison-note">
        Both use AI. Both can make mistakes or reinforce biases. Neither
        replaces a human relationship or urgent support. <a
          href="https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features"
          target="_blank"
          rel="noopener noreferrer">About Claude’s customisation ↗</a
        >
      </p>
    </div>
  </section>

  <section class="section wrap theory" aria-labelledby="theory-title">
    <div>
      <p class="eyebrow">THE WORK BEHIND THE QUESTIONS</p>
      <h2 id="theory-title">
        Theory underneath.<br /><em>Plain words between us.</em>
      </h2>
      <p>
        Leadership practice, group dynamics, systems thinking and ethics inform
        the questions. You do not need to learn the vocabulary to use the space.
      </p>
      <p class="small-copy">
        These are lenses for reflection, not diagnoses. The companion itself is
        a pilot, not a clinically validated intervention.
      </p>
    </div>
    <div class="theory-details">
      <details>
        <summary
          ><span>01</span> Your part in the pattern
          <span class="plus" aria-hidden="true">+</span></summary
        >
        <p>
          Group dynamics asks us to look beyond one person’s behaviour and
          notice the relationships around it. A coaching question might be:
          “What part of this pattern is yours to change?”
        </p>
      </details>
      <details>
        <summary
          ><span>02</span> Enough safety for honesty
          <span class="plus" aria-hidden="true">+</span></summary
        >
        <p>
          Psychological safety offers a lens on speaking up, asking for help and
          learning together. In practice: “What would make it easier for your
          team to tell you something difficult?”
        </p>
        <a
          href="https://doi.org/10.2307/2666999"
          target="_blank"
          rel="noopener noreferrer">Amy Edmondson’s research ↗</a
        >
      </details>
      <details>
        <summary
          ><span>03</span> From insight to a next step
          <span class="plus" aria-hidden="true">+</span></summary
        >
        <p>
          Developmental coaching keeps your capacity to choose at the centre. My
          practice brings together what you think, what you feel, and what you
          actually do. “What is one action you are ready to take?”
        </p>
      </details>
    </div>
  </section>

  <section
    id="plans"
    class="section wrap plans-section"
    aria-labelledby="plans-title"
  >
    <div class="section-heading centered">
      <p class="eyebrow">CHOOSE THE SPACE YOU NEED</p>
      <h2 id="plans-title">The same care.<br /><em>Your own rhythm.</em></h2>
      <p>
        Three monthly allowances. The same coaching approach.<br />No pressure
        to choose more than you need.
      </p>
    </div>
    <div class="plan-grid">
      {#each plans as plan}<article
          class="plan"
          class:recommended={plan.id === "practice"}
        >
          <div class="plan-top">
            <span class="eyebrow">{plan.name}</span
            >{#if plan.id === "practice"}<span class="recommendation"
                >A place to start</span
              >{/if}
          </div>
          <p class="plan-description">{plan.description}</p>
          <p class="price">
            {plan.price} <span>TND <small>/ month</small></span>
          </p>
          <div class="allowance">
            <strong>{plan.replies}</strong> companion replies per month
          </div>
          <p class="rhythm">{plan.rhythm}</p>
          <ul>
            <li>Fatma’s coaching approach</li>
            <li>Your agreed context and commitments</li>
            <li>A dedicated WhatsApp conversation</li>
            <li>No automatic overage charges</li>
          </ul>
          <div class="personal-notes">
            <strong>Personal notes from Fatma</strong>
            <p>
              Occasional text or voice notes when I am able, with no fixed
              schedule or promised response time during maternity leave.
            </p>
          </div>
          <CheckoutPreview
            offer={plan}
            label={"Explore " + plan.name}
            featured={plan.id === "practice"}
          />
        </article>{/each}
    </div>
    <div class="plan-notes">
      <p>
        Personal notes are available on the same basis across all three plans.
        Live coaching sessions are separate.
      </p>
      <p>
        Proposed pilot prices and allowances, to be confirmed before payment.
        Monthly allowances do not roll over. <a href="#questions"
          >How usage works ↓</a
        >
      </p>
      <span
        >Payment preview · Card in USD or EUR · Bank transfer by invoice</span
      >
    </div>
  </section>

  <section class="human-section section" aria-labelledby="human-title">
    <div class="wrap human-grid">
      <div>
        <p class="eyebrow">AND WHEN WE MEET AGAIN</p>
        <h2 id="human-title">
          Our work is bigger<br /><em>than this companion.</em>
        </h2>
        <p>
          When I have space for sessions again, we can return to the work
          together. You can keep the companion alongside our calls, or decide
          you no longer need it.
        </p>
        <p>
          For now, my return date is open. I am not taking advance payments for
          sessions I cannot yet schedule.
        </p>
        <div class="availability">
          <span aria-hidden="true"></span> Live sessions reopen when I am available.
        </div>
      </div>
      <div class="session-card">
        <p class="eyebrow">FUTURE COACHING OPTIONS</p>
        <h3>Time with me.</h3>
        <div class="session-line">
          <span>One session</span><strong>750 TND</strong>
        </div>
        <div class="session-bundles">
          <h4>Session bundles</h4>
          <dl>
            <div>
              <dt>3 sessions <small>700 TND each</small></dt>
              <dd>2,100 TND</dd>
            </div>
            <div>
              <dt>6 sessions <small>650 TND each</small></dt>
              <dd>3,900 TND</dd>
            </div>
            <div>
              <dt>12 sessions <small>600 TND each</small></dt>
              <dd>7,200 TND</dd>
            </div>
          </dl>
        </div>
        <p class="small-copy">
          Proposed future pricing. Session length, booking and cancellation
          terms will be confirmed when appointments reopen. Companion
          subscription separate.
        </p>
        <a
          class="text-link"
          href="mailto:fatma@cooncircles.com?subject=Coaching%20when%20sessions%20reopen"
          >Ask about future availability <span aria-hidden="true">↗</span></a
        >
        <p class="small-copy">
          Opens your email app. There is no booking or payment.
        </p>
      </div>
    </div>
  </section>

  <section id="questions" class="section wrap faq" aria-labelledby="faq-title">
    <div>
      <p class="eyebrow">BEFORE YOU SAY YES</p>
      <h2 id="faq-title">A few things,<br /><em>said plainly.</em></h2>
      <p>
        You deserve to know what this is, what it holds, and where its limits
        are.
      </p>
    </div>
    <div>
      {#each questions as question}<details>
          <summary
            >{question.q}<span class="plus" aria-hidden="true">+</span></summary
          >
          <p>{question.a}</p>
        </details>{/each}
    </div>
  </section>

  <section class="closing">
    <div class="wrap">
      <p class="eyebrow">CONTINUITY, WITH ROOM TO BREATHE</p>
      <h2>You do not have to have<br /><em>it all figured out.</em></h2>
      <p>
        Bring what is alive. Start with one question.<br />See whether this
        space helps you hear yourself more clearly.
      </p>
      <a class="button primary" href="#plans"
        >Find your rhythm
        <span aria-hidden="true">↗</span></a
      ><span class="sign-off">With care, Fatma</span>
      <span class="profile-photo closing-photo"
        ><img
          src="/hero-fatma.webp"
          alt="Fatma Ghedira"
          width="128"
          height="128"
          loading="lazy"
        /></span
      >
    </div>
  </section>
</div>

<style>
  .fatma-note {
    margin: 0;
  }
  .fatma-note blockquote {
    border-left: 2px solid #a58c67;
    padding-left: 22px;
  }
  .profile-photo {
    display: block;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .profile-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(2.1);
    transform-origin: 60% 46%;
  }
  .closing-photo {
    width: 128px;
    height: 128px;
    margin: 24px auto 0;
    border: 3px solid #f8f2e8;
  }
  .personal-notes {
    border-top: 1px solid #c5bea9;
    padding-top: 20px;
    margin-bottom: 24px;
  }
  .personal-notes strong {
    display: block;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  .personal-notes p {
    font-size: 14px;
    line-height: 1.75;
    color: var(--ink);
  }
  .plan-top .eyebrow {
    font-size: 14px;
  }
  .session-bundles h4 {
    font-family: Rubik, sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin: 24px 0 20px;
  }
  .session-card .small-copy {
    font-size: 13px !important;
  }
  .companion-page {
    --ink: #55452f;
    --soft-ink: #70624d;
    --line: #d9d0bf;
    --paper: #f8f2e8;
    color: var(--ink);
    background: var(--paper);
    overflow: clip;
  }
  .wrap {
    max-width: 1180px;
    margin-inline: auto;
    padding-inline: 36px;
  }
  .preview-ribbon {
    text-align: center;
    background: #ececdd;
    padding: 10px 18px;
    font-size: 11px;
    color: #625b45;
    border-bottom: 1px solid #dedcc9;
  }
  .preview-ribbon span {
    font-size: 9px;
    letter-spacing: 0.13em;
    font-weight: 500;
    margin-right: 12px;
  }
  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) 360px;
    align-items: center;
    gap: 56px;
    padding-block: 80px 86px;
  }
  .eyebrow {
    font-size: 10px;
    letter-spacing: 0.17em;
    line-height: 1.8;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 23px;
  }
  .hero-copy > .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .small-circle {
    width: 9px;
    height: 9px;
    background: #9caa82;
    border-radius: 50%;
  }
  h1,
  h2,
  h3 {
    font-weight: 400;
  }
  h1 {
    font-size: clamp(42px, 4.4vw, 62px);
    line-height: 1.1;
    letter-spacing: -0.045em;
    margin: 0 0 28px;
  }
  em {
    font-weight: 400;
    color: #8b5b43;
  }
  .hero-intro {
    font-size: 20px;
    line-height: 1.7;
    margin-bottom: 12px;
  }
  .hero-body {
    max-width: 475px;
    font-size: 17px;
    line-height: 1.8;
    color: var(--soft-ink);
  }
  .hero-actions {
    display: flex;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    margin: 28px 0 34px;
  }
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
    padding: 15px 24px;
    border-radius: 30px;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
  }
  .primary {
    color: #fff;
    background: #675032;
    border: 1px solid #675032;
  }
  .primary:hover {
    background: #503d26;
  }
  .text-link {
    font-size: 12px;
    display: inline-flex;
    gap: 12px;
    align-items: center;
    text-decoration: underline;
    text-underline-offset: 5px;
    line-height: 1.8;
  }
  .signature {
    display: flex;
    align-items: center;
    gap: 16px;

    margin-top: 24px;
  }
  .signature img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 48%;
  }
  .signature span {
    display: block;
    font-size: 17px;
  }
  .hero-footnote {
    margin-top: 16px;
    font-size: 14px;
    line-height: 1.7;
    color: var(--soft-ink);
  }
  .hero-visual {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0;
    isolation: isolate;
  }
  .orbit {
    position: absolute;
    border: 1px solid #d5d4bb;
    border-radius: 50%;
    z-index: -1;
    width: 490px;
    height: 490px;
    top: 90px;
  }
  .orbit-one {
    background: #e9ead99c;
  }
  .orbit-two {
    transform: rotate(-25deg);
    width: 530px;
    height: 350px;
    top: 160px;
  }
  .principles {
    border-block: 1px solid var(--line);
  }
  .principles .wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    padding-block: 22px;
    font-size: 11px;
    color: #6d654e;
  }
  .dot {
    color: #ae906c;
  }
  .section {
    padding-block: 94px;
  }
  h2 {
    font-size: clamp(32px, 3.4vw, 46px);
    line-height: 1.15;
    letter-spacing: -0.035em;
    margin: 0 0 24px;
  }
  h3 {
    font-size: 25px;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }
  .section-heading {
    margin-bottom: 46px;
  }
  .section-heading .eyebrow {
    margin-bottom: 18px;
  }
  .moment-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
  .moment-grid article {
    border-top: 1px solid #c4b9a5;
    padding-top: 22px;
  }
  .chapter {
    font-size: 9px;
    letter-spacing: 0.12em;
    color: #817151;
    display: block;
    margin-bottom: 23px;
  }
  .moment-grid h3 {
    margin-bottom: 15px;
  }
  .moment-grid p,
  .relationship-copy > p,
  .theory > div > p,
  .human-grid > div > p,
  .faq > div > p {
    font-size: 13px;
    line-height: 1.9;
    color: var(--soft-ink);
  }
  .relationship {
    background: #eaeade;
    padding-block: 70px;
  }
  .relationship-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 86px;
    align-items: center;
  }
  .portrait {
    position: relative;
  }
  .portrait img {
    width: 100%;
    height: 470px;
    object-fit: cover;
    border-radius: 160px 160px 4px 4px;
  }
  .portrait span {
    display: block;
    font-size: 9px;
    letter-spacing: 0.1em;
    margin-top: 15px;
    text-align: center;
  }
  .relationship-copy > p {
    margin-bottom: 18px;
  }
  .relationship-copy blockquote {
    font:
      italic 29px/1.3 Fraunces,
      serif;
    color: #80604a;
    border-left: 1px solid #a58c67;
    padding-left: 22px;
    margin: 30px 0;
  }
  .small-copy {
    font-size: 11px !important;
    line-height: 1.8 !important;
    color: var(--soft-ink);
  }
  .steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    list-style: none;
    padding: 0;
  }
  .steps li > span {
    display: grid;
    place-items: center;
    border: 1px solid #b8b59a;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    font:
      18px Fraunces,
      serif;
    margin-bottom: 22px;
  }
  .steps h3 {
    font-size: 20px;
    margin-bottom: 14px;
  }
  .steps p {
    font-size: 12px;
    line-height: 1.85;
    color: var(--soft-ink);
  }
  .comparison-section {
    background: #f0e8dc;
  }
  .comparison-intro {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 70px;
    align-items: center;
    margin-bottom: 28px;
  }
  .comparison-intro > p {
    font-size: 14px;
    line-height: 1.9;
    color: var(--soft-ink);
    max-width: 430px;
  }
  .comparison-table {
    overflow-x: auto;
    border-block: 1px solid #c8bda9;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    table-layout: fixed;
  }
  th,
  td {
    padding: 20px 24px;
    font-size: 12px;
    line-height: 1.8;
    vertical-align: top;
  }
  thead th {
    font-size: 10px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding-block: 22px;
  }
  th:first-child {
    width: 25%;
    padding-left: 0;
  }
  tbody th {
    font-weight: 500;
  }
  tbody tr {
    border-top: 1px solid #d8cebd;
  }
  td {
    color: var(--soft-ink);
  }
  th:last-child,
  td:last-child {
    background: #e3e5d6;
  }
  .mobile-comparison {
    display: none;
  }
  .comparison-note {
    font-size: 10px;
    line-height: 1.8;
    max-width: 800px;
    margin-top: 20px;
    color: var(--soft-ink);
  }
  .comparison-note a {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .theory {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
  }
  .theory > div > p {
    margin-bottom: 20px;
  }
  details {
    border-bottom: 1px solid var(--line);
  }
  summary {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 22px 0;
    list-style: none;
    font-size: 13px;
    line-height: 1.5;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary > span:first-child:not(.plus) {
    color: #927c5a;
    font-size: 10px;
  }
  .plus {
    margin-left: auto;
    font-size: 20px;
    font-weight: 300;
  }
  details[open] .plus {
    transform: rotate(45deg);
  }
  details > p {
    font-size: 12px;
    line-height: 1.9;
    color: var(--soft-ink);
    padding-bottom: 20px;
  }
  .theory-details a {
    display: inline-block;
    font-size: 11px;
    text-decoration: underline;
    padding-bottom: 20px;
  }
  .centered {
    text-align: center;
  }
  .centered > p:last-child {
    font-size: 13px;
    line-height: 1.9;
    color: var(--soft-ink);
  }
  .plans-section {
    border-top: 1px solid var(--line);
  }
  .plan-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }
  .plan {
    display: flex;
    flex-direction: column;
    background: #fcf9f2;
    border: 1px solid #cec5b4;
    border-radius: 14px;
    padding: 28px;
  }
  .plan.recommended {
    background: #e9ecde;
    border-color: #879474;
    box-shadow: 0 7px 24px #4b59380a;
  }
  .plan-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    min-height: 25px;
  }
  .plan-top .eyebrow {
    margin: 0;
  }
  .recommendation {
    font-size: 11px;
    background: #d5ddc7;
    padding: 5px 8px;
    border-radius: 20px;
    white-space: nowrap;
    color: #4f603e;
  }
  .plan-description {
    font-size: 16px;
    line-height: 1.8;
    color: var(--soft-ink);
    margin-top: 20px;
    min-height: 58px;
  }
  .price {
    font:
      53px/1.2 Fraunces,
      serif;
    letter-spacing: -0.04em;
    margin: 24px 0 22px;
  }
  .price > span {
    font:
      12px Rubik,
      sans-serif;
    letter-spacing: 0;

    font-size: 16px;
  }
  .price small {
    font-size: 14px;
    color: var(--soft-ink);
  }
  .allowance {
    border-block: 1px solid #d4cbbb;
    padding-block: 17px;
    font-size: 15px;
  }
  .allowance strong {
    font-size: 23px;
    font-weight: 500;
    margin-right: 4px;
  }
  .rhythm {
    font-size: 15px;
    color: var(--soft-ink);
    margin: 16px 0 8px;
  }
  .plan ul {
    padding: 0;
    margin: 10px 0 28px;
    list-style: none;
    flex: 1;
  }
  .plan li {
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 12px;
    padding-left: 19px;
    position: relative;
  }
  .plan li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #738363;
  }
  .plan-notes {
    max-width: 720px;
    text-align: center;
    margin: 24px auto 0;
  }
  .plan-notes p {
    font-size: 14px;
    line-height: 1.8;
    margin: 8px 0;
    color: var(--soft-ink);
  }
  .plan-notes a {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .plan-notes > span {
    display: block;
    margin-top: 22px;
    font-size: 13px;
    color: var(--soft-ink);
  }
  .human-section {
    background: #eaeade;
  }
  .human-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 100px;
  }
  .human-grid > div > p {
    margin-bottom: 18px;
  }
  .availability {
    display: flex;
    gap: 9px;
    align-items: center;
    font-size: 11px;
    margin-top: 28px;
  }
  .availability span {
    border: 1px solid #887451;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .session-card {
    padding: 30px;
    border: 1px solid #c4c5b1;
    border-radius: 12px;
    background: #f5f3e9;
  }
  .session-card h3 {
    font-size: 31px;
    margin-bottom: 24px;
  }
  .session-line {
    display: flex;
    justify-content: space-between;
    gap: 14px;
    font-size: 17px;
    border-bottom: 1px solid var(--line);
    padding-bottom: 20px;
  }
  .session-line strong {
    font-weight: 500;
  }
  .session-card dl > div {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .session-card dt small {
    display: block;
    color: var(--soft-ink);
    margin-top: 4px;
  }
  .session-card > .small-copy {
    margin-top: 17px;
  }
  .session-card > .text-link {
    margin-top: 10px;
  }
  .faq {
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    gap: 100px;
  }
  .faq summary {
    font-size: 13px;
    justify-content: space-between;
  }
  .closing {
    text-align: center;
    background: #eee4d6;
    padding: 85px 0;
    border-top: 1px solid #d7cab6;
  }
  .closing p:not(.eyebrow) {
    font-size: 13px;
    line-height: 1.9;
    margin-bottom: 27px;
    color: var(--soft-ink);
  }
  .sign-off {
    display: block;
    font:
      italic 21px Fraunces,
      serif;
    margin-top: 28px;
    color: #896347;
  }
  :global(.companion-page a:focus-visible),
  summary:focus-visible,
  .comparison-table:focus-visible {
    outline: 3px solid #765e85;
    outline-offset: 5px;
  }
  section[id] {
    scroll-margin-top: 88px;
  }
  @media (max-width: 1023px) {
    .wrap {
      padding-inline: 28px;
    }
    .hero {
      gap: 30px;
      padding-block: 60px;
    }
    h1 {
      font-size: 44px;
    }
    .relationship-grid,
    .human-grid,
    .theory,
    .faq {
      gap: 45px;
    }
    .plan {
      padding: 22px 18px;
    }
    .plan-top {
      flex-wrap: wrap;
      align-content: flex-start;
      min-height: 48px;
    }
    .price {
      font-size: 46px;
    }
    .steps {
      gap: 20px;
    }
    .steps h3 {
      font-size: 19px;
    }
  }
  @media (min-width: 768px) and (max-width: 900px) {
    .hero {
      grid-template-columns: 1fr;
      gap: 48px;
    }
    .hero-copy {
      max-width: 580px;
      margin-inline: auto;
    }
  }
  @media (max-width: 767px) {
    .wrap {
      padding-inline: 23px;
    }
    .section {
      padding-block: 64px;
    }
    .hero {
      grid-template-columns: 1fr;
      gap: 45px;
      padding-block: 48px 55px;
    }
    .hero-copy {
      max-width: 530px;
      margin: auto;
    }
    h1 {
      font-size: 45px;
    }
    .hero-intro {
      font-size: 20px;
    }
    .hero-visual {
      max-width: 410px;
      width: 100%;
      margin-inline: auto;
      padding: 0;
    }
    .orbit {
      width: 400px;
      height: 400px;
    }
    .orbit-two {
      width: 435px;
      height: 320px;
    }
    .hero-body {
      font-size: 17px;

      line-height: 1.8;
    }
    .preview-ribbon {
      font-size: 10px;
      line-height: 1.6;
    }
    .preview-ribbon span {
      display: block;
      margin: 0;
    }
    .principles .wrap {
      gap: 8px 20px;
      font-size: 10px;
      padding-block: 17px;
    }
    .principles .dot {
      display: none;
    }
    .moment-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }
    .moment-grid article {
      padding-top: 18px;
    }
    .chapter {
      margin-bottom: 15px;
    }
    .relationship-grid,
    .theory,
    .human-grid,
    .faq {
      grid-template-columns: 1fr;
      gap: 38px;
    }
    .relationship {
      padding-block: 55px;
    }
    .portrait {
      max-width: 360px;
      margin-inline: auto;
    }
    .portrait img {
      height: 370px;
    }
    .relationship-copy blockquote {
      font-size: 27px;
    }
    .steps {
      grid-template-columns: 1fr 1fr;
      gap: 32px 24px;
    }
    .comparison-intro {
      grid-template-columns: 1fr;
      gap: 0;
    }
    .comparison-intro > p {
      margin-bottom: 20px;
    }
    .comparison-table {
      display: none;
    }
    .mobile-comparison {
      display: block;
    }
    .mobile-comparison article {
      padding-block: 20px;
      border-top: 1px solid #c8bda9;
    }
    .mobile-comparison h3 {
      font-size: 20px;
      margin-bottom: 15px;
    }
    .mobile-comparison dl {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    .mobile-comparison dl > div {
      padding: 12px;
    }
    .mobile-comparison dl > div:last-child {
      background: #e3e5d6;
      border-radius: 6px;
    }
    .mobile-comparison dt {
      font-size: 10px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .mobile-comparison dd {
      font-size: 12px;
      line-height: 1.85;
      color: var(--soft-ink);
    }
    th,
    td {
      font-size: 11px;
      padding: 17px 12px;
    }
    thead th {
      font-size: 9px;
    }
    th:first-child {
      width: 25%;
      padding-right: 8px;
    }
    .plan-grid {
      grid-template-columns: 1fr;
      gap: 20px;
      max-width: 470px;
      margin-inline: auto;
    }
    .plan {
      padding: 28px;
    }
    .plan-top {
      min-height: unset;
      flex-wrap: nowrap;
    }
    .plan-description {
      min-height: 58px;

      font-size: 16px;
    }
    .price {
      font-size: 52px;
    }
    .plan li {
      font-size: 15px;
    }
    .plan-notes {
      margin-top: 22px;
    }
    .session-card {
      padding: 25px;
    }
    .closing {
      padding-block: 65px;
    }
  }
  @media (max-width: 380px) {
    h1 {
      font-size: 39px;
    }
    .hero-actions {
      gap: 18px;
    }
    th,
    td {
      padding-inline: 8px;
      font-size: 10px;
    }
    .plan {
      padding: 23px;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      transition: none !important;
    }
  }
</style>
