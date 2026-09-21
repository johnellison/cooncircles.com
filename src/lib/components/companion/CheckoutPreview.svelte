<script lang="ts">
  import type { CompanionOffer } from "./offers";
  let {
    offer,
    label = "Explore this plan",
    featured = false,
  }: { offer: CompanionOffer; label?: string; featured?: boolean } = $props();
  let dialog: HTMLDialogElement;
  let method = $state<"card" | "transfer">("card");
  let currency = $state<"usd" | "eur">("usd");
  let stage = $state<"choose" | "complete">("choose");
  const amount = $derived(
    new Intl.NumberFormat("en", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(offer[currency]),
  );
</script>

<button
  class="checkout-trigger"
  class:featured
  onclick={() => {
    stage = "choose";
    method = "card";
    currency = "usd";
    dialog.showModal();
  }}>{label}<span aria-hidden="true">↗</span></button
>
<dialog
  bind:this={dialog}
  aria-labelledby={"checkout-title-" + offer.id}
  aria-describedby={"checkout-note-" + offer.id}
>
  <div class="dialog-inner">
    <div class="dialog-top">
      <span class="eyebrow">PAYMENT PREVIEW</span><button
        class="close"
        aria-label="Close payment preview"
        onclick={() => dialog.close()}>✕</button
      >
    </div>
    {#if stage === "choose"}
      <h2 id={"checkout-title-" + offer.id}>{offer.name}, at your pace.</h2>
      <p id={"checkout-note-" + offer.id} class="intro">
        This is a demonstration. No payment details are collected, no money is
        charged, and no subscription is created.
      </p>
      <div class="order">
        <div>
          <strong>{offer.name}</strong><span
            >{offer.replies} companion replies · {offer.id === "invitation"
              ? "30 days"
              : "monthly allowance"}</span
          >
        </div>
        <strong>{offer.price} <small>TND</small></strong>
      </div>
      <fieldset>
        <legend>How would you prefer to pay?</legend>
        <div class="choices">
          <label
            ><input type="radio" value="card" bind:group={method} /> Card
            <small>via Stripe</small></label
          >
          <label
            ><input type="radio" value="transfer" bind:group={method} /> Bank
            transfer <small>by invoice</small></label
          >
        </div>
      </fieldset>
      <label class="currency"
        >Example billing currency <select bind:value={currency}
          ><option value="usd">USD — US dollars</option><option value="eur"
            >EUR — euros</option
          ></select
        ></label
      >
      <div class="total">
        <span
          >Illustrative {method === "card"
            ? "card charge"
            : "invoice total"}</span
        ><strong>{amount}</strong>
      </div>
      <p class="fine">
        Sample conversion only, not a live quote. Final currency, taxes and
        total will be shown before a real payment. Your bank may charge exchange
        fees and must permit international payments.
      </p>
      {#if method === "card"}
        <p class="fine">
          The intended checkout is Stripe for Pravos LLC. Stripe is not
          connected in this preview. You do not need to enter a card.
        </p>
      {:else}
        <p class="fine">
          The intended transfer is to Pravos LLC’s Wise business account after
          an invoice and your bank’s approval. No bank details are published
          here.
        </p>
      {/if}
      <p class="terms">
        {offer.id === "invitation"
          ? "One month to explore. No automatic renewal or move to a higher price."
          : "Proposed monthly billing. Cancel before the next renewal. No automatic usage overages."}
        Live sessions are separate.
      </p>
      <button class="primary" onclick={() => (stage = "complete")}
        >{method === "card"
          ? "Preview the confirmation"
          : "Preview an invoice request"}<span aria-hidden="true">→</span
        ></button
      >
    {:else}
      <div class="confirmation" role="status">
        <span class="check" aria-hidden="true">✓</span>
        <h2 id={"checkout-title-" + offer.id}>
          {method === "card"
            ? "A little space to begin."
            : "A more personal way to pay."}
        </h2>
        <p id={"checkout-note-" + offer.id}>
          {method === "card"
            ? "In the live journey, a verified payment would be followed by your privacy choices and an invitation to the companion on WhatsApp."
            : "In the live journey, we would confirm that your bank can make the transfer, then send an invoice with verified payment instructions."}
        </p>
        <p class="notice">
          Preview only. {method === "card"
            ? "No payment was made and no access was activated."
            : "No request was sent and no invoice was created."}
        </p>
        <button class="primary" onclick={() => dialog.close()}
          >Back to the companion</button
        >
      </div>
    {/if}
  </div>
</dialog>

<style>
  .checkout-trigger,
  .primary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    width: 100%;
    border: 1px solid #675032;
    border-radius: 30px;
    color: #57452f;
    padding: 14px 20px;
    font-size: 13px;
    font-weight: 500;
    text-align: left;
    transition: background 0.2s;
  }
  .checkout-trigger:hover {
    background: #ece6da;
  }
  .checkout-trigger.featured,
  .primary {
    background: #675032;
    color: white;
  }
  .checkout-trigger.featured:hover,
  .primary:hover {
    background: #503d26;
  }
  dialog {
    color: #514431;
    border: 1px solid #cfc5b5;
    border-radius: 20px;
    width: min(540px, calc(100% - 28px));
    max-height: calc(100dvh - 32px);
    padding: 0;
    background: #fcf9f3;
  }
  dialog::backdrop {
    background: #29271fc2;
    backdrop-filter: blur(4px);
  }
  .dialog-inner {
    padding: 28px;
  }
  .dialog-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 15px;
  }
  .eyebrow {
    font-size: 10px;
    letter-spacing: 0.16em;
  }
  .close {
    width: 38px;
    height: 38px;
    border: 1px solid #d5caba;
    border-radius: 50%;
  }
  h2 {
    font-size: 30px;
    line-height: 1.2;
    margin: 0 0 16px;
    font-weight: 400;
  }
  .intro,
  .confirmation p {
    font-size: 13px;
    line-height: 1.7;
  }
  .order {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 20px 0;
    border-block: 1px solid #dbd2c2;
    margin: 22px 0;
  }
  .order strong {
    font-size: 19px;
    font-weight: 500;
  }
  .order span {
    display: block;
    font-size: 11px;
    margin-top: 6px;
  }
  .order small {
    font-size: 11px;
  }
  legend,
  .currency {
    font-size: 12px;
    font-weight: 500;
  }
  .choices {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 12px 0 20px;
  }
  .choices label {
    padding: 13px 10px;
    border: 1px solid #c5bcae;
    border-radius: 8px;
    font-size: 12px;
    cursor: pointer;
  }
  .choices label:has(input:checked) {
    border-color: #675032;
    background: #edeede;
  }
  .choices small {
    display: block;
    margin: 5px 0 0 19px;
    font-size: 10px;
  }
  input {
    accent-color: #675032;
    margin-right: 4px;
  }
  .currency {
    display: block;
  }
  select {
    display: block;
    padding: 10px;
    width: 100%;
    margin: 8px 0 20px;
    background: white;
    border: 1px solid #c5bcae;
    border-radius: 5px;
  }
  .total {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    gap: 16px;
  }
  .total strong {
    font-size: 22px;
  }
  .fine {
    font-size: 11px;
    line-height: 1.7;
    margin-top: 12px;
    color: #6a604e;
  }
  .terms,
  .notice {
    font-size: 12px;
    line-height: 1.7;
    margin: 20px 0;
    padding: 14px;
    background: #e9eddf;
    border-radius: 8px;
  }
  .confirmation {
    text-align: center;
    padding: 20px 0 8px;
  }
  .check {
    display: grid;
    place-items: center;
    margin: 0 auto 24px;
    border-radius: 50%;
    width: 54px;
    height: 54px;
    background: #d5e6d3;
    font-size: 24px;
  }
  button:focus-visible,
  select:focus-visible,
  input:focus-visible {
    outline: 3px solid #765e85;
    outline-offset: 4px;
  }
  @media (max-width: 400px) {
    .dialog-inner {
      padding: 20px;
    }
    h2 {
      font-size: 26px;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    button {
      transition: none;
    }
  }
</style>
