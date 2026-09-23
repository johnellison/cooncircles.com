<script lang="ts">
  let conversation = $state<"before" | "after">("before");
  const conversations = {
    before: [
      {
        from: "you",
        text: "I want to send this message now. I am angry.",
        time: "09:41",
      },
      {
        from: "companion",
        text: "Before you send it, take one breath. What do you want this conversation to make possible?",
        time: "09:41",
      },
      {
        from: "you",
        text: "I want us to agree who owns the decision.",
        time: "09:42",
      },
      {
        from: "companion",
        text: "What could you ask that would help you get there?",
        time: "09:42",
      },
    ],
    after: [
      {
        from: "you",
        text: "I had the conversation we prepared.",
        time: "18:12",
      },
      {
        from: "companion",
        text: "What did you notice in yourself when you let the other person answer?",
        time: "18:12",
      },
      {
        from: "you",
        text: "I did not need to fill the silence. We found a way forward together.",
        time: "18:13",
      },
      {
        from: "companion",
        text: "You gave the conversation room. What would you like to carry into the next one?",
        time: "18:13",
      },
    ],
  };
</script>

<figure class="chat-demo">
  <div class="scene-switch" aria-label="Choose an example conversation">
    <button
      aria-pressed={conversation === "before"}
      onclick={() => (conversation = "before")}>Before the meeting</button
    >
    <button
      aria-pressed={conversation === "after"}
      onclick={() => (conversation = "after")}>After the conversation</button
    >
  </div>
  <div class="device-stage">
    <div class="phone">
      <div class="phone-status" aria-hidden="true">
        <span>9:41</span><span class="island"></span><span>▮▮▮ ▰</span>
      </div>
      <div class="chat-header">
        <span class="back" aria-hidden="true">‹</span><span
          class="avatar"
          aria-hidden="true">c.</span
        >
        <div>
          <strong>Coon Companion</strong><span>AI coaching · on WhatsApp</span>
        </div>
      </div>
      <div class="chat-content" aria-live="polite" aria-atomic="true">
        <span class="day-label">AN EXAMPLE MOMENT</span>
        <p class="disclosure">
          An AI companion shaped by Fatma’s approach. It is not Fatma.
        </p>
        {#each conversations[conversation] as message}
          <div class:sent={message.from === "you"} class="bubble">
            <span class="sr-only"
              >{message.from === "you" ? "You" : "Companion"}:
            </span>{message.text}
            <span class="time" aria-hidden="true"
              >{message.time}{message.from === "you" ? " ✓✓" : ""}</span
            >
          </div>
        {/each}
      </div>
      <div class="compose" aria-hidden="true">
        <span>＋</span>
        <div>A little space to think…</div>
        <span>◉</span>
      </div>
      <div class="home-bar" aria-hidden="true"></div>
    </div>
  </div>
  <figcaption>
    Illustrative exchanges. Not real client conversations.
  </figcaption>
</figure>

<style>
  .chat-demo {
    margin: 0;
    width: 360px;
    max-width: 100%;
    position: relative;
  }
  .scene-switch {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: 22px;
  }
  .scene-switch button {
    padding: 9px 11px;
    font-size: 11px;
    border-radius: 30px;
    border: 1px solid #a49a88;
    color: #51442f;
  }
  .scene-switch button[aria-pressed="true"] {
    background: #675032;
    color: #fff;
    border-color: #675032;
  }
  .scene-switch button:focus-visible {
    outline: 3px solid #675032;
    outline-offset: 3px;
  }
  .device-stage {
    width: 360px;
    height: 780px;
    margin-inline: auto;
  }
  .phone {
    width: 360px;
    height: 780px;
    display: flex;
    flex-direction: column;
    transform-origin: top left;
    flex-shrink: 0;
    border: 7px solid #49473d;
    border-radius: 44px;
    overflow: hidden;
    background: #f5f3ee;
    box-shadow:
      0 26px 65px #433f3626,
      inset 0 0 0 1px #fff;
  }
  .phone-status {
    height: 37px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 22px;
    color: #2c352f;
    font-size: 11px;
    font-weight: 600;
  }
  .island {
    width: 85px;
    height: 21px;
    border-radius: 20px;
    background: #49473d;
  }
  .chat-header {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 10px 12px 15px;
    border-bottom: 1px solid #d9ded4;
  }
  .back {
    font-size: 32px;
    color: #3c6255;
    line-height: 1;
  }
  .avatar {
    background: #d5e6d3;
    color: #3e5c47;
    font-family: Fraunces, serif;
    width: 39px;
    height: 39px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 27px;
  }
  .chat-header strong {
    display: block;
    color: #304a3e;
    font-size: 14px;
    font-weight: 500;
  }
  .chat-header div span {
    display: block;
    color: #5b675d;
    font-size: 10px;
    margin-top: 3px;
  }
  .chat-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 18px 15px 22px;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    background-color: #e9e9df;
    background-image: radial-gradient(#c5c8b96b 1px, transparent 1px);
    background-size: 17px 17px;
  }
  .day-label {
    align-self: center;
    padding: 4px 10px;
    background: #ffffffc9;
    border-radius: 5px;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: #5d645b;
  }
  .disclosure {
    align-self: center;
    max-width: 235px;
    text-align: center;
    color: #595c4d;
    font-size: 11px;
    line-height: 1.5;
    margin: 0 0 2px;
  }
  .bubble {
    background: #fff;
    border-radius: 2px 12px 12px 12px;
    color: #303e34;
    padding: 11px 12px 6px;
    font-size: 15px;
    line-height: 1.6;
    max-width: 88%;
    box-shadow: 0 1px 2px #0000000b;
  }
  .sent {
    align-self: flex-end;
    background: #d9e9c8;
    border-radius: 12px 2px 12px 12px;
  }
  .time {
    display: block;
    text-align: right;
    font-size: 10px;
    color: #64715d;
    line-height: 1.4;
    margin-top: 4px;
  }
  .compose {
    display: flex;
    align-items: center;
    padding: 11px 13px 6px;
    gap: 10px;
    color: #5e7969;
  }
  .compose div {
    flex: 1;
    border-radius: 24px;
    background: white;
    padding: 9px 12px;
    font-size: 10px;
    color: #747970;
  }
  .home-bar {
    flex-shrink: 0;
    background: #49473d;
    width: 100px;
    height: 4px;
    margin: 10px auto 7px;
    border-radius: 5px;
  }
  figcaption {
    color: #746955;
    text-align: center;
    font-size: 10px;
    line-height: 1.6;
    margin-top: 20px;
  }
  @media (max-width: 420px) {
    .device-stage {
      width: 300px;
      height: 650px;
    }
    .phone {
      transform: scale(0.8333333333);
    }
  }
  @media (max-width: 359px) {
    .device-stage {
      width: 270px;
      height: 585px;
    }
    .phone {
      transform: scale(0.75);
    }
  }
</style>
