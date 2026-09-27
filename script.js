const copyBtn = document.getElementById('copyEmailBtn');

if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const email = 'foundationsofaiagentsnyu@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      const original = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      setTimeout(() => copyBtn.textContent = original, 1400);
    } catch (err) {
      copyBtn.textContent = email;
    }
  });
}
