const feedbackEl = document.getElementById('feedback');

export function showAlert(msg) {
  const alertHtml = `
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
    ${msg}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>  
  `;
  feedbackEl.innerHTML = alertHtml;
}

export function clearFeedback() {
  feedbackEl.innerHTML = '';
}
