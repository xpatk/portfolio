import React from "react";

const EmailTemplate = ({ firstName }) => (
  <div>
    <h1>Bonjour, {firstName}!</h1>
    <p>Merci de m'avoir contactée via mon portfolio.</p>
    <p>Je vais examiner votre message et je vous répondrai dès que possible.</p>
    <p>Merci et à bientôt !</p>
  </div>
);

export default EmailTemplate;
