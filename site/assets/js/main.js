/* ============================================================
   Agency IA — JavaScript principal
   ============================================================ */

/* ---------- Formulaire de contact / audit ---------- */
const form = document.getElementById('audit-form');
if (form) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submit-btn');
    const errorDiv  = document.getElementById('form-error');
    const successDiv = document.getElementById('form-success');

    errorDiv.style.display   = 'none';
    successDiv.style.display = 'none';

    // Validation basique
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = 'rgba(220,50,50,.5)';
      } else {
        field.style.borderColor = '';
      }
    });

    if (!valid) {
      errorDiv.textContent = 'Merci de remplir tous les champs obligatoires (marqués *).';
      errorDiv.style.display = 'block';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours…';

    // Encoder les données au format attendu par Netlify Forms
    const encode = (data) => Object.keys(data)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
      .join('&');

    const payload = encode({
      'form-name':   'audit',
      contact_name:  form.contact_name.value.trim(),
      email:         form.email.value.trim(),
      company_name:  form.company_name.value.trim(),
      website:       form.website ? form.website.value.trim() : '',
      sector:        form.sector.value,
      offer:         form.offer ? form.offer.value : '',
      problem:       form.problem.value.trim()
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload
      });

      if (response.ok) {
        successDiv.textContent = 'Votre demande a bien été envoyée. Vous recevrez un email de confirmation dans quelques minutes. On revient vers vous sous 24h ouvrées.';
        successDiv.style.display = 'block';
        form.reset();
      } else {
        throw new Error('Erreur serveur : ' + response.status);
      }
    } catch (err) {
      errorDiv.textContent = 'Une erreur est survenue. Envoyez-nous directement un email à benjamin.fauchon05@gmail.com.';
      errorDiv.style.display = 'block';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Envoyer ma demande d\'audit →';
    }
  });
}

/* ---------- Pré-sélectionner l'offre via URL param ---------- */
(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const offerParam = urlParams.get('offer');
  const offerSelect = document.getElementById('offer');
  if (offerParam && offerSelect) {
    const option = offerSelect.querySelector(`option[value="${offerParam}"]`);
    if (option) option.selected = true;
  }
})();

/* ---------- Navigation active state ---------- */
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(link => {
    if (link.getAttribute('href') === path) {
      link.style.color = 'var(--white)';
    }
  });
})();
